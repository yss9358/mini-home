import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'
import CategoryView from '@/views/category/CategoryView.vue'

const routes = [
  {
    path : '/',
    name : '/',
    component : MainView
  },
  {
    path : '/c',
    name : '/c',
    component : CategoryView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
