import Vue from "vue"
import VueRouter from "vue-router"
import Dashboard from "@/views/Dashboard.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "menu-1",
		component: Dashboard
	},
	{
		path: "/menu-2",
		name: "menu-2",
		component: Dashboard
	},
	{
		path: "/submenu-1",
		name: "submenu-1",
		component: Dashboard
	},
	{
		path: "/submenu-2",
		name: "submenu-2",
		component: Dashboard
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router
