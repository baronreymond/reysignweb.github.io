import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Contact from './components/Contact.vue';
import Signin from './components/Signin.vue';


Vue.config.productionTip = false


Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/About', component: About },
  { path: '/Services', component: Services },
  { path: '/Contact', component: Contact },
  { path: '/Signin', component: Signin },
];

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue ({
  el: '#app',
  router,
  render: h => h(App)
});


