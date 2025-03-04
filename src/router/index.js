import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        // redirect: '/index'
        component: () => import('@/views/home/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router


// import { createRouter, createWebHistory } from 'vue-router'
//
// const routes = [
//     {
//         path: '/',
//         component: () => import('@/views/home/index.vue')
//     }
// ]
//
// const router = createRouter({
//     history: createWebHistory(), // 使用createWebHistory代替createWebHashHistory
//     routes
// })
//
// export default router