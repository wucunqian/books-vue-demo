import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/api',
        changeOrigin: true, //需要代理跨域
        rewrite: (path) => path.replace(/^\/api/, ''), //路径重写，把'/api'替换为''
      },
    },
  },
})
