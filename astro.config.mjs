// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://info.celerisys.com',
  base: "/",
  //site: 'https://celerisys.github.io',
  //base: "/Celerisys-Landing/",
  integrations: [tailwind(), react()],
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: false,
    port: 4321,
  },
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
});
