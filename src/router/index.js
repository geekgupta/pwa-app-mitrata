import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../views/login.vue"
import SecureComponent from "../views/secure.vue"
import CustomerComponent from "../views/customer.vue"
import HomeComponent from "../views/home.vue" ;
import DashboardComponent from "../views/dashboard.vue" ; 

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        },
        {
            path: "/customer",
            name: "customer",
            component: CustomerComponent
        },
        {
            path: "/home",
            name: "home",
            component: HomeComponent
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: DashboardComponent
        },
    ]
})