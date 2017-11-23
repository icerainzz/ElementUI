import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/app/login.vue"
import Reg from "../components/app/reg.vue"
import Info from "../components/app/info/info.vue"

import addMovie from "../components/app/info/movie/addMovie.vue"
import movieList from "../components/app/info/movie/movieList.vue"

import addImage from "../components/app/info/image/addImage.vue"
import imageList from "../components/app/info/image/imageList.vue"

import addNews from "../components/app/info/news/addNews.vue"
import newsList from "../components/app/info/news/newsList.vue"

import addSchedule from "../components/app/info/schedule/addSchedule.vue"
import scheduleList from "../components/app/info/schedule/scheduleList.vue"

import addStudio from "../components/app/info/studio/addStudio.vue"
import studioList from "../components/app/info/studio/studioList.vue"

import addTheater from "../components/app/info/theater/addTheater.vue"
import theaterList from "../components/app/info/theater/theaterList.vue"

import addUser from "../components/app/info/user/addUser.vue"
import userList from "../components/app/info/user/userList.vue"




Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Login
  }, {
    path: '/login/:username',
    name: 'login',
    component: Login
  }, {
    path: '/reg',
    name: 'reg',
    component: Reg
  }, {
    path: '/info',
    name: 'info',
    component: Info,
    children: [{
      path: 'addImage/:movieId',
      name:"addImage",
      component: addImage
    }, {
      path: 'imageList',
      component: imageList
    }, {
      path: 'movieList',
      component: movieList
    }, {
      path: 'addMovie',
      component: addMovie
    }, {
      path: 'addUser',
      component: addUser
    }, {
      path: 'userList',
      component: userList
    }, {
      path: 'scheduleList',
      component: scheduleList
    }, {
      path: 'addSchedule',
      component: addSchedule
    }, {
      path: 'theaterList',
      component: theaterList
    }, {
      path: 'addTheater',
      component: addTheater
    },{
      path: 'studioList',
      component: studioList
    }, {
      path: 'addStudio',
      component: addStudio
    }, {
      path: 'newsList',
      component: newsList
    }, {
      path: 'addNews',
      component: addNews
    }, ]
  }]
})