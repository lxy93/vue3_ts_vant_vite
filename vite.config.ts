import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/customer/web',
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    })
  ],
  resolve:{
    alias:{
      '@': resolve(__dirname, 'src'),
    }
  },
  server:{
    port:6688,
    host:'10.0.16.235',
    proxy:{
      '/customer_api':{
        target: "http://10.0.16.239",
        changeOrigin: true,//是否跨域
        ws: true, // proxy websockets
        rewrite: (path) => path.replace(/^\/customer_api/, "")//重写路径 //代理路径
      }
    }
  }
})
