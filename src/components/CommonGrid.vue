<template>
  <div class="CommonGrid">
    <el-row :gutter="20">
      <slot></slot>
    </el-row>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
.CommonGrid {
  display: block;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
