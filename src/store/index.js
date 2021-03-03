import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		drawer: true,
		isLoggedIn: false
	},
	mutations: {
		SET_SIDEBAR(state, payload) {
			state.drawer = payload
		},
		LOGGED_IN(state, payload) {
			localStorage.setItem("isLoggedIn", payload)
			state.isLoggedIn = payload
		}
	},
	actions: {},
	modules: {}
})
