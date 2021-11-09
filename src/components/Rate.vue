<template>
  <div :style="fontstyle">
    <slot></slot>
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontWidth">
        <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from 'vue';

// 平分宽度
const props: any = defineProps({
  modelValue: Number,
  theme: { type: String, default: 'orange' }
});
const width = ref(props.value);
const themeObj = {
  black: '#00',
  white: '#fff',
  red: '#f5222d',
  orange: '#fa541c',
  yellow: '#fadb14',
  green: '#73d13d',
  blue: '#40a9ff'
} as any;

function mouseOver(i: number) {
  width.value = i;
}
function mouseOut() {
  width.value = props.value;
}
const emits = defineEmits(['update:modelValue']); // 定义emits
function onRate(num: number) {
  emits('update:modelValue', num);
}
const fontWidth = computed(() => `width:${width.value}em;`);

const fontstyle = computed(() => {
  return `color:${themeObj[props.theme]};`;
});
</script>
<style lang="less" scoped>
.rate {
  position: relative;
  display: inline-block;
  .hollow {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
  }
}
</style>
