<!-- <template>
	<div class="info-wrap">
		<ul>
			<li>
				<dl>
					<dt>员工管理</dt>
					<dd><router-link to="/info/addEmp">新增员工</router-link></dd>
					<dd><router-link to="/info/empList">员工列表</router-link></dd>
					<dd><router-link to="/info/counter">计数器</router-link></dd>
					<dd><router-link to="/info/todoList">代办列表</router-link></dd>
				</dl>
			</li>
			<li>
				<dl>
					<dt>学生管理</dt>
					<dd>新增学生</dd>
					<dd>学生列表</dd>
				</dl>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template> -->

<template>
	 <div>
	 	<el-container style="height: 630px; border: 1px solid #eee">
			  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			    <el-menu :default-openeds="['1', '3']">
			      <el-submenu index="1">
			        <template slot="title"><i class="el-icon-message"></i>电影信息管理</template>
			         
			          	<router-link class="link" to="/info/addMovie">
			          		 <el-menu-item index="1-1">
			          	     <i class="el-icon-circle-plus"></i>
			         		 新增电影
			         		 </el-menu-item>
			         	</router-link>	 
			          	<router-link class="link" to="/info/movieList">
			          		 <el-menu-item index="1-2">
			          			<i class="el-icon-tickets"></i>
			         		 电影列表
			         		 </el-menu-item>
			         	</router-link>	 
			          	
			      </el-submenu>
			      <el-submenu index="2">
			        <template slot="title"><i class="el-icon-menu"></i>影院信息管理</template>
			        <el-submenu index="2-1">
			          <template slot="title">影院管理</template>
			         	<router-link class="link" to="/info/addTheater">
			          		 <el-menu-item index="2-1-1">
			          	     <i class="el-icon-circle-plus"></i>
			         		 新增影院
			         		 </el-menu-item>
			         	</router-link>	 
			          	<router-link class="link" to="/info/theaterList">
			          		 <el-menu-item index="2-1-2">
			          			<i class="el-icon-tickets"></i>
			         		 影院列表
			         		 </el-menu-item>
			         	</router-link>	 
       				 </el-submenu>
       				 <el-submenu index="2-2">
			          <template slot="title">影厅管理</template>
			       		<router-link class="link" to="/info/addStudio">
			          		 <el-menu-item index="2-2-1">
			          	     <i class="el-icon-circle-plus"></i>
			         		 新增影厅
			         		 </el-menu-item>
			         	</router-link>	 
			          	<router-link class="link" to="/info/studioList">
			          		 <el-menu-item index="2-2-2">
			          			<i class="el-icon-tickets"></i>
			         		 影厅列表
			         		 </el-menu-item>
			         	</router-link>	 
       				 </el-submenu>
			      </el-submenu>
			       <el-submenu index="3">
			        <template slot="title"><i class="el-icon-date"></i>排片信息管理</template>
			      		<router-link class="link" to="/info/addSchedule">
			          		 <el-menu-item index="3-1">
			          	     <i class="el-icon-circle-plus"></i>
			         		 新增排片
			         		 </el-menu-item>
			         	</router-link>	 
			          	<router-link class="link" to="/info/studioList">
			          		 <el-menu-item index="3-2">
			          			<i class="el-icon-tickets"></i>
			         		 排片列表
			         		 </el-menu-item>
			         	</router-link>	 
			      </el-submenu>
			        <el-submenu index="4">
			        <template slot="title"><i class="el-icon-news"></i>资讯信息管理</template>
			         	<router-link class="link" to="/info/addNews">
			          		 <el-menu-item index="4-1">
			          	     <i class="el-icon-circle-plus"></i>
			         		 新增资讯
			         		 </el-menu-item>
			         	</router-link>	 
			          	<router-link class="link" to="/info/newsList">
			          		 <el-menu-item index="4-2">
			          			<i class="el-icon-tickets"></i>
			         		 资讯列表
			         		 </el-menu-item>
			         	</router-link>	 
			      </el-submenu>
			        <el-submenu index="5">
			        <template slot="title"><i class="el-icon-edit-outline"></i>用户信息管理</template>
			         	<router-link class="link" to="/info/addUser">
			          		 <el-menu-item index="5-1">
			          	     <i class="el-icon-circle-plus"></i>
			         		 新增管理员
			         		 </el-menu-item>
			         	</router-link>	 
			          	<router-link class="link" to="/info/userList">
			          		 <el-menu-item index="5-2">
			          			<i class="el-icon-tickets"></i>
			         		 管理员列表
			         		 </el-menu-item>
			         	</router-link>	 
			      </el-submenu>
			    </el-menu>
			  </el-aside>
					  
		  <el-container>
		    <el-header style="text-align: right; font-size: 12px">
		      <el-dropdown>
		        <i class="el-icon-setting" style="margin-right: 15px"></i>
		        <el-dropdown-menu slot="dropdown">
		          <el-dropdown-item>退出登录</el-dropdown-item>
		        </el-dropdown-menu>
		      </el-dropdown>
		      <span>管理员</span>
		    </el-header>
		    
		    <el-main>
				<router-view></router-view>
		    </el-main>
		  </el-container>
		</el-container>
				
	</div>
</template>

<script>
	export default {
		name: "info"
	}
</script>



<style>

	 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

  .link{
  	text-decoration: none;
  	 color: #333;

  }

</style>