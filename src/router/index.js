import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
 

  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/register-user.vue')
  },

  {
    path: '/consulta',
    name: 'consulta',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/consulta-uni.vue')
  },

 

  {
    path: '/',
    name: 'principal',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/pgPrincipal-uni.vue'
      )
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
