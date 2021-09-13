import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BoockMarks from '../views/BoockMarks.vue'
import ArticleDetails from '../views/ArticleDetails.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home,
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: "/home/:Id",
    name: "section",
    component: Home
  },
  {
    path: '/boockMarks',
    name: 'boockMarks',
    component: BoockMarks
  },
  {
    path: '/articleDetails',
    name: 'articleDetails', 
    component: ArticleDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
