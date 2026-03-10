// src/lib/urlFor.ts
import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

// Kita gunakan 'any' untuk source jika Anda tidak ingin pusing dengan tipe data saat ini
export function urlFor(source: any) {
  return builder.image(source);
}