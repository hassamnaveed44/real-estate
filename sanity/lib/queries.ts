import { groq } from "next-sanity";

// Types
export interface SanityProperty {
  _id: string;
  title: string;
  slug?: { current: string };
  description: string;
  price: number;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  area?: string;
  location?: string;
  images?: any[];
  status: "Draft" | "Pending Review" | "Available" | "Sold";
  featured?: boolean;
  amenities?: string[];
}

// 1. Featured properties for Homepage (Available listings)
export const featuredPropertiesQuery = groq`
  *[_type == "property" && (status == "Available" || !defined(status)) && status != "Sold" && status != "Draft"] | order(_createdAt desc) [0...12] {
    _id,
    title,
    slug,
    description,
    price,
    propertyType,
    bedrooms,
    bathrooms,
    area,
    location,
    images,
    status,
    featured
  }
`;

// 2. All public properties for Properties Catalog (Available listings)
export const allAvailablePropertiesQuery = groq`
  *[_type == "property" && (status == "Available" || !defined(status)) && status != "Sold" && status != "Draft"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    price,
    propertyType,
    bedrooms,
    bathrooms,
    area,
    location,
    images,
    status,
    featured
  }
`;

// 3. Single property query by ID or slug
export const singlePropertyQuery = groq`
  *[_type == "property" && (_id == $id || _id == "drafts." + $id || slug.current == $id)][0] {
    _id,
    title,
    slug,
    description,
    price,
    propertyType,
    bedrooms,
    bathrooms,
    area,
    location,
    images,
    status,
    amenities,
    featured
  }
`;
