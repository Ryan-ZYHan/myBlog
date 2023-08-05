<template>
    <header class="navbar">
        <!-- 左侧圆形头像框 -->
        <div class="avatar"></div>

        <!-- 右侧导航按钮 -->
        <div class="nav">
        <router-link to="/">首页</router-link>
        <!-- 在这里添加其他导航链接 -->
        </div>

        <!-- 右侧RSS订阅图标 -->
        <div class="rss-icon"></div>

        <!-- 左侧注册和登录按钮 -->
        <div class="auth">
        <button>注册</button>
        <button>登录</button>
        </div>

        <!-- 左侧站内搜索框 -->
        <div class="search">
        <input type="text" placeholder="站内搜索">
        </div>
    </header>
</template>

<style>
/* 样式根据你的需要进行调整 */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
}

.nav {
  display: flex;
}

.rss-icon {
  width: 24px;
  height: 24px;
  /* 在这里添加RSS订阅图标的样式 */
}

.auth {
  display: flex;
}

.search {
  padding-right: 10px;
}

input[type="text"] {
  padding: 5px;
  border: 1px solid #ccc;
}
</style>
