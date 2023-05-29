<!-- <template>
  <a-typography :style="headingStyles" v-bind="$attrs" v-on="$listeners">
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
    const headingStyles = computed(() => ({
      color: props.theme.black,
      fontWeight: props.theme.bold,
      fontSize: props.theme.medium,
      ...(props.big && {
        fontSize: props.theme.large,
      }),
      ...(props.form && {
        flex: "1",
        marginLeft: "18px",
        fontSize: props.theme.small,
        color: props.theme.darkgray,
        fontWeight: props.theme.semibold,
        textTransform: "uppercase",
      }),
      ...(props.kudos && {
        color: props.theme.darkgray,
        fontSize: props.theme.small,
        fontWeight: props.theme.bold,
        margin: "0",
      }),
    }));

    return {
      headingStyles,
    };
  },
  props: {
    theme: {
      type: Object,
      default: () => ({
        black: "black",
        bold: "bold",
        medium: "20px",
        large: "24px",
        small: "14px",
        darkgray: "darkgray",
        semibold: "600",
      }),
    },
    big: Boolean,
    form: Boolean,
    kudos: Boolean,
  },
};
</script> -->
