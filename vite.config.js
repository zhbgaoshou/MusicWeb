import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

function resolve(url) {
  return path.resolve(__dirname, url);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
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
