import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
