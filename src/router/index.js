import Vue from 'vue'
import Router from 'vue-router'
import ContainerLectures from '@/components/ContainerLectures'
import ContainerResults from '@/components/ContainerResults'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContainerLectures',
      component: ContainerLectures
    },
    {
      path: '/',
      name: 'ContainerResults',
      component: ContainerResults
    }
  ]
})
