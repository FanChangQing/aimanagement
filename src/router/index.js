import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/LoginView'
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/LoginView',
        name: 'LoginView',
        component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
    },
    {
        path: '/HomePageView',
        name: 'HomePageView',
        meta:{
            requiresAuth:true,// 是否需要登录
        }, 
        component: () => import(/* webpackChunkName: "about" */ '../views/HomePageView.vue')
    },
    {
        path: '/TableView',
        name: 'TableView',
        meta:{
            requiresAuth:true,// 是否需要登录
        }, 
        component: () => import(/* webpackChunkName: "about" */ '../views/TableView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        // console.log(to.name)
        if (sessionStorage.getItem("token")) {
            next()
        } else {
            //  next({name:'Login',query:{redirect:to.name}})
            next({
                path: "/LoginView",
                query: {
                    redirect: to.fullPath
                }
            });
        }
    } else {
        // console.log(to.name)
        next()
    }
})
export default router
