<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="less">
html,
body,
#app {
  box-sizing: border-box;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
