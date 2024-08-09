import { createApp } from 'vue';
import './style.less';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
console.log('hello');
createApp(App).use(router).use(createPinia()).use(ElementPlus).mount('#app');
