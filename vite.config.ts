import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr()
    // svgr({
    //   svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
    //   include: '**/*.svg',
    // }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
});