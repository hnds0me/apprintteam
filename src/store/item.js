import firebase from 'firebase/app'
import "firebase/storage";

export default {
	actions: {
		async createItem({
			commit,
			dispatch
		}, formData) {
			try {

				const uid = await dispatch('getUid');
				const file = formData.screenshot || false;
				let uploadFile = false;

				uploadFile = await dispatch('uploadFile', {
					file
				});

				if (uploadFile) {
					formData.screenshot = uploadFile;
					try {
						const item = await firebase.database().ref('/items').push(formData)
						return {
							title: item.title,
							id: item.key
						}
					} catch (e) {
						commit('setError', e)
						throw e
					}
				} else {
					commit('setError', 'File is not uploaded')
					throw 'File is not uploaded'
				}

			} catch (e) {
				commit('setError', e)
				throw e
			}
		},
		async uploadFile({
			commit,
			dispatch
		}, {
			file
		}) {
			try {

				let storageRef = await firebase.storage().ref('items/' + file.name);
				let uploadTask = await storageRef.put(file);
				let uploadFile = await uploadTask.ref.getDownloadURL();

				return uploadFile;

			} catch (e) {
				commit('setError', e);
				throw e;
			}
		},
		async fetchItems({
			commit,
			dispatch
		}) {
			try {
				const items = (await firebase.database().ref('/items').once('value')).val() || {};

				return Object.keys(items).map(key => ({
					...items[key],
					id: key
				}))

			} catch (e) {
				commit('setError', e);
				throw e;
			}
		}
	}
}