import { createImageUrlBuilder } from "@sanity/image-url";
import type { Image } from "sanity";
import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "estatein-real-estate",
  dataset: dataset || "production",
});

export const urlForImage = (source: Image | string | any) => {
  if (!source) return null;
  try {
    return imageBuilder?.image(source)?.auto("format")?.fit("max") || null;
  } catch {
    return null;
  }
};

