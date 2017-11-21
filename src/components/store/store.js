import Vue from "vue"
import Vuex from "vuex"

// import todoList from "../todoList/store.js"
// import counter from "../counter/store.js"
// import empStore from "../app/info/store/empStore.js"
import newsListStore from "../../components/app/info/news/newsListStore.js"
import addNewsStore from "../../components/app/info/news/addNewsStore.js"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		newsListStore,	
		addNewsStore, 
	}
})