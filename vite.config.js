import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

function resolve(url) {
  return path.resolve(__dirname, url);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 全局scss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@use "@/style/mixins.scss" as *;@use "@/style/variable.scss" as *;',
      },
    },
  },
  //配置@别名
  resolve: {
    alias: {
      "@": resolve("./src"),
      "@utils": resolve("./src/utils"),
    },
  },
});
