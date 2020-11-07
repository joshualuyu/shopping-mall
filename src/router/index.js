import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)
const routes =[
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:()=>import("../view/home/home")
    },
    {
        path:"/category",
        component:()=>import("../view/category/category")
    },  {
        path:"/profile",
        component:()=>import("../view/profile/profile")
    },  {
        path:"/shoppingCart",
        component:()=>import("../view/shoppingCart/shoppingCart")
    }
]
const router =new VueRouter({
    routes,
    mode:"history"

})
export default router