<script>
	
	import { mapGetters, mapMutations } from "vuex"
	import {SET_SHOW_TYPE} from "./store.js"
	export default {
		name: "filters",
		render(h) {
			return (
				<div class="filters-wrap">
				showType: 
					{
						this.filters.map(item => {
							if(item === this.showType) {
								return <span>{item}</span>
							}
							return <a onClick={(e) => {
								e.preventDefault()
								this[SET_SHOW_TYPE](item)
							}} href="#">{item}</a>
						})
					}
					<span>{this.completedTodoTotal}/{this.total}</span>
				</div>
			)
		},
		data() {
			return {
				filters: ["all", "completed", "active"]
			}
		},

		created() {
			console.log(this)
		},
		computed: {
			showType() {
				return this.$store.state.todoList.showType
			},
			...mapGetters(["total", "completedTodoTotal"])
		},
		methods: {
			// setShowType(showType) {
			// 	this.$store.commit("setShowType", showType)
			// }
			...mapMutations([SET_SHOW_TYPE])
		}
	}
</script>

<style>

.filters-wrap > * {
	margin-right: 10px;
}

</style>