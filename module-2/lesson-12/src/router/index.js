import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/tasks',
          name: 'tasks',
          component: () => import('../views/Task/Task.vue')
        },
        {
          path: '/tasks/:id',
          name: 'taskItem',
          component: () => import('../views/Task/TaskItem.vue')
        },
        {
          path: '/addtask',
          name: 'addtask',
          component: () => import('../views/Task/AddTask.vue')
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name !== 'login' && !token) {
    next('/login');
  }
  else {
    next()
  }
})

export default router
