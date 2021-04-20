import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Account from '../views/Account.vue'

import CreateFemaleAvatar from '../views/CreateFemaleAvatar.vue'
import CreateMaleAvatar from '../views/CreateMaleAvatar.vue'
import Avatars from '../views/Avatars.vue'
import ShowAvatar from '../views/ShowAvatar.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-female-avatar',
    name: 'CreateFemaleAvatar',
    component: CreateFemaleAvatar
  },
  {
    path: '/create-male-avatar',
    name: 'CreateMaleAvatar',
    component: CreateMaleAvatar
  },
  {
    path: '/avatars',
    name: 'avatars',
    component: Avatars
  },
  {
    path: '/avatar/:id',
    name: 'ShowAvatar',
    component: ShowAvatar
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
]

const router = new VueRouter({
  routes
})

export default router
