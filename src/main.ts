import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'amfe-flexible/index.js'
import './vant'
import '@/utils/app'
import '@/utils/index'
import '@/style/base.less'

// import service from '@/utils/request'
// console.log(service)
const app = createApp(App)
app.use(store)
.use(router)
.mount('#app')
