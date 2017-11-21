import axios from "axios"
export default {
	namespaced:true,
	state: {
		curPage: 1,
		eachPage: 10,
		maxPage: 0,
		count: 0,
		data: []		
	},
	mutations: {
		getNewss(state, page) {
			state.data = page.rows
			state.count = page.total
			state.maxPage = Math.ceil(state.count/state.eachPage)
			console.log(state);

		}
	},
	actions: {
		async getNewssAsync(context, {curPage = this.state.newsListStore.curPage, eachPage = this.state.newsListStore.eachPage} = {}) {
			const {data} = await axios.get("/news/getNewss", {
				params: {
					curPage,
					eachPage
				}
			})
			context.commit("getNewss", data)
		}
	}
}