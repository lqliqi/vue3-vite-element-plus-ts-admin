<template>
  <div class="CommonTitle">
    <div class="CommonInerTitle">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
.CommonTitle {
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 24px;
  .CommonInerTitle {
    margin-bottom: 10px;
    border-bottom: 1px solid #e8eaec;
  }
}
</style>
