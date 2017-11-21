<template>
	<div>
		<h1>资讯列表</h1>
		<el-table
			:data="data"
	      	style="width: 700px;">
	      	<el-table-column
		        prop="_id"
		        label="编号"
		        width="180">
		    </el-table-column>
	      	<el-table-column
		        prop="name"
		        label="标题"
		        width="180">
		    </el-table-column>
	    	<el-table-column
		        prop="newsCnt"
		        label="内容">
		      </el-table-column>
	      	<el-table-column
		      	fixed="right"
		      	label="操作"
		     	 width="100">
		      	<template slot-scope="scope">
		        	<el-button type="text" @click="handleClick(scope.row)" size="small">修改</el-button>
		        	<el-button type="text" size="small">编辑</el-button>
		      	</template>
		    </el-table-column>
	    </el-table>
	    <el-pagination
	      	@size-change="handleSizeChange"
	      	@current-change="handleCurrentChange"
	      	:current-page="~~curPage"
	      	:page-sizes="[20, 40, 80, 100]"
	      	:page-size="~~eachPage"
	      	layout="total, sizes, prev, pager, next, jumper"
	      	:total="count">
	    </el-pagination>
	</div>
</template>
<script>
	
	import { mapState, mapActions } from "vuex"
	export default {
		name: "newsList",
		created() {
			this.getNewssAsync()
		},
		computed: {
			...mapState("newsListStore", ["curPage", "eachPage", "maxPage", "count", "data"])
		},
		methods: {
			handleClick(row) {
				// console.log(row)
			},
			handleSizeChange(val) {
	        	console.log(`每页 ${val} 条`);
	        	this.getNewssAsync({
	        		curPage: 1,
	        		eachPage: val,
	       	 	})
	      	},
	      	handleCurrentChange(val) {
	        	console.log(`当前页: ${val}`);
	        	this.getNewssAsync({
	        		curPage: val,
	        		eachPage: this.eachPage
	        	})
	      	},			
			...mapActions("newsListStore", ["getNewssAsync"])
		}
	}
</script>

<style>
	.cell {
		max-height: 100px;
		overflow: auto;
	}
</style>