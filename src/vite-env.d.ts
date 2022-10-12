/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare的意思告诉编译器我知道Window是啥类型，它会跟全局下的Window类型自动合并，但是在这个文件中任意类型一定不能使用export导出（没想明白），否则会不好使。
declare interface Window {
  Util: any,
  App: any,
  webkit: any,
  androidCall: any
}