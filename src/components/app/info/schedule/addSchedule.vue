<template>
<div class="addSchedule-wrap">
  <el-select class="select-item" v-model="value1" placeholder="电影"
  	@change="(value)=>{selectMovie(value)}"
  >
    <el-option
      v-for="(item,index) in movies"
      :key="item._id"
      :value="item._id"
      :label="item.cName"
      >
    </el-option>
  </el-select>
  <el-select class="select-item" v-model="value2" placeholder="影院"
  	
  >
    <el-option
      v-for="(item,index) in studios"
      :key="item._id"
      :value="item._id"
      :label="item.name"
      >
    </el-option>
  </el-select>
   <el-select class="select-item" v-model="value3" placeholder="影厅"
   >
    <el-option
      v-for="item in theaters"
      :key="item._id"
      :label="item.name"
      :value="item._id">
    </el-option>
  </el-select>
  <div class="block">
    <el-date-picker
      v-model="showTime"
      type="datetime"
      placeholder="选择放映时间"
      align="right"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
  <el-input class="price-input" v-model="price" placeholder="票价"
  ></el-input>
  <div class="pandding-bottom" >
  	<el-button type="primary" icon="el-icon-upload"
  		@click="addSchedule"
  	>保存</el-button>
	<el-button type="primary" icon="el-icon-refresh">重置</el-button>
  </div>
  <h3 class="list-title">影院列表</h3>
  <el-table
    :data="studiosByschedule"
    border
    style="width:800px">
    <el-table-column
      prop="name"
      label="影院名">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看影厅</el-button>
        <el-button @click="delSchedulesInStudioByMovieId(scope.row)" type="text" size="small">下线此片</el-button>
      </template>
    </el-table-column>
  </el-table>
  <h3 class="list-title">放映厅</h3>
  <el-table
    :data="theatersBystudio"
    border
    style="width:800px">
    <el-table-column
      prop="show_time"
      label="放映时间"
      >
    </el-table-column>
    <el-table-column
      prop="theaterId.name"
      label="放映厅"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="checkSeat(scope.row)" type="text" size="small">查看座位</el-button>
      </template>
    </el-table-column>
  </el-table>
  <h3 class="list-title">座位列表</h3>
  <el-table
      :data="seatList"
      border
      style="width: 800px">
      <el-table-column
        prop="seatId.displayName"
        label="座位"
        >
      </el-table-column>
      <el-table-column
        prop="state"
        :formatter="ifbuy"
        label="状态"
       >
      </el-table-column>
      <el-table-column
	      fixed="right"
	      label="操作"
	      width="150">
	      <template slot-scope="scope">
	        <el-button @click="buy(scope.row)" type="text"  size="small">购票</el-button>
	      </template>
      </el-table-column>
  </el-table>
 </div>
</template>

<script>
  import { mapState,mapActions } from "vuex"
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
      theaters(){
        return this.$store.state.addscheduleStore.theaters
      },
    	studiosByschedule(){
    		return this.$store.state.addscheduleStore.studiosByschedule
    	},
    	theatersBystudio(){
    		return this.$store.state.addscheduleStore.theatersBystudio
    	},
    	seatList(){
    		return this.$store.state.addscheduleStore.seatList
    	},
    	value1:{
    		 	get: function(){
    		      return this.$store.state.addscheduleStore.value1
    		    },
    	    set: function(newValue) {
            console.log (newValue) 
            this.$store.commit("selectMovie",newValue)
    	    }
    	},
    	value2:{
		 	  get: function(){
		      return this.$store.state.addscheduleStore.value2
		    },
		    set: function(newValue) {
          console.log (newValue) 
          this.$store.commit("selectStudio",newValue)
          this.$store.commit("getTheaters")
		    }
    	},
    	value3:{
		 	  get: function(){
		      return this.$store.state.addscheduleStore.value3
		    },
		    set: function(newValue) {
          console.log (newValue) 
          this.$store.commit("selectTheater",newValue)
		    }
    	},
    },
    // computed:mapState([movies,studios,studiosByschedule,theatersBystudio,seatList,])
    created(){
 		console.log(this.$store.state.addscheduleStore.movies)
    	this.$store.dispatch("getMoviesAsync")
    	this.$store.dispatch("getStudiosAsync")
    },
    methods:{
    	selectMovie(value){
    		this.getStudiosByMovieId()
    	},
    	getStudiosByMovieId(){
    		this.$store.dispatch("getStudiosByMovieIdAsync")
    	},
    	getTheaterByStudioId(data){
    		this.$store.dispatch("getTheaterByStudioIdAsync",data)
    	},
    	addSchedule(){
    		console.log("in-addSchedule")
    		let time = moment(this.showTime).format('MM/DD/YYYY HH:mm')
    		this.$store.dispatch("addScheduleAsync",{showTime:time,price:this.price})
    		this.getStudiosByMovieId()
    		// this.price=""
    		// this.showTime=""
    		// this.value1={}
    		// this.value2={}
    		// this.value3={}
    	},
    	delSchedulesInStudioByMovieId(row){
    		console.log(row)
    		let time = moment(this.showTime).format('MM/DD/YYYY HH:mm')
    		this.$store.dispatch("delSchedulesInStudioByMovieIdAsync",{studioId:row._id,status:0,showTime:time})
    	},
   		ifbuy(row, column, cellValue){
   			console.log(cellValue)
   			if(cellValue==0){
   				return "未售"
   			}else{
   				return "已售"
   			}
   		},
    	handleClick(row) {
        	console.log(row._id);
        	let time = moment(this.showTime).format('MM/DD/YYYY HH:mm')
        	console.log(time)
        	this.getTheaterByStudioId({showTime:time,studioId:row._id})
      },
    	checkSeat(row){
    		console.log(row);
    		this.$store.dispatch("getSeatingsByScheduleIdAsync",row._id)
    	},
    	buy(row){
    		console.log(row.scheduleId);
    		this.$store.dispatch("buyAsync",row._id)
    		console.log(this.flag)
    		this.flag = true
    		this.$store.dispatch("getSeatingsByScheduleIdAsync",row.scheduleId)
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
  .pandding-bottom{
    padding-bottom: 35px;
  }
  .list-title{
    color:#409EFF;
  }
</style>