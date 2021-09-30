<template>
  <div class="Layout">
    <el-container class="container">
      <el-aside class="aside">
        <div class="logo"></div>
        <el-menu :default-openeds="['1', '3']">
          <el-sub-menu index="1">
            <template #title><i class="el-icon-message"></i>Navigator One</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">Option 1</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title><i class="el-icon-setting"></i>系统管理</template>
            <el-menu-item-group>
              <el-menu-item index="3-1">修改密码</el-menu-item>
              <el-menu-item index="3-2">风格配置</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container class="is-vertical">
        <Header />
        <el-main class="main">
          <router-view />
        </el-main>
        <Footer />
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="less" scoped>
.Layout {
  min-height: 100vh;
  background-color: #fff;
  .container {
    height: 100vh;
    .el-aside {
      color: var(--el-text-color-primary);
    }
    .aside {
      width: 200px !important;
      overflow: hidden;
      overflow: -moz-scrollbars-none;
      overflow-y: auto;
      -ms-overflow-style: none;
      .logo {
        display: block;
        width: 100%;
        height: 60px;
        background: url('@/assets/images/logo.png') no-repeat;
        background-position: center;
        background-size: 90%;
      }
    }
    .el-header {
      color: var(--el-text-color-primary);
      line-height: 60px;
      background-color: #b3c0d1;
    }
    .main {
      height: calc(100vh - 60px);
      padding: 10px;
      overflow: auto;
    }
  }
}
</style>
