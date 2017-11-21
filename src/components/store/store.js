import Vue from "vue"
import Vuex from "vuex"

// import todoList from "../todoList/store.js"
// import counter from "../counter/store.js"
import addscheduleStore from "../app/info/schedule/addscheduleStore.js"
console.log(addscheduleStore)

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
	 addscheduleStore:addscheduleStore
	}
})