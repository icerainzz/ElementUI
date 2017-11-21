import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)
export default{
  state:{
        movies: [],
        studios: [],
        theaters: [],
        value1: {},
        value2: {},
        value3: {},
        price: '',
  },
  mutations:{
    getMovies(state,data){
      console.log(data)
      Object.assign(state,data)
    },
    getStudios(state,data){
      console.log("getStudios")
      Object.assign(state,data)
      // console.log(state.studios)
    },
    selectMovie(state,data){
      Vue.set(state,"value1",data)
      // Object.assign(state.value1,data)
    },
    selectStudio(state,data){
      // Object.assign(state.value2,data)
            Vue.set(state,"value2",data)
    },
    selectTheater(state,data){
      // Object.assign(state.value3,data)
            Vue.set(state,"value3",data)
    }
  },
  actions:{
      async getMoviesAsync(context,{curPage = 1,eachPage = 999}={}){
        // console.log("getMessageAsync")
        const {data} = await axios.get("/movies/getMovies",{
          params:{curPage,eachPage}
        })
        let result = {movies:data.data}
        context.commit("getMovies",result)
      },
      async getStudiosAsync(context,{curPage = 1,eachPage = 999}={}){
        console.log("getStudiosAsync")
        const {data} = await axios.get("/studios/getStudios",{
          params:{curPage,eachPage}
        })
        let result = {studios:data.rows}
        context.commit("getStudios",result)
      },
      async addScheduleAsync(context,{
          movieId =context.state.value1["_id"],
          studioId=context.state.value2["_id"],
          theaterId=context.state.value3["_id"],
          price,showTime
        }={}){
        console.log("addScheduleAsync")
        const data = await axios.post("/schedules/addSchedule",{
          movieId,studioId,theaterId,price,showTime
        })
        alert("成功")
        // let result = {studios:data.rows}
        // context.commit("getStudios",result)
      },
  }
}
