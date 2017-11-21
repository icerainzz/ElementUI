<!-- <template>
	<div>
	
		<div><input v-model="username" type="text"></div>
		<div><input type="text"></div>
		<div><input @click="reg" type="button" value="注册"></div>
	</div>
</template>
<script>
	export default {
		name: "reg",
		data() {
			return {
				username: "zhangsan"
			}
		},
		methods: {
			reg() {
				this.$router.push({
					name: "login",
					params: {
						username: this.username
					}
				})
			}
		}
	}
</script> -->

<template>
	<div class="reg">
			<h1>用户注册</h1>
	<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
   <el-input v-model="ruleForm2.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script type="text/javascript">
	export default {
	name: "reg",
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
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
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
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
            alert('submit!');
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
		width: 500px;
	    
	}

	.reg{
		text-align: center;
		color: #409EFF
	}
	
</style>