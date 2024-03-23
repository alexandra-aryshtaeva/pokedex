import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";
import icons from "unplugin-icons/vite";
import fonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    icons({
      autoInstall: true,
    }),
    fonts({
      custom: {
        families: [
          {
            name: "Pokemon Hollow",
            src: "./src/assets/fonts/PokemonHollow.ttf",
          },
          {
            name: "Pokemon Solid",
            src: "./src/assets/fonts/PokemonSolid.ttf",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
