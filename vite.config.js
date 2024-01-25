import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

import nodePolyfills from "rollup-plugin-polyfill-node";
const production = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    !production &&
      nodePolyfills({
        include: ["node_modules/**/*.js", new RegExp("node_modules/.vite/.*js")],
      }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "src"),
      // "vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js",
    },
  },
  base: "./",
  css: {
    preprocessorOptions: {
      scss: {
        //additionalData: '@import"@/assets/css/globalstyle.scss";'
        //👆这样写是不行的。因为如果项目中其他的css文件有@forward关键字，就会提示错误
        // additionalData: '@use "@/assets/scss/_init.scss" as *;',
        //👆这样写是可以的，但是要注意
        //!!!!一定要将其他地方引入该css文件的地方删除，如index.html,否则会提示已经加载该module的错误！！！
      },
    },
  },
  define: {
    "process.env": {},
  },
  server: {
    cors: true,
    host: true,
    open: true,
    // https: true,
    // proxy: {
    //   "/api": {
    //     target: "http://app.zerokhandu.com", //目标url
    //     changeOrigin: true, //支持跨域
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
  build: {
    rollupOptions: {
      plugins: [
        // ↓ Needed for build
        nodePolyfills(),
      ],
    },
    // ↓ Needed for build if using WalletConnect and other providers
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
