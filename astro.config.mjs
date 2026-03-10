import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
    integrations: [tailwind({
    configFile: './tailwind.config.mjs',
    integrations: [react()],
    output: 'hybrid',
    adapter: vercel(),
    applyBaseStyles: false,
  }), sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || "5m3eg18d", 
      dataset: process.env.PUBLIC_SANITY_DATASET || "production",
        useCdn: false, 
        apiVersion: "2024-03-10",
        }), react()],
});