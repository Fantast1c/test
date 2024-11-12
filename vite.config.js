import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    createSvgIconsPlugin({
      // eslint-disable-next-line no-undef
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/')],
      symbolId: '[name]',
      inject: 'body-first',
    }),

    vueDevTools(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
