import firebase from 'firebase/app'
import {
	SIGCONT
} from 'constants'
export default {
	actions: {
		async login({
			dispatch,
			commit
		}, {
			email,
			password
		}) {
			try {
				await firebase.auth().signInWithEmailAndPassword(email, password)
			} catch (e) {
				commit('setError', e)
				throw e
			}
		},
		async logout() {
			await firebase.auth().signOut();
		}
	}
}