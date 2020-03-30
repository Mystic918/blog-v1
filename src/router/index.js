import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home'
import ClassiFication from './ClassiFication'
Vue.use(VueRouter)

const routes = [
 Home,ClassiFication,
    {
        path:'/content/:time/:docid',
        name:'content',
        meta: {
            isLogin: false
        },
        component:()=>import('@/views/Content')
    },
    {
        path:'/informationLogin',
        name:'informationLogin',
        meta: {
            isLogin: false
        },
        component:()=>import('@/views/InformationLogin')
    },
    {
        path:'/informationReset',
        name:'informationReset',
        meta: {
            isLogin: false
        },
        component:()=>import('@/views/InformationReset')
    },
    {
        path:'/edit',
        name:'edit',
            meta: {
            isLogin: true
        },
        component:()=>import('@/views/edit')
    },
    {
        path:'/personal',
        name:'personal',
            meta: {
            isLogin: true
        },
        component:()=>import('@/views/Personal')
    },
    {
        path:'/',
        redirect:'/home',
        meta: {
            isLogin: false
        },
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to,from,next)=>{
    if(to.meta.isLogin){
      
            if(window.sessionStorage.getItem("username")&&window.sessionStorage.getItem("blog_info")){
                next()
            }else{
                next("/InformationLogin/")
            }
        }else{
            next()
        }

})
export default router
