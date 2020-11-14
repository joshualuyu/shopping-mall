import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)
const routes=[
    {
        path:"/",
        meta:{
            title:"首页"
        },
        redirect:"/home"
    },
    {
        path:"/home",
        meta:{
            title:"首页"
        },
        component:()=>import("../view/home/home")
    },
    {
        path:"/profile",
        meta:{
            title:"目录页"
        },
        component:()=>import("../view/profile/profile")
    },
    {
        path:"/shoppingCart",
        meta:{
            title:"购物车页"
        },
        component:()=>import("../view/shoppingCart/shoppingCart")
    },
    {
        path:"/category",
        meta:{
            title:"分类页"
        },
        component:()=>import("../view/category/category")
    },
    {
        path:"/detail",
        component:()=>import("../view/detail/Detail")
    }
]
const router =new VueRouter({
    mode:"history",
    routes,

})
router.beforeEach(function (to,from,next) {
    document.title=to.meta.title;
    next()
})
export default router