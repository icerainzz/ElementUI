  import axios from "axios"

 export default {
 	namespaced: true,
 	state: {
 		name: "",
 		newsCnt: ""
 	},

 	mutations: {
 		addNews(state, page) {
 			// console.log(page);
 		}
 	},
 	actions: {
 		async addNewsAsync(context, page) {
 			const data = await axios.post("/news/addNews", page)

 			context.commit("addNews", data)
 		}
 	}
 }