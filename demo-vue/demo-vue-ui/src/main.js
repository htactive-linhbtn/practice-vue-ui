import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Staffs from './pages/Staffs.vue'
import Home from './pages/Home.vue'
import Detail from './pages/Detail.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    {path : '/' , component : Home},
    {path : '/staffs' , component : Staffs},
    {path : '/detail/:id' , component : Detail},
];

const router = new VueRouter({
    routes
})

//boootstrap-vue
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



new Vue({
    render: h => h(App),
    router
}).$mount('#app')
