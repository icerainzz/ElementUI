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
        studiosByschedule:[],
        theatersBystudio:[],
        seatList:[]
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
    },
    getStudiosByMovieId(state,data){
       Object.assign(state,data)
       console.log(state.studiosByschedule)
    },
    getTheaterByMovieId(state,data){
       Object.assign(state,data)
       // console.log(state.theatersBystudio)
    },
    getSeatingsByScheduleId(state,data){
       Object.assign(state,data)
       // console.log(state.theatersBystudio)
    },

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
        const data = await axios.post("/schedules/addSchedule",{
          movieId,studioId,theaterId,price,showTime
        })
        alert("成功")
      },
      async getStudiosByMovieIdAsync(context){
        console.log(context.state.value1["_id"])
        const {data} = await axios.post("/schedules/getStudiosByMovieId",{
          movieId:context.state.value1["_id"]
        })
        let result = {studiosByschedule:data.rows}
        context.commit("getStudios",result)
      },
      async getTheaterByStudioIdAsync(context,{
          movieId =context.state.value1["_id"],
          studioId,
          showTime,
        }={}){
          const {data} = await axios.post("/schedules/getTheaterByStudioId",{
            studioId,
            movieId,
            showTime
          })
          let result = {theatersBystudio:data.rows}
          context.commit("getTheaterByMovieId",result)
      },
      async delSchedulesInStudioByMovieIdAsync(context,{
          movieId =context.state.value1["_id"],
          studioId,
          status,
          showTime,
        }={}){
        await axios.post("/schedules/delSchedulesInStudioByMovieId",{
          movieId,studioId,status
        })
        .then(function(response){
          console.log(response);
          context.dispatch("getStudiosByMovieIdAsync")
          context.dispatch("getTheaterByStudioIdAsync",{showTime,studioId})
          context.commit("getSeatingsByScheduleId",{seatList:[]})
        })
        .catch(function(err){
          console.log(err);
        });
      },
      async getSeatingsByScheduleIdAsync(context,scheduleId){
        const {data} = await axios.get("/schedules/getSeatingsByScheduleId",{
          params:{scheduleId}
        })
        console.log(data.rows)
        let result = {seatList:data.rows}
        context.commit("getSeatingsByScheduleId",result)
      },
      async buyAsync(context,id){
        console.log("buyAsync")
        await axios.post("/schedules/buy",{
          _id:id
        })
         .then(function(response){
          console.log(response)
          alert("购买成功")
        })
        .catch(function(err){
          console.log(err);
        });
      },

  }
}
