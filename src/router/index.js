import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import OneView from "@/views/OneView";
import CardComponent from "@/components/CardComponent";
import TestComponent from "@/components/TestComponent";
//import TestComponent from "@/components/TestComponent";
//import AboutView from "@/views/OneView"
// import HomeView from "@/views/HomeView";
const routes = [
  {
    path: '/home',
    name: 'home',
    component: OneView,
    children:[{
      path: 'about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:CardComponent
    }]
  },
  {
    path: '/',
    redirect:'/home'
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component:CardComponent
  // },
  {
    path: '/test',
    name:'test',
    component: TestComponent
  },
  {
    path: '/home/about',
    component: TestComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
