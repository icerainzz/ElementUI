<template>
	<div>
		<h1>登录页面</h1>
		<div><input v-model="$route.params.username" type="text"></div>
		<div><input type="text"></div>
		<div><input @click="login" type="button" value="登录"><input @click="reg" type="button" value="注册"></div>
	</div>
</template>

<script>
	export default {
		name: "login",
		methods: {
			login() {
				this.$router.push("/info")
			},
			reg() {
				this.$router.push({
					name: "reg"
				})
			}
		}
	}
</script>
 