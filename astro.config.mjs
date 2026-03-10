import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    integrations: [
      tailwind({
      // Di sini kita memasukkan plugin Typography
      configFile: './tailwind.config.mjs',
      applyBaseStyles: false,
    }),
    sanity({
      projectId: "5m3eg18d", // Ganti nanti setelah setup Sanity
        dataset: "production",
        useCdn: false, // Set to true in production
        apiVersion: "2024-03-10",
        }),
    ],
});