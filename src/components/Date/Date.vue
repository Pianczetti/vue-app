<template>
  <a-typography :style="dateStyles" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </a-typography>
</template>

<script>
import { Typography as ATypography } from "ant-design-vue";
import { computed } from "vue";

export default {
  components: {
    ATypography,
  },
  inheritAttrs: false,
  setup(props) {
    const dateStyles = computed(() => ({
      color: props.theme.gray,
      fontWeight: props.theme.normal,
      fontSize: props.theme.s,
    }));

    return {
      dateStyles,
    };
  },
  props: {
    theme: {
      type: Object,
      default: () => ({
        gray: "gray",
        normal: "normal",
        s: "14px",
      }),
    },
  },
};
</script>
