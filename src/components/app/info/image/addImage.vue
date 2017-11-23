<template>
	<el-upload
	  class="upload-demo"
	  ref="upload"
	  action="http://172.20.10.2:3000/files/upload"
	  :on-preview="handlePreview"
	  :on-remove="handleRemove"
	  :file-list="fileList"
	  :auto-upload="false"
    :data="form"
  >
	  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
	  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
	  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
	</el-upload>
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
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
          isUploadShow: false,  // 是否显示upload组件
          supportWebp: false,   // 是否支持webp
          bucketHost: '',   // 上传图片的外链域名
          form: {} 
      };
    },
    methods: {
      submitUpload(){
      	// axios.post("/files/upload")
      		// this.fileupload()
			console.log("fileupload")
			// this.fileupload()
      this.$refs.upload.submit();
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