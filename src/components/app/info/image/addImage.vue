<template>
	<div>
	<el-select v-model="uploadArgument.type" placeholder="图片类型">
	    <el-option
	      v-for="item in options"
	      :key="item.value"
	      :label="item.label"
	      :value="item.value">
	    </el-option>
  	</el-select>
	<el-upload
	  class="upload-demo"
	  ref="upload"
	  action="http://127.0.0.1:3000/files/upload"
	  :data="uploadArgument"
	  :on-preview="handlePreview"
	  :on-remove="handleRemove"
	  :file-list="fileList"
	  list-type="picture"
	  :auto-upload="false">
	  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
	  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
	  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
	</el-upload>
	</div>
</template>
<script>
  import axios from "axios"
  export default {
    headers(){
      return{
                  "Access-Control-Allow-Origin": "*"
      }
    },
    data() {
      return {
      	options: [{
          value: '1',
          label: '主页图片'
        }, {
          value: '2',
          label: '剧情图片'
        }],
        selectType: '',
        uploadArgument:{"filmsid":"","type":""},
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
          isUploadShow: false,  // 是否显示upload组件
          supportWebp: false,   // 是否支持webp
          bucketHost: '',   // 上传图片的外链域名
          form: {} 
      };
    },
    created(){
    	this.uploadArgument.filmsid=this.$router.app._route.params.movieId

    	
    },
    updated(){
    	console.log(this.uploadArgument.type)
    	console.log(this.uploadArgument.filmsid)
    },
    methods: {
      submitUpload(){
      	this.$refs.upload.submit();
      	// axios.post("/files/upload")
      		// this.fileupload()
			console.log("fileupload")
			// this.fileupload()
      		// this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>