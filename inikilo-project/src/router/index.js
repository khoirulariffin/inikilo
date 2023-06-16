import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import DetailProduct from '../views/DetailProduct.vue'
import FavoritePage from '../views/FavoritePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/detailProduct/:id',
      name: 'detailProduct',
      component: DetailProduct
    },
    {
      path: '/favePage',
      name: 'favePage',
      component: FavoritePage
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'favePage' && !localStorage.access_token) {
    next('/login')
  } else if ((to.name === 'login' || to.name === 'register') && localStorage.access_token) {
    next('/')
  } else {
    next()
  }
})

export default router
