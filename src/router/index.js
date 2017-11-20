import Vue from 'vue'
import Router from 'vue-router'
import { Layout } from '../views/layout/index'
import { Home } from '../views/home/index'
import { About } from '../views/about/index'
import { Essay } from '../views/essay/index'
import { Life } from '../views/life/index'
import { Message } from '../views/message/index'
import { SignIn } from '../views/signin/index'
import { SignUp } from '../views/signup/index'
import { Article } from '../views/article/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/home',
      children: [{
        path: 'home',
        component: Home
      }]
    },
    {
      path:  '/about',
      name: 'Layout',
      component: Layout,
      children: [{
        path: '/about',
        component: About
      }]
    },
    {
      path: '/essay',
      name: 'Layout',
      component: Layout,
      children:[{
        path: '/essay',
        component: Essay
      }]
    },
    {
      path: '/life',
      name: 'Layout',
      component: Layout,
      children: [{
        path: '/life',
        component: Life
      }]
    },
    {
      path: '/message',
      name: 'Layout',
      component: Layout,
      children: [{
        path: '/message',
        component: Message
      }]
    },
    {
      path: '/signIn',
      name: 'Layout',
      component: Layout,
      children: [{
        path: '/signIn',
        component: SignIn
      }]
    },
    {
      path: '/signUp',
      name: 'Layout',
      component: Layout,
      children: [{
        path: '/signUp',
        component: SignUp
      }]
    },
    {
      path: '/article',
      name: 'Layout',
      component: Layout,
      children: [{
        path: '/article',
        component: Article
      }]
    }
  ]
})
