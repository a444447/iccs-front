import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import OneView from "@/views/OneView";
import CardComponent from "@/components/CardComponent";
import TestComponent from "@/components/TestComponent";
//import TestComponent2 from "@/components/TestComponent2";
import TestComponent3 from "@/components/ManageUser";
import TestComponent4 from "@/components/MapComponent";
import TestForChart from "@/components/TestForChart";
import Banklogin from "@/views/Banklogin";
import CakeChartTest from "@/components/CakeChartTest";
import DynamicLineChart from "@/components/LineChart";
import DisplayChartView from "@/views/DisplayChartView";
//import TestComponent from "@/components/TestComponent";
//import AboutView from "@/views/OneView"
// import HomeView from "@/views/HomeView";
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Banklogin,
  },
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
      component:CardComponent,

    },
      {
        path: 'display',
        name:'display',
        component: DisplayChartView
      },
      {
        path: 'test',
        name:'test',
        component: TestComponent3
      },
      {
        path: 'mapPage',
        name: 'mapPage',
        component: TestComponent4
      },
      {
        path: 'barPageTest',
        name:'barPageTest',
        component: TestForChart
      },
    ]
  },
  {
    path: '/',
    redirect:'/login'
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
    path: '/CakeChartTest',
    name:'CakeCharTest',
    component: CakeChartTest
  },
  {
    path: '/LineChart',
    name:'LineChart',
    component: DynamicLineChart
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
