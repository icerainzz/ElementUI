<template>
	<div>
		<h1>你一共点击了{{counter.count}}次</h1>
		<input @click="increment" type="button" value="+">
		<input @click="decrement" type="button" value="-">
	</div>
</template>

<script>
	import { mapState, mapMutations } from "vuex"

	export default {
		name: "counter",
		computed: {
			...mapState(["counter"])
		},	
		methods: {
			...mapMutations(["increment", "decrement"])
		}
	}
</script>