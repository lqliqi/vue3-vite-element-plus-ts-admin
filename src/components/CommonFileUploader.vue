<template>
  <div class="CommonFileUploader">
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog v-model="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
let dialogImageUrl = ''
let dialogVisible = false
function handleRemove(file: any, fileList: any) {
  console.log(file, fileList)
}
function handlePictureCardPreview(file: { url: string }) {
  dialogImageUrl = file.url
  dialogVisible = true
}
</script>
<style lang="less" scoped>
.CommonFileUploader {
  display: block;
}
</style>
