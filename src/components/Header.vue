<script setup lang="ts"></script>

<template>
  <el-header style="font-size: 12px; text-align: right">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
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

<style scoped>
.el-header {
  color: var(--el-text-color-primary);
  line-height: 60px;
  background-color: #b3c0d1;
}
</style>
