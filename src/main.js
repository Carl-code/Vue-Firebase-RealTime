import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAQIECtvnlQqJmvY4sQ9yTqbAKbOM37GKE",
  authDomain: "vue-firebase-df89f.firebaseapp.com",
  databaseURL: "https://vue-firebase-df89f.firebaseio.com",
  projectId: "vue-firebase-df89f",
  storageBucket: "vue-firebase-df89f.appspot.com",
  messagingSenderId: "737333143240",
  appId: "1:737333143240:web:256b7c610a69e2f50627fd",
  measurementId: "G-6EQ9NMZSW2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics(); 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
