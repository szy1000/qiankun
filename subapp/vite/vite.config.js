import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { name } = require("./package");
import qiankun from 'vite-plugin-qiankun'
import path from 'path'


const useDevMode = true

// https://vitejs.dev/config/
export default ({command, mode}) => {
  return defineConfig({
    base: mode === 'local' ? '/' : '/',
    plugins: [
      vue(),
      qiankun(`${name}`, {
        useDevMode: true
      })
    ],
    build: {
      target: "esnext",
      lib: {
        name: `${name}-[name]`,
        entry: path.resolve(__dirname, "src/main.js"),
        formats: ["umd"],
      },
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },

  })
}
