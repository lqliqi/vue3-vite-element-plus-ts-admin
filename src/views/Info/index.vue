<template>
  <div class="Info">
    <CommonCard>
      <CommonTitle> 详情信息 </CommonTitle>
      <CommonGrid>
        <CommonGridOption label="姓名" :expand="false" :valueModified="true">
          李菜菜</CommonGridOption
        >
        <CommonGridOption label="性别" :expand="false"> 男</CommonGridOption>
        <CommonGridOption label="姓名" :expand="false"> 李菜菜</CommonGridOption>
        <CommonGridOption label="性别" :expand="false"> 男</CommonGridOption>
        <CommonGridOption label="姓名" :expand="false"> 李菜菜</CommonGridOption>
        <CommonGridOption label="性别" :expand="false"> 男</CommonGridOption>
      </CommonGrid>
    </CommonCard>
  </div>
</template>
<script setup lang="ts">
import CommonGrid from '@/components/CommonGrid.vue'
import CommonTitle from '@/components/CommonTitle.vue'
import CommonCard from '@/components/CommonCard.vue'
import CommonGridOption from '@/components/CommonGridOption.vue'
</script>
<style lang="less" scoped>
.Info {
  display: block;
}
</style>
