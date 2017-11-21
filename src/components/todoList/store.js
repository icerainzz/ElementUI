export const ADD_TODO = "ADD_TODO"
export const SET_SHOW_TYPE = "SET_SHOW_TYPE"
export const COMPLETED_TODO = "COMPLETED_TODO"

export default {
	state: {
		showType: "all",
		todoList: [{
			text: "HTML",
			completed: false
		}, {
			text: "CSS",
			completed: true
		}, {
			text: "JavaScript",
			completed: false
		}]
	},
	getters: {
    filterData(state) {
			switch(state.showType) {
				case "all":
					return state.todoList
				case "completed":
					return state.todoList.filter(item => item.completed)
				case "active":
					return state.todoList.filter(item => !item.completed)
			}
		},
		total(state) {
			return state.todoList.length
		},
		completedTodoTotal(state) {
			return state.todoList.filter(item => item.completed).length
		}
  },
  mutations: {
  	addTodo(state, text) {
  		state.todoList.push({
  			text,
  			completed: false
  		})
  	},
  	[SET_SHOW_TYPE](state, showType) {
  		state.showType = showType
  	},
  	completedTodo(state, item) {
  		item.completed = !item.completed
  	}
  },
	actions: {
		async addTodAsync(context, text) {
			await new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve("")
				}, 1500)
			})
			context.commit("addTodo", text)
		}
	}
}