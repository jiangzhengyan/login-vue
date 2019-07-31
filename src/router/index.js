import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: 'list',
          name: 'list',
          component: ()=>import(/* webpackChunkName: "list"*/'../views/List')
        }
        , {
          path: 'user',
          name: 'user',
          component: ()=>import(/* webpackChunkName: "user"*/'../views/User')
        }
      ]
    }
  ]
})
