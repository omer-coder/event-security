import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import NotFound from '../views/NotFound.vue'
import Addjobs from '../views/jobs/Addjobs.vue'
import Alljobs from '../views/jobs/Alljobs.vue'
import Userapplication from '../views/jobs/Userapplication.vue'
import Applicants from '../views/jobs/Applicants.vue'
import Companyjob from '../views/jobs/Companyjob.vue'
import Editjobs from '../views/jobs/Editjobs.vue'
import Jobdetails from '../views/jobs/Jobdetails.vue'
import Newsdetail from '../views/news/Newsdetail.vue'
import AdminLogin from '../views/admin/AdminLogin.vue'
import AdminData from '../views/admin/AdminData.vue'

import {projectauth} from '@/firebase/config'

const requiredAuth = (to , from , next) => {

  let user = projectauth.currentUser
  console.log(user)

  if(!user){
    next({name: 'Login'})
  }else{
    next()
  }

}

const requiredNoAuth = (to , from , next) => {

  let user = projectauth.currentUser

  if(user){
    next({name: 'Alljobs'})
  }else{
    next()
  }

}

const adminAuth = (to , from , next) => {
  
  let admin = projectauth.currentUser
  // console.log(admin.email)

  if(admin.email == "omeribrahim398@gmail.com"){
    next()
  }else{
    next({name: 'Alljobs'})
  }
}

const companyAuth = (to , from , next) => {
  
  let company = projectauth.currentUser
  // console.log(company.photoURL)

  if(company.photoURL == "company"){
    next()
  }else{
    next({name: 'Alljobs'})
  }
}

const individualAuth = (to , from , next) => {
  
  let individual = projectauth.currentUser
  // console.log(company.photoURL)

  if(individual.photoURL == "individual"){
    next()
  }else{
    next({name: 'Alljobs'})
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter : requiredNoAuth
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/auth/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/jobs/addjobs',
    name: 'Addjobs',
    component: Addjobs,
    beforeEnter : requiredAuth,
    beforeEnter : companyAuth
  },
  {
    path : '/jobs/alljobs',
    name : "Alljobs",
    component: Alljobs,
    beforeEnter : requiredAuth
  },
  {
    path : '/jobs/userapplication',
    name : 'Userapplication',
    component : Userapplication,
    beforeEnter : requiredAuth,
    beforeEnter : individualAuth
  },
  {
    path : '/jobs/applicants',
    name : 'Applicants',
    component : Applicants,
    beforeEnter : requiredAuth,
    beforeEnter : companyAuth
  },
  {
    path : '/jobs/:id',
    name : "Editjobs",
    component : Editjobs,
    beforeEnter : requiredAuth,
    beforeEnter : companyAuth,
    props : true
  },
  {
    path : '/jobs/:id',
    name : 'Jobdetails',
    component : Jobdetails,
    beforeEnter : requiredAuth,
    props : true
  },
  {
    path : '/news/:NewsId',
    name : 'Newsdetail',
    component : Newsdetail,
    props : true
  },
  {
    path : '/jobs/companyjob',
    name : 'Companyjob',
    component : Companyjob,
    beforeEnter : requiredAuth,
    beforeEnter : companyAuth
    
  },
  {
    path: '/:catchAll(.*)',
    name : NotFound,
    component: NotFound
  },
  {
    path: '/admin/adminlogin',
    name : "AdminLogin",
    component: AdminLogin,
    beforeEnter : requiredAuth,
    beforeEnter : adminAuth,
  },
  {
    path: '/admin/admindata',
    name : "AdminData",
    component: AdminData,
    beforeEnter : requiredAuth,
    beforeEnter : adminAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
