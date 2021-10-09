<template>
  <div class="CommonTable">
    <el-table :data="list" style="width: 100%">
      <slot></slot>
    </el-table>
    <div class="demo-pagination-block">
      <el-pagination
        v-model="currentPage2"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="queryObject?.pageSize"
        :current-page="queryObject?.pageNumber"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalItemCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits, watch } from 'vue'

const props = defineProps({
  queryObject: Object,
  totalItemCount: Number,
  list: Array
})
watch(
  (props as any).queryObject.pageSize,
  (pageSize) => {
    console.log('watch pageSize: ', pageSize)
  },
  { immediate: true, deep: true }
)
const currentPage2 = ref(5)

const emit = defineEmits(['update'])
const handleSizeChange = (val: any) => {
  console.log(`每页数据${val}条`)
  ;(props as any).queryObject.pageSize = val
  emit('update')
}
const handleCurrentChange = (val: any) => {
  console.log(`当前页码${val}`)
  ;(props as any).queryObject.pageNumber = val
  emit('update')
}
</script>
<style lang="less" scoped>
.CommonTable {
  display: block;
  .demo-pagination-block {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
