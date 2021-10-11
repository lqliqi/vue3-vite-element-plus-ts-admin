<template>
  <div class="CommonTable">
    <el-table :data="list" v-loading="loading" style="width: 100%">
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
import { ref, defineEmits, watch, defineExpose } from 'vue'

const props = defineProps({
  queryObject: Object,
  totalItemCount: Number,
  list: Array,
  loading: Boolean
})
watch((props as any).loading, (loading) => {
  console.log('watch loading: ', loading)
})
watch(
  (props as any).queryObject.pageSize,
  (pageSize) => {
    console.log('watch pageSize: ', pageSize)
  },
  { immediate: true, deep: true }
)

const currentPage2 = ref(5)
const emit = defineEmits(['update', 'changeLoadingStatus'])

async function search() {
  emit('changeLoadingStatus', true)
  console.log('search...')
  emit('update')
  emit('changeLoadingStatus', false)
}
// eslint-disable-next-line no-unused-vars
const searchForPageOne = () => {
  console.log('searchForPageOne: ')
  ;(props as any).queryObject.pageNumber = 1
  search()
}
// 将方法、变量暴露给父组件使用，父组见才可通过ref API拿到子组件暴露的数据
defineExpose({
  searchForPageOne
})
// eslint-disable-next-line no-unused-vars

const handleSizeChange = (val: any) => {
  console.log(`每页数据${val}条`)
  ;(props as any).queryObject.pageSize = val
  search()
  emit('update')
}
const handleCurrentChange = (val: any) => {
  console.log(`当前页码${val}`)
  ;(props as any).queryObject.pageNumber = val
  search()
  emit('update')
}
search()
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
