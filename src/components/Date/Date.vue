<template>
  <div>
    {{ relativeTime }}
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default {
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const relativeTime = ref("");

    watchEffect(() => {
      const fromNow = dayjs(props.date).fromNow();
      relativeTime.value = fromNow;
    });

    return {
      relativeTime,
    };
  },
};
</script>
