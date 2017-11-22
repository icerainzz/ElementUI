<template>
	<div>
	
		<div><input v-model="username" type="text"></div>
		<div><input type="text"></div>
		<div><input @click="reg" type="button" value="注册"></div>
	</div>
</template>
<script>
	export default {
		name: "reg",
		data() {
			return {
				username: "zhangsan"
			}
		},
		methods: {
			reg() {
				this.$router.push({
					name: "login",
					params: {
						username: this.username
					}
				})
			}
		}
	}
</script>
