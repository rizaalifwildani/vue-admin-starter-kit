import Vue from "vue"
import VueRouter from "vue-router"
import Dashboard from "@/views/Dashboard"
import Login from "@/views/Login"
import VueRouteMiddleware from "vue-route-middleware"
import { AuthMiddleware } from "@/router/middleware/middleware.js"

Vue.use(VueRouter)

const routes = [
	{
		path: "/login",
		name: "Login",
		component: Login
	},
	{
		path: "/",
		name: "menu-1",
		component: Dashboard,
		meta: {
			middleware: [AuthMiddleware]
		}
	},
	{
		path: "/menu-2",
		name: "menu-2",
		component: Dashboard,
		meta: {
			middleware: [AuthMiddleware]
		}
	},
	{
		path: "/submenu-1",
		name: "submenu-1",
		component: Dashboard,
		meta: {
			middleware: [AuthMiddleware]
		}
	},
	{
		path: "/submenu-2",
		name: "submenu-2",
		component: Dashboard,
		meta: {
			middleware: [AuthMiddleware]
		}
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

router.beforeEach(VueRouteMiddleware())

export default router
