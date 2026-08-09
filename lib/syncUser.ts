import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./prisma";

export async function syncCurrentUser() {
  const user = await currentUser();
  if (!user) return null;

  const email = user.emailAddresses?.[0]?.emailAddress || "";
  const roleMetadata = (user.publicMetadata?.role as string)?.toUpperCase();
  const role = roleMetadata === "MANAGER" ? "MANAGER" : roleMetadata === "AGENT" ? "AGENT" : "CUSTOMER";

  try {
    const dbUser = await prisma.user.upsert({
      where: { id: user.id },
      update: {
        email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: role as any,
      },
      create: {
        id: user.id,
        email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: role as any,
      },
    });
    return dbUser;
  } catch (error) {
    console.error("Error syncing Clerk user to PostgreSQL:", error);
    return null;
  }
}
