<template>
	<div>
		 <!-- 新增电影的按钮 -->
			 <el-button type="primary" icon="el-icon-edit" @click="addFlag = true">
			 新增电影
			 </el-button>
		 <!-- 新增影厅的对话框 -->
			<el-dialog title="新增电影" :visible.sync="addFlag">
				<el-form label-position="left"  label-width="80px" :model="input" style="width:400px">
					  <el-form-item  label="中文名称">
					    <el-input v-model="input.cName" ></el-input>
					  </el-form-item>
					  <el-form-item  label="英文名称">
					    <el-input v-model="input.eName"></el-input>
					  </el-form-item>
					    <el-form-item label="影片类型">
					    <el-input  v-model="input.type"></el-input>
					  </el-form-item>
	  				  <el-form-item  label="制片国家/地区">
					    <el-input v-model="input.country" ></el-input>
					  </el-form-item>
					  <el-form-item  label="片长">
					    <el-input v-model="input.duration"></el-input>
					  </el-form-item>
					    <el-form-item label="上映时间">
					    <el-input  v-model="input.release"></el-input>
					  </el-form-item>
					   </el-form-item>
					    <el-form-item label="剧情介绍">
					    <el-input  
					    	v-model="input.synopsis"   
					    	:autosize="{ minRows: 2, maxRows: 8}"
					    	type="textarea"
						></el-input>
					  </el-form-item>

					   <el-form-item >
					   	 <el-button type="primary" @click="addMovied">新增</el-button>
					   	 <el-button type="primary"  :disabled="buttonFlag" @click="transferImgPage">新增图片</el-button>
			   			 <el-button type='primary' @click="">重置</el-button>
					  </el-form-item>
				</el-form>
			</el-dialog>
		 <!-- 修改电影的对话框 -->
			 <el-dialog title="修改电影" :visible.sync="updataFlag">
					<el-form label-position="left"  label-width="80px" :model="update" style="width:400px">
						  <el-form-item  label="中文名称">
						    <el-input v-model="update.cName" ></el-input>
						  </el-form-item>
						  <el-form-item  label="英文名称">
						    <el-input v-model="update.eName"></el-input>
						  </el-form-item>
						    <el-form-item label="影片类型">
						    <el-input  v-model="update.type"></el-input>
						  </el-form-item>
		  				  <el-form-item  label="制片国家/地区">
						    <el-input v-model="update.country" ></el-input>
						  </el-form-item>
						  <el-form-item  label="片长">
						    <el-input v-model="update.duration"></el-input>
						  </el-form-item>
						    <el-form-item label="上映时间">
						    <el-input  v-model="update.release"></el-input>
						  </el-form-item>
						   </el-form-item>
						    <el-form-item label="剧情介绍">
						    <el-input  
						    	v-model="update.synopsis"   
						    	:autosize="{ minRows: 2, maxRows: 8}"
						    	type="textarea"
							></el-input>
						  </el-form-item>

						   <el-form-item >
						   	 <el-button type="primary" @click="saveUpdate">
						   	 保存
						   	</el-button>
				   			 <el-button type='primary' @click="">重置</el-button>
						  </el-form-item>
					</el-form>
				</el-dialog>


		<!-- 电影列表 -->
		 <el-main>
			<el-table
				 style="width:1000px"
					 stripe
				    :data="data"
				      border
				     
				    max-height="500">
				    <el-table-column
				      fixed
				      prop="cName"
				      label="中文名称"
				      >
				    </el-table-column>
				    <el-table-column
				      prop="eName"
				      label="英文名称"
				     >
				    </el-table-column>

				     <el-table-column
				      prop="type"
				      label="影片类型"
				     >
				    </el-table-column>
				     <el-table-column
				      prop="country"
				      label="制片国家/地区"
				     >
				    </el-table-column>
				     <el-table-column
				      prop="duration"
				      label="片长"
				     >
				    </el-table-column>
				     <el-table-column
				      prop="release"
				      label="上映时间"
				     >
				    </el-table-column>
				     <el-table-column
				     hight:100
				     style="overflow: hidden"
				      prop="synopsis"
				      label="剧情介绍"
				     >
				    </el-table-column>


				    <el-table-column
				      fixed="right"
				      label="操作"	
				       prop="_id"
				      style="width:200px"
				       >
				      <template slot-scope="scope">
				      	<el-button  
				      	type="text"
				        size="small"
				        @click="handleClick(scope.row)">
				     		 查看图片
				  		</el-button>
				        <el-button  
				        type="text"
				        @click="updataData(scope.row)"
				        
				          size="small">修改</el-button>
				        <el-button
				          type="text"
				          @click="delate(scope.row)"
				          size="small">
				          删除
				        </el-button>
				      </template>
				    </el-table-column>
	  		</el-table>
  		</el-main>



	</div>
</template>
<script>
	import { mapState, mapActions,mapMutations} from "vuex"
	export default {
		name: "addMovie",
		data(){
			return{
				addFlag:false,
				formLabelWidth: '120px',
				updataFlag:false,
				buttonFlag:true
			}
		},
		computed: {
			...mapState("movie",["curPage", "eachPage", "maxPage", "count", "data","input","update","delateId","addId"])
		}, 
		created(){
			this.getMoviesListAsync()
		},
		methods:{
			addMovied(){
				this.buttonFlag=false
				this.addMovieAsync()
			},
			handleClick(row){

			},
			updataData(row){
				console.log(row)
				this.updataFlag=true
				this.$store.commit("movie/setUpdate",{...row})

			},
			saveUpdate(){
				this.updateMovieAsync()
				this.updataFlag=false
			},
			delate(row){
				console.log(row)

				this.$store.commit("movie/delateData",row._id)
				this.movieDeleteAsync()

			},
            transferImgPage(){
				this.$router.push({
					name: "addImage",
					params: {
						movieId: this.addId
					}
				})
        	},	

		    ...mapActions("movie", ["getMoviesListAsync","addMovieAsync","updateMovieAsync","movieDeleteAsync"]),
		    ...mapMutations("movie", ["setUpdate","delateData"]),
		}
	}
</script>