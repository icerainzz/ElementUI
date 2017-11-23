<template>
	<div class="reg">
		<img src="../../image/486953bd63fdfb8783b2e99a17db4541.jpg" alt="" style="width: 48px;" >
	  <h2>猫眼登录</h2>
  	<el-input v-model="name" placeholder="管理员账号" class="n"></el-input>
    <el-input v-model="psd" placeholder="管理员密码" class="p"></el-input>
    <div class="box">
      <el-button class="box-a" type="danger" @click="submitMessage">提交</el-button>
      <el-button class="box-b" type="danger" @click="resetMessage">重置</el-button>
    </div>
    
</div>
</template>



<script type="text/javascript">
	export default {
	name: "login",
    data() {
      var checkusername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }

          callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
     
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          username: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: checkusername, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$router.push("/info")
            console.log("aaaa")
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style type="text/css" >
	.reg{
		width: 350px;
		margin: auto;
		text-align: center;
		padding-top: 100px;
	}

	.reg h2{
		 
		color: #fa5555;
		margin-left:0px; 
	}

	 .item {
		margin-left:0px; 
	}
	
</style>