"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { syncCurrentUser } from "@/lib/syncUser";
import { revalidatePath } from "next/cache";

export interface PurchasePropertyParams {
  propertyId: string;
  pricePaid: number;
  propertyTitle?: string;
  propertyLocation?: string;
}

export async function purchaseProperty({
  propertyId,
  pricePaid,
  propertyTitle,
  propertyLocation,
}: PurchasePropertyParams) {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      error: "Authentication required. Please sign in to proceed with property purchase.",
    };
  }

  // Ensure user is synced in Neon PostgreSQL
  const dbUser = await syncCurrentUser();
  if (!dbUser) {
    return {
      success: false,
      error: "Failed to synchronize user account. Please try again.",
    };
  }

  // Get full buyer name from Clerk
  const clerkUser = await currentUser();
  const buyerName = clerkUser
    ? `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim() ||
    clerkUser.username ||
    "Authenticated Buyer"
    : "Authenticated Buyer";
  const buyerEmail = clerkUser?.emailAddresses?.[0]?.emailAddress || dbUser.email;

  try {
    const purchase = await prisma.purchase.create({
      data: {
        userId,
        userName: buyerName,
        userEmail: buyerEmail,
        propertyId,
        propertyTitle: propertyTitle || "Estate Property",
        propertyLocation: propertyLocation || "Prime Location",
        pricePaid,
        status: "SOLD",
      },
    });

    // Also sync to Sanity Studio if Write Token is present
    const sanityToken = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN;
    if (sanityToken) {
      try {
        const { client } = await import("@/sanity/lib/client");
        const writeClient = client.withConfig({
          token: sanityToken,
          useCdn: false,
        });

        // 1. Resolve actual Sanity property document _id
        let targetPropertyId = propertyId ? propertyId.replace(/^drafts\./, "") : "";
        try {
          const foundId = await writeClient.fetch(
            `*[_type == "property" && (_id == $id || _id == "drafts." + $id || slug.current == $id || title == $title)][0]._id`,
            { id: targetPropertyId, title: propertyTitle || "" }
          );
          if (foundId) {
            targetPropertyId = foundId.replace(/^drafts\./, "");
          }
        } catch (lookupErr) {
          console.warn("Sanity property ID lookup error:", lookupErr);
        }

        const isRealSanityDoc = targetPropertyId && targetPropertyId.length > 5;

        // 2. Create Purchase document in Sanity Studio
        const purchaseDoc: any = {
          _type: "purchase",
          buyerName,
          buyerEmail,
          pricePaid,
          status: "Sold",
          purchasedAt: new Date().toISOString(),
          notes: `Automated purchase by ${buyerName} (${buyerEmail}) for "${propertyTitle || "Estate Property"}"`,
        };

        if (isRealSanityDoc) {
          purchaseDoc.property = {
            _type: "reference",
            _ref: targetPropertyId,
          };
        }

        await writeClient.create(purchaseDoc);

        // 3. Automatically flip Property Status to 'Sold' in Sanity CMS
        if (isRealSanityDoc) {
          await writeClient.patch(targetPropertyId).set({ status: "Sold" }).commit();
        }
      } catch (sanityErr) {
        console.error("Sanity automated purchase write error:", sanityErr);
      }
    }

    revalidatePath("/");
    revalidatePath("/properties");
    revalidatePath(`/propertydetails/${propertyId}`);

    return {
      success: true,
      purchaseId: purchase.id,
      message: `Congratulations ${buyerName}! Your purchase reservation for "${propertyTitle || "this property"}" has been recorded.`,
    };
  } catch (error: any) {
    console.error("Purchase transaction error:", error);
    return {
      success: false,
      error: error?.message || "An unexpected error occurred during the transaction.",
    };
  }
}

