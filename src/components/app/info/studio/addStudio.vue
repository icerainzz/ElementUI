<template>
	<div>
		<el-input v-model="name" placeholder="请输入影院名称"></el-input>
		<el-input v-model="address" placeholder="请输入影院地址"></el-input>
		<el-button type="primary" @click="addStudios({name:name,address:address})" >确认添加</el-button>
	</div>
</template>
<script>
	import {mapState,mapActions} from "vuex"
	export default {
		name: "addStudio",
		created() {
			// console.log(this)
			// console.log(this.addStudios)
			// this.addStudios(a)
		},
		 data() {
		    return {
		      name: '',
		      address:''
		    }
		  },
		  methods: {
			...mapActions("studioList", ["addStudios"])
		},
	}
</script>