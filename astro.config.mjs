import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [AstroPWA({})],
  image: {
    remotePatterns: [{ protocol: "https" }],
    hostname: "ik.imagekit.io",
  },
});
