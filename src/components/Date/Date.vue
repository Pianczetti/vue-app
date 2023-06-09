<template>
  <div>
    {{ relativeTime }}
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/pl";

dayjs.extend(utc);
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
      const fromNow = dayjs(props.date).locale("pl").fromNow();
      relativeTime.value = fromNow;
    });

    return {
      relativeTime,
    };
  },
};
</script>
