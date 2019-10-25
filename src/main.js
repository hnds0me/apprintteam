import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

firebase.initializeApp({
	apiKey: "AIzaSyDNgDL-Rbo0bUrLUqNypfwdN1mpwJ2QVfc",
	authDomain: "apprintteam.firebaseapp.com",
	databaseURL: "https://apprintteam.firebaseio.com",
	projectId: "apprintteam",
	storageBucket: "apprintteam.appspot.com",
	messagingSenderId: "944217939517",
	appId: "1:944217939517:web:9b3bb5f3a9bee9fe751454"
})

Vue.use(Vuelidate)
Vue.use(messagePlugin)

let app

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount('#app')
	}
})