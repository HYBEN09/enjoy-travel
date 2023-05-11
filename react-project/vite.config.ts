import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';
import react from '@vitejs/plugin-react-swc';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngQuant from 'imagemin-pngquant';
import imageminGifSicle from 'imagemin-gifsicle';
import viteImagemin from '@vheemstra/vite-plugin-imagemin';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve('src') }],
  },
  define: {
    'process.env': {},
  },
  plugins: [
    react(),
    svgr(),
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg(),
        png: imageminPngQuant(),
        gif: imageminGifSicle(),
        svg: imageminSvgo(),
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
          png: imageminWebp(),
        },
      },
    }),
  ],
  server: {
    host: 'localhost',
    port: 3000,
    proxy: {
      // /api/news 경로로 오는 요청을 newsapi의 URL로 프록시합니다.
      '/api/news': {
        target: 'https://newsapi.org/v2',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/news/, ''),
      },
    },
  },
  css: {
    devSourcemap: true,
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          reactRouter: ['react-router-dom'],
          axios: ['axios'],
          fbApp: ['@firebase/app'],
          fbAuth: ['@firebase/auth'],
          fbStore: ['@firebase/firestore'],
          fbStorage: ['@firebase/storage'],
          styled: ['styled-components'],
        },
      },
    },
  },
});
