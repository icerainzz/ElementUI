export default {
	state: {
		count: 1,
	},
	getters:{
		total1(){
			return 1
		}
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
		}
	}
}