// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";

export default defineConfig({
  site: 'info.celerisys.com',
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
    plugins: [
      obfuscatorPlugin({
        apply: "build",
        exclude: [/node_modules/],
        options: {
          debugProtection: true,
          compact: true,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 0.75,
          deadCodeInjection: true,
          deadCodeInjectionThreshold: 0.4,
          stringArray: true,
          stringArrayEncoding: ['base64'],
          stringArrayThreshold: 0.75,
          transformObjectKeys: true,
        },
      }),
    ],
  },
});
