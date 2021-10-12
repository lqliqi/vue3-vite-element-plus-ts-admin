<template>
  <el-col class="CommonGridOption" :md="md" :lg="lg">
    <div style="display: flex">
      <div
        class="CommonGridOptionLabel"
        :class="{ CommonGridOptionModified: valueModified }"
        style="width: 120px; padding-right: 10px; font-weight: bold; text-align: right"
      >
        {{ label }}
      </div>
      <div class="CommonGridOptionContent" style="flex: 1">
        <div style="word-break: break-all"><slot /></div>
      </div>
    </div>
  </el-col>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  label: String,
  valueModified: Boolean,
  expand: Boolean
});
const md = ref(12);
const lg = ref(8);
if (props.expand) {
  md.value = 24;
  lg.value = 24;
}
</script>
<style lang="less" scoped>
.CommonGridOption {
  margin-bottom: 22px;
  .CommonGridOptionLabel {
    &.CommonGridOptionModified {
      color: red;
    }
  }
}
</style>
