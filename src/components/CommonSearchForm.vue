<template>
  <div class="CommonSearchForm">
    <el-form :inline="true" class="demo-form-inline">
      <div v-if="!collapsed">
        <slot></slot>
      </div>
      <el-form-item class="text-right">
        <el-button
          v-if="onSearchButtonClicked"
          class="m-right10"
          type="primary"
          @click="onSearchButtonClicked"
          >查询</el-button
        >
        <el-button v-if="onResetButtonClicked" class="m-right10" @click="onResetButtonClicked"
          >重置</el-button
        >
        <el-button
          v-if="onExportButtonClicked"
          class="m-right10"
          type="success"
          @click="onExportButtonClicked"
          >导出</el-button
        >
        <el-button :icon="collapseButtonIcon" class="m-right10" @click="toggle">
          {{ collapseButtonText }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

defineProps({
  onSearchButtonClicked: Function,
  onResetButtonClicked: Function,
  onExportButtonClicked: Function
})
const collapsed = ref(false)
function toggle() {
  collapsed.value = !collapsed.value
}
const collapseButtonText = computed(() => (collapsed.value ? '展开' : '收起'))
const collapseButtonIcon = computed(() =>
  collapsed.value ? 'el-icon-arrow-down' : 'el-icon-arrow-up'
)
</script>
<style scoped lang="less">
.CommonSearchForm {
  .text-right {
    display: block;
    margin-right: 0;
    text-align: right;
  }
  .m-right10 {
    margin-right: 10px;
  }
}
</style>
