<template>
  <div class="login-container">
    <div class="carousel-form">
      <el-carousel :interval="5000" arrow="always" height="380px" @change="getid">
        <el-carousel-item v-for="item in imagebox" :key="item.id">
          <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="login_form">
      <el-form-item>
        <div class="title-container">
          <h3 class="title">欢迎使用XXX系统</h3>
        </div>
      </el-form-item>
      <el-input
          v-model="user.userName"
          maxlength="20"
          placeholder="用户名:"
          show-word-limit
          type="text"
      />
      <div style="margin: 30px 0" />
      <el-input
          v-model="user.userPassword"
          maxlength="20"
          placeholder="密码:"
          show-word-limit
          type="text"
      />
      <div style="margin: 30px 0" />
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:5px;" @click="doLogin">登录</el-button>
      <div style="margin: 30px 0" />
      <div>
        <router-link to="https://www.baidu.com/" >请联系我们</router-link>
      </div>
    </div>
  </div>
</template>

<script>


import axios from "axios";

export default {
  name: "BankLogin",
  data: function () {
    return {
      id: 0,
      imagebox:
          [
            {id: 0, idView: require('@/assets/imagebox/1.jpg')},
            {id: 1, idView: require('@/assets/imagebox/2.jpg')},
            {id: 2, idView: require('@/assets/imagebox/3.jpg')},
            {id: 3, idView: require('@/assets/imagebox/4.jpg')}
          ],
      image: {id: 0, idView: require('@/assets/imagebox/1.jpg')},
      screenWidth: 0,
      user: {
        userName: "",
        userPassword: ""
      }
    }
  },
  methods: {
    doLogin() {
      if (!this.user.userName) {
        this.$message.error("请输入用户名!");
        return
      }
      if (!this.user.userPassword) {
        this.$message.error("请输入密码!");
        return
      } else {
        axios.post("/api/user/login", {
              uName: this.user.userName,
              uPassword: this.user.userPassword
            }
        ).then(res => {
          console.log(res.data)
          if(res.data["code"] === 0) {
            this.$router.push("/home")
          }else{
            alert("用户名或者密码错误")
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.login-container
{
  height: 445px;
  width: 1200px;
  margin: 130px auto 0px;
  background-color: #eaecf0;
  -webkit-appearance: none;
  border-radius: 10px;
}
.carousel-form
{
  width: 650px;
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 10px;
  /*浮动*/
  float: left;
}
.login_form {
  width: 400px;
  height: 360px;
  background-color: white;
  float: left;
  margin: 30px 0px 0px 40px;
  /*// 边框圆角*/
  border-radius: 10px;
  padding: 10px 25px;

  /*// 边框*/
  /*// border: 2px solid greenyellow;*/
}
.title-container {
  position: relative;
}
.title {
  font-size: 24px;
  color: black;
  margin: 20px auto 40px auto;
  /*// 居中*/
  text-align: center;
  font-weight: bold;
}
.svg-container {
  /*// 内边距*/
  padding: 6px 5px 6px 15px;
  /*// 颜色*/
  color: #889aa4;
  /*// 居中*/
  vertical-align: middle;
  /*// 宽度*/
  width: 30px;
  /*// 显示*/
  display: inline-block;
}
.show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: #889aa4;
  cursor: pointer;
  user-select: none;
}.backgroundimage{

 }
</style>
