import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/LoginComponent.vue';
import Register from '../views/RegisterView.vue';
import Dashboard from '../views/Dashboard.vue';
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {requireAuth : true}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth && !store.state.user.token){
    next({name: 'Login'});
  }else{
      next();
  }
})

export default router
