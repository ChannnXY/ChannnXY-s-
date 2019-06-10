import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import resume from '@/components/resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    }
  ]
})
