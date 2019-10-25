<template>
  <div class="yudilogin">
    <div class="yudilogin-main">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
          <el-button @click="handleSignup">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { getLogin } from "@api/home";
export default {
  name: "yudilogin",
  data() {
    var validateUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        pass: ""
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur", require: true }],
        pass: [{ validator: validatePass, trigger: "blur", require: true }]
      }
    };
  },
  computed: {},
  methods: {
    submitForm(formName) {
      var _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          _this.$store
            .dispatch("getLogin", this.ruleForm)
            .then(res => {
              console.log(res);
              this.$message({
                type: "success",
                message: res.successMessage
              });
              this.$router.push({ path: "/home" });
            })
            .catch(err => {
              switch (err) {
                case 102: {
                  this.$message({
                    type: "error",
                    message: res.errorMessage
                  });
                  break;
                }
                case 103: {
                  this.$message({
                    type: "error",
                    message: res.errorMessage
                  });
                  break;
                }
                default: {
                  this.$message({
                    type: "error",
                    message: "未知的错误"
                  });
                }
              }
            });
          // getLogin(this.ruleForm)
          //   .then(res => {
          //     if (res.status) {
          //       this.$message({
          //         type: "success",
          //         message: res.successMessage
          //       });
          //       this.$store.dispatch("SET_LOGIN");
          //       this.$router.push({ path: "/home" });
          //     } else {
          //       switch (res.errcode) {
          //         case 102: {
          //           this.$message({
          //             type: "error",
          //             message: res.errorMessage
          //           });
          //           break;
          //         }
          //         case 103: {
          //           this.$message({
          //             type: "error",
          //             message: res.errorMessage
          //           });
          //           break;
          //         }
          //         default: {
          //           this.$message({
          //             type: "error",
          //             message: "未知的错误"
          //           });
          //         }
          //       }
          //     }
          //   })
          //   .catch(err => {
          //     console.log(err);
          //   });
        } else {
          return false;
        }
      });
    },
    // 跳转注册页面
    handleSignup() {
      this.$router.push({ path: "/yudisignup" });
    }
  },
  mounted() {
    const Animations = {
      delay: 200,
      distance: "90px",
      origin: "bottom"
    };
    ScrollReveal().reveal(".yudilogin-main");
  }
};
</script>
<style lang="less" scoped>
@import "./yudilogin.less";
</style>