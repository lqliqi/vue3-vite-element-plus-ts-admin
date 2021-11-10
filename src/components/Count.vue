<template>
  <div class="Count">
    <p>count: {{ count }}</p>
    <div>double 值 {{ double }}</div>
    <button @click="add">同步累加器</button>
    <br />
    <br />
    <button @click="asyncAdd">异步累加器</button>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const count = computed(() => store.state.count);
function add() {
  store.commit('add');
}
function asyncAdd() {
  store.dispatch('asyncAdd');
}
const double = computed(() => store.getters.double);
</script>
<style lang="less" scoped>
.Count {
  display: block;
}
</style>
