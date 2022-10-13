import { createRouter,createWebHistory,RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path:'/demand/index',
        name:'demand',
        component:()=>import('../views/demand/index.vue'),
        meta:{
            title:'需求'
        }
    }
]
const router = createRouter({
    routes,
    history:createWebHistory('/customer/web/')
})

export default router