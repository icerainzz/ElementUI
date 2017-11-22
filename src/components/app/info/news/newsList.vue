<template>
	<div>
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
			        	<el-button type="text" @click="amendClick(scope.row)" size="small">修改</el-button>
			        	<el-button type="text" size="small" @click="deleteClick(scope.row)">编辑</el-button>
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

	    <div id="amend" class="amend" style="display: none; margin-top: 30px">
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
				<el-button type="primary" round @click="amendSave">保存</el-button>
				<el-button type="primary" round @click="amendReset">重置</el-button>
			</div>
		</div>
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
			// 提取后台数据
			...mapState("newsListStore", ["curPage", "eachPage", "maxPage", "count", "data"]),
			// 修改数据并保存
			...mapState("newsListStore", ["name", "newsCnt", "_id"]),
			// 删除数据
			...mapState("newsListStore", "_id")
		},
		methods: {
			amendClick(row) {
				document.getElementById("amend").style.display="block";
				this.$data.textarea2 = row.name,
				this.$data.textarea3 = row.newsCnt,
				this.$data._id = row._id
			},
			// 修改后保存
			amendSave(row) {
				const newsData = {
					name: this.$data.textarea2,
					newsCnt: this.$data.textarea3,
					_id: this.$data._id
				}  
				this.addAnewsAsync(newsData)
				this.getNewssAsync()
				document.getElementById("amend").style.display="none";

	      	},
	      	amendReset() {
	      		// console.log("on");
	      	},

	      	// 删除
	      	deleteClick(row) {
	      		this.delateAsync(row)
	      		this.getNewssAsync()
	      	},

	      	// 分页
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
				// 提取数据渲染到列表		
			...mapActions("newsListStore", ["getNewssAsync"]),
				// 修改后保存
			...mapActions("newsListStore", ["addAnewsAsync"]),
				// 删除数据
			...mapActions("newsListStore", ["delateAsync"])
		}
	}
</script>

<style>
	.cell {
		max-height: 100px;
		overflow: auto;
	}
</style>