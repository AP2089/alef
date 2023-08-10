import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "node_modules"),
    },
    extensions: [".js", ".json", ".scss"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/_config.scss";
        `,
      },
    },
  },
  plugins: [vue()],
});
