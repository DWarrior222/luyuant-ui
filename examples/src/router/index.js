import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from 'examples/src/views/index.vue'
import Feature from 'examples/src/views/feat-guide/Feature.vue'
import Feature2 from 'examples/src/views/feat-guide/Feature2.vue'
import Feature3 from 'examples/src/views/feat-guide/thrid-demo/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/feature',
      name: 'Feature',
      component: Feature
    },
    {
      path: '/feature2',
      name: 'Feature2',
      component: Feature2
    },
    {
      path: '/feature3',
      name: 'Feature3',
      component: Feature3
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router