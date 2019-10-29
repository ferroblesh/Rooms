import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDfvJoA8l7Ln2jNRlOQ5bWP_3C5XQLV2Bw',
  authDomain: 'platzi-rooms-f91f2.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-f91f2.firebaseio.com',
  projectId: 'platzi-rooms-f91f2',
  storageBucket: 'platzi-rooms-f91f2.appspot.com',
  messagingSenderId: '508828201804',
  appId: '1:508828201804:web:027c3138d4dae0a61155e9'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
