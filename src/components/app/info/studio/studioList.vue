
	<template>
	<div id="box">
		<div>
	  <el-table
	    :data="data"
	    style="width: 100%">

	    <el-table-column
	      prop="name"
	      label="影院名称"
	      width="120">
	    </el-table-column>

	    <el-table-column
	      prop="address"
	      label="地址"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="status"
	      label="状态"
	      width="120">
	    </el-table-column>
	   

	    <el-table-column
	      fixed="right"
	      label="操作"
	      width="200">
	      <template slot-scope="scope">
	        <el-button @click="handleClick(scope.row)" type="text" size="small">影厅</el-button>
	        <el-button @click="changeClick(scope.row)" type="text" size="small">编辑</el-button>
	        <el-button @click="moveStudioClick(scope.row)" type="text" size="small">删除</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
	  </div>
		<div id="box2" style="display:none">
			<el-button type="info" >您将修改以下影院信息</el-button>
			<el-input v-model="name" placeholder="请输入影院名称"></el-input>
			<el-input v-model="address" placeholder="请输入影院名称"></el-input>
			<el-button type="primary" @click="changeStudios({id:id,name:name,address:address,status:status})" >确认修改</el-button>
		</div>


		  <div class="block" style="margin-top: 10px">
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :page-sizes="[10, 20, 30, 40]"
		      :current-page="~~curPage"
		      :page-size="~~eachPage"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="count">
		    </el-pagination>
		  </div>
	</div>
	</template>



<script>
	import {mapState,mapActions} from "vuex"
	export default {
		name: "studioList",
		created() {
			console.log(this)
			this.getStudiosByPageAsync(1,20)
		},
		computed: {
			...mapState("studioList", ["curPage", "eachPage", "maxPage", "count", "data"])
		},
		methods: {
			handleSizeChange(val) {
	          console.log(`每页 ${val} 条`);
	          this.getStudiosByPageAsync(1,`${val}`)
	        },
	         handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		        this.getStudiosByPageAsync({
		        	curPage:1,
		        	eachPage:val
		        })
		        
		      },


			handleClick(row) {
				this.$router.push("/info/addTheater?id="+row._id)
			},
			changeClick(studio) {
				document.getElementById("box2").style.display = "block"
				document.getElementById("box2").scrollIntoView()
				this.$data.id = studio._id
				this.$data.name = studio.name
				this.$data.address = studio.address
				this.$data.status = studio.status
			},
			moveStudioClick(studio) {
				this.moveStudio(studio._id)
			},
			handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	        this.getStudiosByPageAsync({
	        	curPage: 1,
	        	eachPage: val
	        })
	      },
	      handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
	        this.getStudiosByPageAsync({
	        	curPage: val,
	        	eachPage: this.eachPage
	        })
	      },
			...mapActions("studioList", ["getStudiosByPageAsync","changeStudios","moveStudio"])
		},

	    data() {
      return {
      	currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
      	id:"",
      	name: '',
		address:'',
		status:1,
      }
    }
  
	}
</script>









