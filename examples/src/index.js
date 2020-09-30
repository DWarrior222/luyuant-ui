import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import UI from 'main/index'
// import UI from 'lib/common.js'

Vue.use(UI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');