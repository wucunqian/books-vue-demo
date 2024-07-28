<template>
  <div class="center">
    <h1 class="title-h1">登录 / 注册</h1>
    <div class="logon">
      <div :class="overlaylong">
        <div class="overlaylong-Signin" v-if="disfiex == 0">
          <h2 class="overlaylongH2">登录</h2>
          <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="auto" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="" prop="username">
              <el-input v-model="ruleForm.username" placeholder="用户名" />
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input v-model="ruleForm.password" placeholder="密码" />
            </el-form-item>
            <h3>忘记密码?</h3>
            <el-button class="inupbutton" @click="submitForm(ruleFormRef)">登录</el-button>
          </el-form>
        </div>
        <div class="overlaylong-Signup" v-if="disfiex == 1">
          <h2 class="overlaylongH2">注册账户</h2>
          <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="auto" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="" prop="username">
              <el-input v-model="ruleForm.username" placeholder="用户名" />
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input v-model="ruleForm.password" placeholder="密码" />
            </el-form-item>
            <el-button class="inupbutton" @click="submitForm(ruleFormRef)">注册</el-button>
          </el-form>
        </div>
      </div>
      <div :class="overlaytitle">
        <div class="overlaytitle-Signin" v-if="disfiex == 0">
          <h2 class="overlaytitleH2">你好,朋友 ！</h2>
          <p class="overlaytitleP">输入您的个人资料，与我们一起开始旅程！</p>
          <div class="buttongohs" @click="Signin">注册</div>
        </div>
        <div class="overlaytitle-Signup" v-if="disfiex == 1">
          <h2 class="overlaytitleH2">欢迎回来！</h2>
          <p class="overlaytitleP">为了与我们保持联系，请注册您的用户！</p>
          <div class="buttongohs" @click="Signup">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { ComponentSize, FormInstance, FormRules } from 'element-plus';
import { _registerapi } from '@/api/loginapi.ts';
interface RuleForm {
  username: string;
  password: string;
}
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
const formSize = ref<ComponentSize>('default');
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  username: '',
  password: ''
});
const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入您的用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入您的密码', trigger: 'blur' },
    { min: 6, max: 8, message: '密码长度为6到8', trigger: 'blur' },
  ]
});
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      _registerapi(ruleForm).then(res => {
        console.log(res);
      });
    } else {
      console.log(fields);
    }
  });
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style scoped>
/* 背景色 */
.center {
  width: 100vw;
  height: 100vh;
  background-image: url('login-background.gif');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

/* 标题颜色 */
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlaylongleft {
  border-radius: 0px 10px 10px 0px;
  width: 50%;
  height: 100%;
  background-color: #fff;
  transform: translateX(100%);
  transition: transform 0.6s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlaylongright {
  border-radius: 10px 0 0 10px;
  width: 50%;
  height: 100%;
  background-color: #fff;
  transform: translateX(0%);
  transition: transform 0.6s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlaytitle {
  border-radius: 0px 10px 10px 0px;
  width: 50%;
  height: 100%;
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
  display: flex;
  align-items: center;
  justify-content: center;
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

/* 卡片右 */
.overlaytitleleft {
  border-radius: 0px 10px 10px 0px;
  width: 50%;
  height: 100%;
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(0%);
  transition: transform 0.6s ease-in-out;
}

/* 卡片左 */
.overlaytitleright {
  border-radius: 0px 10px 10px 0px;
  width: 50%;
  height: 100%;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-100%);
  transition: transform 0.6s ease-in-out;
}

.overlaytitle-Signin {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.overlaytitle-Signup {
  display: flex;
  align-items: center;
  justify-content: center;
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

.demo-ruleForm {
  margin: 20px;
}

.overlaylong-Signin {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.overlaylong-Signup {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h3 {
  font-size: 10px;
  margin-top: 10px;
  cursor: pointer;
}

.inupbutton {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  border: none;
  width: 180px;
  height: 40px;
  border-radius: 50px;
  font-size: 15px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  margin-top: 30px;
}

.el-input {
  width: 260px;
}
</style>