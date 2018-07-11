import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Task from '@/components/Task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    }
  ]
})
