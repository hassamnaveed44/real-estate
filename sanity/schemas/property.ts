import { defineField, defineType } from "sanity";

export const property = defineType({
  name: "property",
  title: "Property Listing",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Property Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price (USD)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Villa", value: "Villa" },
          { title: "Apartment", value: "Apartment" },
          { title: "Cottage", value: "Cottage" },
          { title: "Penthouse", value: "Penthouse" },
          { title: "House", value: "House" },
          { title: "Commercial", value: "Commercial" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bedrooms",
      title: "Bedrooms Count / Text",
      type: "string",
      placeholder: "04-Bedroom",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bathrooms",
      title: "Bathrooms Count / Text",
      type: "string",
      placeholder: "03-Bathroom",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "area",
      title: "Area (e.g. 2,500 sq ft)",
      type: "string",
      placeholder: "2,500 sq ft",
    }),
    defineField({
      name: "location",
      title: "Location / Address",
      type: "string",
      placeholder: "Malibu, California",
    }),
    defineField({
      name: "images",
      title: "Property Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "status",
      title: "Listing Status (Editorial Review)",
      type: "string",
      options: {
        list: [
          { title: "Draft (Agent in-progress)", value: "Draft" },
          { title: "Pending Review (Awaiting Manager)", value: "Pending Review" },
          { title: "Available (Live on Public Website)", value: "Available" },
          { title: "Sold (Purchased)", value: "Sold" },
        ],
        layout: "radio",
      },
      initialValue: "Draft",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Feature on Homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "amenities",
      title: "Key Amenities",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      price: "price",
      status: "status",
      media: "images.0",
    },
    prepare(selection) {
      const { title, price, status, media } = selection;
      return {
        title,
        subtitle: `$${price?.toLocaleString() || 0} — [${status || "Draft"}]`,
        media,
      };
    },
  },
});
