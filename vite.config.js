import { defineConfig } from "vite";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./styles/variables.scss";`, // لو عندك متغيرات أو إعدادات عامة
      },
    },
  },
});
