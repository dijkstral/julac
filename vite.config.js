import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import legacy from '@vitejs/plugin-legacy';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createHtmlPlugin } from "vite-plugin-html";

// 引入path： 别名
import { resolve } from 'path'

const getViteEnv = (mode, target) => {
  return loadEnv(mode, process.cwd())[target];
};

export default ({ mode })=> defineConfig({
  base: './',
  build: {
    cssCodeSplit: false, // 禁用 CSS 代码分割
    target: 'esnext',
    rollupOptions: {
      output: {
        // assetFileNames: "[hash].[name].[ext]"
        format: 'iife', // 确保输出为立即执行函数
        inlineDynamicImports: true, // 内联动态导入
        entryFileNames: '[name].js', // 单个入口文件
        chunkFileNames: '[name].js', // 单个 chunk 文件
        assetFileNames: '[name].[ext]', // 单个资源文件
      }
    },
    assetsInlineLimit: 4096 * 1000, // 默认为 4kb，4kb以下的会被打包成base64
    outDir: "dist", // 默认为 dist
    assetsDir: "static" // 默认为 assets
  },
  plugins: [ // 插件引用（标准vite插件放这里引用）
    vue(), // vue插件
    UnoCSS(),
    legacy({
      targets: ["ie>=11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    AutoImport({ // 自动引入，不需要手动去写import
      exclude: [/\.remote/, /node_modules/],
      // 这里可以不需要写import调用大部分vue/vue-router/pinia方法（记住是大部分）
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ElementPlusResolver()],
      // 会自动生成eslint规则，防止eslint报错，后续eslint配置的时候会讲到
      eslintrc: {
        enabled: true
      }
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: getViteEnv(mode, "VITE_APP_TITLE"),
        },
      },
    }),
    Components({ // 按需引入，避免没使用的组件也打包
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  esbuild: {
    // 打包删除所有console.log
    pure: ['console.log']
  }
})
