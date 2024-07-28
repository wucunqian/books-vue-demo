<template>
  <div class="overlaylong-Signin">
    <h2 class="overlaylongH2">注册账户</h2>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" :size="formSize" status-icon>
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" placeholder="密码" />
      </el-form-item>
      <el-button class="inupbutton" @click="submitForm(ruleFormRef)">注册</el-button>
    </el-form>
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
</script>

<style lang="less" scoped>
.overlaylong-Signin {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.overlaylongH2 {
  font-size: 25px;
  color: black;
  margin: 20px;
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