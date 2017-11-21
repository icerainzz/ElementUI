import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

export default {
	state: {
		curPage: 1,
		eachPage: 10,
		maxPage: 0,
		count: 0,
		data: []
	},
	mutations: {
		getEmpsByPage(state, page) {
			Object.assign(state, page)

		}
	},
	actions: {
		async getEmpByPageAsync(context, curPage = this.state.curPage, eachPage = this.state.eachPage) {
			const {
				data
			} = await axios.get("/emps/getEmpsByPage", {
				params: {
					curPage,
					eachPage
				}
			})
			context.commit("getEmpsByPage", data)
			console.log(data)
		}
	}
}