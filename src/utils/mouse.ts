import { ref, onMounted, onUnmounted, Ref } from 'vue';

export default function useMouse(): { x: Ref<number>; y: Ref<number> } {
  const x: Ref<number> = ref(0);
  const y: Ref<number> = ref(0);
  function update(e: { pageX: number; pageY: number }) {
    x.value = e.pageX;
    y.value = e.pageY;
  }
  onMounted(() => {
    window.addEventListener('mousemove', update);
  });
  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });
  return { x, y };
}
