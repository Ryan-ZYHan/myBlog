// app.js

import { createApp } from 'vue';
import Navbar from './components/Navbar.vue';

// 创建一个Vue应用实例
const app = createApp({});

// 将Navbar组件全局注册
app.component('Navbar', Navbar);

// 挂载Vue应用实例到页面
app.mount('#app');

  