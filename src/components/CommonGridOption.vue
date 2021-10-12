<template>
  <el-col class="CommonGridOption" :md="md" :lg="lg">
    <div class="CommonGridOptionLabelWrapper">
      <div class="CommonGridOptionLabel" :class="{ CommonGridOptionModified: valueModified }">
        {{ label }}
      </div>
      <div class="CommonGridOptionContent">
        <div class="CommonGridOptionInerContent"><slot /></div>
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
  .CommonGridOptionLabelWrapper {
    display: flex;
    .CommonGridOptionContent {
      flex: 1;
      .CommonGridOptionInerContent {
        word-break: break-all;
      }
    }
  }
  .CommonGridOptionLabel {
    width: 120px;
    padding-right: 10px;
    font-weight: bold;
    text-align: right;
    &.CommonGridOptionModified {
      color: red;
    }
  }
}
</style>
