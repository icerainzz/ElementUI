import axios from "axios"
export default {
	state:{
		data:[
		{
			name:"太平洋影城1",
			address:"金牛区太平洋娱乐城1"
		},
		{
			name:"太平洋影城2",
			address:"金牛区太平洋娱乐城2"
		},
		{
			name:"太平洋影城3",
			address:"金牛区太平洋娱乐城3"
		}]
	},
	mutations;{
		console.log("in")
		getStudio(state,page){
			Object.assign(state,page)
		}
	},
	actions:{
		async getMovieAll(){
			data = axios.get("/studio/getStudioAll")
			context.commit("getStudio",data)
		}
	}
}
 
