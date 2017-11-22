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
		// 查询数据，修改数据结构的赋值情况
		getNewss(state, page) {
			state.data = page.rows
			state.count = page.total
			state.maxPage = Math.ceil(state.count/state.eachPage)
		},
		// 修改数据 
		addAnews(state, page){
			// console.log(state)
			// console.log(page);
		},
		delate(state, page) {
			// console.log(page);
			// console.log(state);
		}

	},
	actions: {
		// 查询news数据并渲染
		async getNewssAsync(context, {curPage = this.state.newsListStore.curPage, eachPage = this.state.newsListStore.eachPage} = {}) {
			const {data} = await axios.get("/news/getNewss", {
				params: {
					curPage,
					eachPage
				}
			})
			context.commit("getNewss", data)
		},
		// 修改news数据 
		async addAnewsAsync(context, page) {
			const data = await axios.post("/news/addAnews", page)
			context.commit("addAnews", data)
		},
		// 删除news数据
		async delateAsync(context, page) {
			const data = await axios.post("/news/delate", page)
			context.commit("delate", data)
		}
	}
}