<template>
  <div class="Transition">
    Transition
    <div class="box" :style="{ width: width + 'px' }"></div>
    <button @click="change">click</button>

    <br />
    <transition name="fade">
      <h2 v-if="showTitle">你好啊 vue3动画</h2>
    </transition>
    <button @click="toggle">v-if 效果</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const showTitle = ref(true);
const width = ref(100);
function change() {
  width.value += 100;
}
function toggle() {
  showTitle.value = !showTitle.value;
}
</script>
<style lang="less" scoped>
.Transition {
  display: block;
  .box {
    width: 200px;
    height: 100px;
    position: relative;
    background-color: forestgreen;
    // transition: width 1s linear;
    animation: move 2s linear infinite;
  }
}
@keyframes move {
  0% {
    left: 0px;
  }
  50% {
    left: 200px;
  }
  100% {
    left: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s linear;
}

.fade-enter-from,
.fade-enter-to {
  opacity: 0;
}
</style>
