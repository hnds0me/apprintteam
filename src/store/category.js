import firebase from 'firebase/app'

export default {
	state: {},
	mutations: {},
	actions: {
		async createCategory({
			commit,
			dispatch
		}, {
			title
		}) {
			try {
				const uid = await dispatch('getUid');
				const category = await firebase.database().ref('/categories').push({
					title
				})
				return {
					title,
					id: category.key
				}
			} catch (e) {
				commit('setError', e);
				throw e;
			}
		},
		async updateCategories({
			dispatch,
			commit
		}, {
			title,
			id
		}) {
			try {
				const uid = await dispatch('getUid');
				await firebase.database().ref('/categories').child(id).update({
					title
				});
			} catch (e) {
				commit('setError', e);
				throw e;
			}
		},
		async fetchCategories({
			commit,
			dispatch
		}) {
			try {
				const uid = await dispatch('getUid');
				const categories = (await firebase.database().ref('/categories').once('value')).val() || {};

				return Object.keys(categories).map(key => ({
					...categories[key],
					id: key
				}))

			} catch (e) {
				commit('setError', e);
				throw e;
			}
		}
	},
	getters: {}
}