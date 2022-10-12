import { createRouter,createWebHistory,RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path:'/home',
        component:()=>import('../views/index.vue')
    }
]
const router = createRouter({
    routes,
    history:createWebHistory('/customer/web/')
})

export default router