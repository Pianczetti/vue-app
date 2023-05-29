<template>
  <div class="three-dots-icon">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ThreeDots",
  setup() {
    const isPopoverOpen = ref(false);
    const selectedPosition = ref("");

    const togglePopover = () => {
      isPopoverOpen.value = !isPopoverOpen.value;
    };

    const selectPosition = position => {
      selectedPosition.value = position;
      isPopoverOpen.value = false;
    };

    return {
      isPopoverOpen,
      selectedPosition,
      togglePopover,
      selectPosition,
    };
  },
};
</script>

<style scoped lang="scss">
.three-dots-icon {
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;

  .dot {
    position: absolute;
    top: 6px;
    left: 10px;
    width: 3px;
    height: 3px;
    background-color: #a8996f;
    border-radius: 50%;

    &:nth-child(2) {
      top: 12px;
    }

    &:nth-child(3) {
      top: 18px;
    }
  }
}
</style>
