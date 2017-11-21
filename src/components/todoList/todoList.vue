<template>
	<ul>
		<li 
			@click="completedTodo(item)" 
			:class="{completed: item.completed}" 
			v-for="(item, index) in todoList">{{item.text}}</li>
	</ul>
</template>

<script>

	import { mapState, mapMutations, mapGetters } from "vuex"
	import {COMPLETED_TODO} from "./store.js"

	export default {
		name: "todoList",
		methods: {
			// completedTodo(item) {
			// 	item.completed = !item.completed
			// 	// this.$emit("completedTodo", item)
			// }
			...mapMutations(["completedTodo"])
		},
		computed: {
			// ...mapState(["todoList"])
			...mapGetters({
				todoList: "filterData"
			})
		}
	}
</script>

<style>

.completed {
	color: red;
	text-decoration: line-through;
}

</style>