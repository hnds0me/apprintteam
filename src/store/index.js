import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import category from './category'
import item from './item'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		error: null
	},
	mutations: {
		setError(state, error) {
			state.error = error;
		},
		clearError(state) {
			state.error = null;
		}
	},
	getters: {
		error: s => s.error
	},
	actions: {},
	modules: {
		auth,
		category,
		item
	}
})