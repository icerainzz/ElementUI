<!-- <template>
	<div>
		<h1>登录页面</h1>
		<div><input v-model="$route.params.username" type="text"></div>
		<div><input type="text"></div>
		<div><input @click="login" type="button" value="登录"><input @click="reg" type="button" value="注册"></div>
	</div>
</template>

<script>
	export default {
		name: "login",
		methods: {
			login() {
				this.$router.push("/info")
			},
			reg() {
				this.$router.push({
					name: "reg"
				})
			}
		}
	}
</script>
  -->
<template>
	<div class="reg">
		<img src="../../image/486953bd63fdfb8783b2e99a17db4541.jpg" alt="" style="width: 48px;" >
			
	<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" 
	style="text-align:center" 
	class="demo-ruleForm">
	<h2>登录到猫眼</h2>
  <el-form-item   prop="username" style="margin-left:0px" class="item" >
   <el-input v-model="ruleForm2.username" placeholder="用户名"  ></el-input>
  </el-form-item>
  <el-form-item label="" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="密码" ></el-input>
  </el-form-item>
  

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
  <span style="color: #878D99">注：若没有账号密码请联系管理员</span>

</el-form>
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