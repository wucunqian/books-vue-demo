<template>
  <div class="center">
    <h1 class="title-h1">登录 / 注册</h1>
    <div class="logon">
      <div :class="overlaylong">
        <!-- 登录 -->
        <div class="overlaylong-Signin" v-if="disfiex === 0">
          <loginForm />
        </div>
        <div class="overlaylong-Signup" v-if="disfiex === 1">
          <registerForm />
        </div>
      </div>
      <div :class="overlaytitle">
        <div class="overlaytitle-Signin" v-if="disfiex === 0">
          <h2 class="overlaytitleH2">你好,朋友 ！</h2>
          <p class="overlaytitleP">输入您的个人资料，与我们一起开始旅程！</p>
          <div class="buttongohs" @click="Signin">去注册</div>
        </div>
        <div class="overlaytitle-Signup" v-if="disfiex === 1">
          <h2 class="overlaytitleH2">欢迎回来！</h2>
          <p class="overlaytitleP">为了与我们保持联系，请注册您的用户！</p>
          <div class="buttongohs" @click="Signup">去登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ComponentSize, FormInstance, FormRules } from 'element-plus';
import loginForm from './loginForm.vue';
import registerForm from './registerForm.vue';
let overlaylong = ref('overlaylong');
let overlaytitle = ref('overlaytitle');
let disfiex = ref(0);
const Signin = () => {
  overlaylong.value = "overlaylongleft";
  overlaytitle.value = "overlaytitleright";
  setTimeout(() => {
    disfiex.value = 1;
  }, 200);
};
const Signup = () => {
  overlaylong.value = "overlaylongright";
  overlaytitle.value = "overlaytitleleft";
  setTimeout(() => {
    disfiex.value = 0;
  }, 200);
};
</script>

<style lang="less" scoped>
// less 混入公共样式
.mixincss-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

// 背景色
.center {
  width: 100vw;
  height: 100vh;
  background-image: url('login-background.gif');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .mixincss-flex();
  flex-direction: column;
}

// 标题颜色 
.title-h1 {
  font-size: 30px;
  color: #ccc;
}

.logon {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  margin-top: 20px;
  display: flex;
  background: -webkit-linear-gradient(right, #4284db, #29eac4);
}

.overlaylong {
  border-radius: 10px 0 0 10px;
  padding: 20px;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  background-color: #fff;
  .mixincss-flex();
}

.overlaylongleft {
  border-radius: 0px 10px 10px 0px;
  width: 50%;
  height: 100%;
  background-color: #fff;
  transform: translateX(100%);
  transition: transform 0.6s ease-in-out;
  .mixincss-flex();
}

.overlaylongright {
  border-radius: 10px 0 0 10px;
  width: 50%;
  height: 100%;
  background-color: #fff;
  transform: translateX(0%);
  transition: transform 0.6s ease-in-out;
  .mixincss-flex();
}

.overlaytitle {
  border-radius: 0px 10px 10px 0px;
  width: 50%;
  height: 100%;
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
  .mixincss-flex();
}

.overlaytitleH2 {
  padding: 20px;
  font-size: 30px;
  color: #fff;
  margin-top: 20px;
}

.overlaytitleP {
  font-size: 15px;
  padding: 20px;
  color: #fff;
  margin-top: 20px;
}

// 卡片右
.overlaytitleleft {
  border-radius: 0px 10px 10px 0px;
  width: 50%;
  height: 100%;
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
  .mixincss-flex();
  transform: translateX(0%);
  transition: transform 0.6s ease-in-out;
}

// 卡片左
.overlaytitleright {
  border-radius: 0px 10px 10px 0px;
  width: 50%;
  height: 100%;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  .mixincss-flex();
  transform: translateX(-100%);
  transition: transform 0.6s ease-in-out;
}

.overlaytitle-Signin,
.overlaytitle-Signup,
.overlaylong-Signin,
.overlaylong-Signup {
  .mixincss-flex();
  flex-direction: column;
}

.buttongohs {
  width: 180px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid #fff;
  color: #fff;
  font-size: 15px;
  text-align: center;
  line-height: 40px;
  margin-top: 40px;
}

.overlaylongH2 {
  font-size: 25px;
  color: black;
}
</style>