<template>
  <div class="overlaylong-Signin">
    <h2 class="overlaylongH2">登录</h2>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" :size="formSize" status-icon>
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" placeholder="密码" />
      </el-form-item>
      <h3>忘记密码?</h3>
      <el-button class="inupbutton" @click="submitForm(ruleFormRef)">登录</el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { ComponentSize, FormInstance, FormRules } from 'element-plus';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { _loginapi } from '../../api/loginapi';
const router = useRouter();
const formSize = ref<ComponentSize>('default');
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  username: '小吴',
  password: '123456'
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
      _loginapi(ruleForm).then(res => {
        ElMessage({
          grouping: true,
          type: 'success',
          message: res.data.message
        });
        router.push('/homepage');
      }).catch(err => {
        ElMessage({
          grouping: true,
          type: 'warning',
          message: err.response.data.message
        });
      });
    } else {
      console.log(fields);
    }
  });
};
</script>

<style scoped lang="less">
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