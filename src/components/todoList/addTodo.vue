<template>
	<div>
		<input ref="todo" type="text" />
		<input @click="addTodo" type="button" value="addTodo" />
	</div>
</template>

<script>
	
	import {ADD_TODO} from "./store.js"

	export default {
		name: "addTodo",
		methods: {
			addTodo() {
				// this.$emit("addTodo", this.$refs.todo.value)
				// this.$store.commit(ADD_TODO, this.$refs.todo.value)
				// this.$store.commit({
				// 	type: "addTodo",
				// 	text: this.$refs.todo.value,
				// })
				this.$store.dispatch("addTodAsync", this.$refs.todo.value)
				this.$refs.todo.value = ""
			}
		}
	}
</script>

<style></style>