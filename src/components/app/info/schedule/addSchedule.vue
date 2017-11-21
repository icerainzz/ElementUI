<template>
<div class="addSchedule-wrap">
  <el-select class="select-item" v-model="value1.cName" placeholder="电影"
  	@change="(value)=>{selectMovie(value)}"
  >
    <el-option
      v-for="(item,index) in movies"
      :key="item._id"
      :value="item"
      :label="item.cName"
      >
    </el-option>
  </el-select>
  <el-select class="select-item" v-model="value2.name" placeholder="影院"
  	@change="(value)=>{selectStudio(value)}"
  >
    <el-option
      v-for="(item,index) in studios"
      :key="item._id"
      :value="item"
      :label="item.name"
      >
    </el-option>
  </el-select>
   <el-select class="select-item" v-model="value3.name" placeholder="影厅"
    @change="(value)=>{selectTheater(value)}"
   >
    <el-option
      v-for="item in value2.theaters"
      :key="item._id"
      :label="item.name"
      :value="item">
    </el-option>
  </el-select>
  <div class="block">
    <el-date-picker
      @change="con(showTime)"
      v-model="showTime"
      type="datetime"
      placeholder="选择放映时间"
      align="right"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
  <el-input class="price-input" v-model="price" placeholder="票价"
  	@blur="setPrice(price)"

  ></el-input>
  <div>
  	<el-button type="primary" icon="el-icon-upload"
  		@click="addSchedule"
  	>保存</el-button>
	<el-button type="primary" icon="el-icon-refresh">重置</el-button>
  </div>
  <ul>
  	<li v-for="(item ,index) in movies" >{{item.cName}}</li>
  </ul>
 </div>
</template>

<script>
  var moment = require('moment')
  export default {
  	name:"addSchedule",
  	data() {
      return {
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        showTime: '',
        price:'',
      };
    },
    computed:{
    	movies(){
    		return this.$store.state.addscheduleStore.movies
    	},

    	studios(){
    		return this.$store.state.addscheduleStore.studios
    	},

    	value1:{
		 	get: function(){
		      return this.$store.state.addscheduleStore.value1
		    },
		    set: function(newValue) {
		      this.$store.state.addscheduleStore.value1=newValue
		    }
    	},
    	value2:{
		 	get: function(){
		      return this.$store.state.addscheduleStore.value2
		    },
		    set: function(newValue) {
		      this.$store.state.addscheduleStore.value2=newValue
		    }
    	},
    	value3:{
		 	get: function(){
		      return this.$store.state.addscheduleStore.value3
		    },
		    set: function(newValue) {
		      this.$store.state.addscheduleStore.value3=newValue
		    }
    	},
    },
    created(){
 		console.log(this.$store.state.addscheduleStore.movies)
    	this.$store.dispatch("getMoviesAsync")
    	this.$store.dispatch("getStudiosAsync")
    },
    methods:{
    	selectMovie(value){
    		this.$store.commit("selectMovie",value)
    	},
    	selectStudio(value){
    		this.$store.commit("selectStudio",value)
    	},
    	selectTheater(value){
    		this.$store.commit("selectTheater",value)
    	},
    	setPrice(value){
    		console.log(value)
    	},
    	con(value){
    		let time = moment(value).format('MM/DD/YYYY HH:mm')
    		console.log(time)
    		// console.log(value)
    	},
    	addSchedule(){
    		console.log("in-addSchedule")
    		let time = moment(this.value4).format('MM/DD/YYYY HH:mm')
    		this.$store.dispatch("addScheduleAsync",{showTime:time,price:this.price})
    	}
    }
  }
</script>

<style>
	.price-input{
		width:100px;
		padding:35px 0;
	}
	.label{
		font-size:14px;
		color:#409EFF;
	}
	.addSchedule-wrap{
		display:flex;
		flex-direction:column;
		flex-wrap: wrap;
		justify-content: space-between;
		padding:35px;
	}
	.select-item{
		width:250px;
		padding-bottom: 35px;
	}
</style>