<template>
	<div>
		标题：<el-input
		  type="textarea"
		  autosize
		  placeholder="请输入标题"
		  v-model="textarea2" ref="todo">
		</el-input>
		
		<div style="margin: 20px 0;"></div>

		内容：<el-input
		  type="textarea"
		  :autosize="{ minRows: 2, maxRows: 4}"
		  placeholder="请输入内容"
		  v-model="textarea3" ref="todo2">
		</el-input>
		<div style="margin-top: 20px">
			<el-button type="primary" round @click="addNews">保存</el-button>
			<el-button type="primary" round @click="reset">重置</el-button>
		</div>
	</div>
</template>
<script>
	import { mapState, mapActions } from "vuex"
	export default {
		name: "addNews",
		data() {
			return {
				textarea2: "",
				textarea3: "",
			}
		},
		computed: {
			...mapState("addNewsStore",["name", "newsCnt"])
		},
		
		methods: {
			addNews() {
				const postData = {
					name: this.$refs.todo.value,
					newsCnt: this.$refs.todo2.value,
				}
				this.addNewsAsync(postData)
			},

			reset() {
				console.log("in");
				this.$refs.todo.value= "",
				this.$refs.todo2.value= ""
			},
			...mapActions("addNewsStore", ["addNewsAsync"])
		}
	}
</script>