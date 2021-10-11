<template>
  <div class="Test">
    <h1>组件使用</h1>
    <el-tabs v-model="activeTab">
      <el-tab-pane
        v-for="(item, index) in tabList"
        :label="item"
        :key="index"
        :name="item"
      ></el-tab-pane>
    </el-tabs>
    <div v-show="activeTab === '列表'">
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
        :loading="tableLoading"
        @update="update"
        @changeLoadingStatus="changeLoadingStatus"
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
    <div v-show="activeTab === '信息'">
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
    <div v-show="activeTab === '创建'">
      <CommonFileUploader></CommonFileUploader>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, ref } from 'vue'
import CommonFileUploader from '@/components/CommonFileUploader.vue'
import CommonSearchForm from '@/components/CommonSearchForm.vue'
import CommonTable from '@/components/CommonTable.vue'
import CommonGrid from '@/components/CommonGrid.vue'
import CommonTitle from '@/components/CommonTitle.vue'
import CommonCard from '@/components/CommonCard.vue'
import CommonGridOption from '@/components/CommonGridOption.vue'

const activeTab = ref('列表')
const tabList = ['列表', '信息', '创建']
const tableLoading = ref(true)
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
// 子组件ref
const table = ref('table')
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
// 修改loading 状态
function changeLoadingStatus(value: boolean) {
  tableLoading.value = value
}
async function update() {
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
  setTimeout(() => {
    tableLoading.value = false
  }, 3000)
  console.log('tableLoading.value', tableLoading.value)
  // eslint-disable-next-line no-return-await
}
console.log('update', update())

watch(
  () => tableData,
  (count, prevCount) => {
    console.log('tableData count ', count)
    console.log('tableData prevCount ', prevCount)
  }
)
function onSearchButtonClicked() {
  ;(table.value as any).searchForPageOne()
}
function onResetButtonClicked() {
  // 默认情况下修改对象, 界面不会自动更,如果想更新, 可以通过对象属性重新赋值的方式
  Object.keys(getDefaultQueryObject()).forEach((key) => {
    queryObject[key] = getDefaultQueryObject()[key]
  })
  ;(table.value as any).searchForPageOne()
}
function onExportButtonClicked() {
  console.log('onExportButtonClicked')
}
</script>
