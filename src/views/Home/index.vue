<template>
  <div class="Home">
    <el-table :data="tableData">
      <el-table-column prop="date" label="Date" width="140"> </el-table-column>
      <el-table-column prop="name" label="Name" width="120"> </el-table-column>
      <el-table-column prop="address" label="Address"> </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles'
};

const tableData = ref(Array(20).fill(item));
</script>
