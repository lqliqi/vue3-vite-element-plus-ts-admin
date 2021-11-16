import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  // setup(props, { slots }) {
  //   return () =>
  //     h(
  //       `h${props.level}`, // 标签名
  //       {}, // prop 或 attribute
  //       slots.default() // 子节点
  //     );
  // }

  setup(props, { slots }) {
    const tag = `h${props.level}`;
    return () => <tag>{slots.default()}</tag>;
  }
});
