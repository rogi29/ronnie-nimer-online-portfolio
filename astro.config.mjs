import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";
import { loadEnv } from "vite";

const { DISABLE_PWA } = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    AstroPWA({
      selfDestroying: DISABLE_PWA === true || DISABLE_PWA === "true",
      manifest: {
        name: "Ronnie Nimer's Portfolio",
        short_name: "Ronnie Nimer",
        description: "Character Concept Artist Portfolio",
        theme_color: "#222222",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  image: {
    remotePatterns: [{ protocol: "https" }],
    hostname: "ik.imagekit.io",
  },
});
