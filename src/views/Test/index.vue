<template>
  <div class="Test">
    <h1>用来展示一些组件的用法</h1>
    <CommonSearchForm
      :onSearchButtonClicked="onSearchButtonClicked"
      :onResetButtonClicked="onResetButtonClicked"
      :onExportButtonClicked="onExportButtonClicked"
    >
      <el-form-item label="姓名">
        <el-input v-model="queryObject.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="专业">
        <el-select v-model="queryObject.professional" placeholder="请选择专业">
          <el-option label="JS" value="JS"></el-option>
          <el-option label="Go" value="Go"></el-option>
        </el-select>
      </el-form-item>
    </CommonSearchForm>
    <CommonTable
      ref="table"
      :queryObject="queryObject"
      :totalItemCount="totalItemCount"
      :list="tableData"
      @update="update"
    >
      <el-table-column prop="date" label="Date" width="200" />
      <el-table-column prop="name" label="Name" width="200" />
      <el-table-column prop="state" label="State" width="200" />
      <el-table-column prop="city" label="City" width="200" />
      <el-table-column prop="address" label="Address" width="600" />
      <el-table-column prop="zip" label="Zip" width="200" />
      <el-table-column fixed="right" label="Operations" width="200">
        <template #default>
          <el-button type="text" size="small" @click="handleClick('Detail')">Detail</el-button>
          <el-button type="text" size="small" @click="handleClick('Edit')">Edit</el-button>
        </template>
      </el-table-column>
    </CommonTable>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch } from 'vue'
import CommonSearchForm from '@/components/CommonSearchForm.vue'
import CommonTable from '@/components/CommonTable.vue'

const getDefaultQueryObject = function () {
  return {
    pageNumber: 1,
    pageSize: 10,
    professional: '',
    name: ''
  } as Record<string, any>
}
const queryObject = reactive(getDefaultQueryObject())
console.log('queryObject ', queryObject)

const totalItemCount = 6
const tableData = reactive([
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  }
])
function handleClick(control: string) {
  console.log('click: ', control)
}
function update() {
  console.log('update')
  tableData.length = 0 // 清空原数组
  const newArr = []
  for (let i = 0; i < queryObject.pageSize; i += 1) {
    newArr.push({
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Home'
    })
  }
  tableData.push(...newArr) // 解构然后push进去
}
watch(
  () => tableData,
  (count, prevCount) => {
    console.log('tableData count ', count)
    console.log('tableData prevCount ', prevCount)
  }
)
function onSearchButtonClicked() {
  console.log('onSearchButtonClicked queryObject: ', queryObject)
  update()
}
function onResetButtonClicked() {
  // 默认情况下修改对象, 界面不会自动更,如果想更新, 可以通过对象属性重新赋值的方式
  Object.keys(getDefaultQueryObject()).forEach((key) => {
    queryObject[key] = getDefaultQueryObject()[key]
  })
  update()
}
function onExportButtonClicked() {
  console.log('onExportButtonClicked')
}
</script>
