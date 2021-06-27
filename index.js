import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Builder from '../views/recipeBuilder.vue'
import Collection from '../views/recipeCollection.vue'
import Finder from '../views/recipeFinder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipeBuilder',
    name: 'Builder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Builder
  },
  {
    path: '/recipeCollection',
    name: 'Collection',
    component: Collection
  },
  {
    path: '/recipeFinder',
    name: 'Finder',
    component: Finder
  }

]

const router = new VueRouter({
  routes
})

export default router
