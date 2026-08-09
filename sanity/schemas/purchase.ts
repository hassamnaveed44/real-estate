import { defineField, defineType } from "sanity";

export const purchaseSchema = defineType({
  name: "purchase",
  title: "Purchase / Reservation",
  type: "document",
  fields: [
    defineField({
      name: "buyerName",
      title: "Buyer Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "buyerEmail",
      title: "Buyer Email Address",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "property",
      title: "Associated Property",
      type: "reference",
      to: [{ type: "property" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pricePaid",
      title: "Purchase / Reservation Price ($)",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "status",
      title: "Purchase Status",
      type: "string",
      options: {
        list: [
          { title: "Pending Review", value: "Pending" },
          { title: "Confirmed / Reserved", value: "Confirmed" },
          { title: "Sold / Completed", value: "Sold" },
          { title: "Cancelled", value: "Cancelled" },
        ],
        layout: "radio",
      },
      initialValue: "Confirmed",
    }),
    defineField({
      name: "purchasedAt",
      title: "Transaction Date & Time",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "notes",
      title: "Admin Notes & Follow-up",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: {
      buyer: "buyerName",
      propertyTitle: "property.title",
      price: "pricePaid",
      status: "status",
      media: "property.images.0",
    },
    prepare(selection) {
      const { buyer, propertyTitle, price, status, media } = selection;
      return {
        title: `${buyer} → ${propertyTitle || "Property"}`,
        subtitle: `$${price ? price.toLocaleString() : 0} [${status || "Confirmed"}]`,
        media: media,
      };
    },
  },
});
