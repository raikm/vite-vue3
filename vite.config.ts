import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue({
      refTransform: [/src/],
    }),
  ],
});
