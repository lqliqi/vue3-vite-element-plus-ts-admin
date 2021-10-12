<script setup lang="ts"></script>

<template>
  <el-header>
    <el-dropdown>
      <i class="el-icon-setting"></i>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span>李菜菜</span>
  </el-header>
</template>

<style scoped lang="less">
.el-header {
  color: var(--el-text-color-primary);
  font-size: 12px;
  line-height: 60px;
  text-align: right;
  background-color: #b3c0d1;
  .el-icon-setting {
    margin-right: 15px;
  }
}
</style>
