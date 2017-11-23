import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

export default {
	namespaced: true,
	state: {
		curPage: 1,
		eachPage: 15,
		maxPage: 0,
		count: 0,
		data: []
	},
	mutations: {
		getStudiosByPage(state, page) {
			console.log(page)
			state.data = page.rows
			state.curPage = page.curPage
			state.eachPage = page.rows.length
			state.count = page.total
			state.maxPage = Math.ceil(page.total/page.rows.length) 
			console.log(state)
		},
		getStudios(state, page) {
			Object.assign(state, page)
		}
	},
	actions: {
		async getStudiosByPageAsync(context, curPage = this.state.curPage, eachPage = this.state.eachPage) {	
			
			const {
				data
			} = await axios.get("/studios/getStudiosAll", {
				params: {
					curPage:1,
					eachPage:20
				}
			})
			console.log(data)
			context.commit("getStudiosByPage", data)
		},
		async addStudios(context,a) {
			const {
				data
			} = await axios.post("/studios/addStudios", {
				name:a.name,
				address:a.address
			})
		},
		async changeStudios(context,a) {
			document.getElementById("box2").style.display = "none"
			const {
				data
			} = await axios.post("/studios/changeStudio", {
				changeId:a.id,
				name:a.name,
				address:a.address,
				status:a.status
			})
			context.dispatch("getStudiosByPageAsync", data)
		},
		async moveStudio(context,a) {
			const {
				data
			} = await axios.post("/studios/moveStudio", {
				_id:a
			})
			context.dispatch("getStudiosByPageAsync", data)
		}
	}
	
	}




