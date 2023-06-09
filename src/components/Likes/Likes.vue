<template>
  <div>
    <a-tooltip title="Like">
      <HeartFilled
        :class="{ liked: liked, 'not-liked': !liked }"
        @click="handleLike"
      />
    </a-tooltip>
    <span class="like-count">{{ count }}</span>
  </div>
</template>

<script>
import { ref } from "vue";
import { HeartFilled } from "@ant-design/icons-vue";

export default {
  components: {
    HeartFilled,
  },
  props: {
    likes: { type: Number },
  },
  setup(props) {
    const count = ref(props.likes);
    const liked = ref(false);

    const handleLike = () => {
      count.value += liked.value ? -1 : 1;
      liked.value = !liked.value;
    };

    return {
      count,
      liked,
      handleLike,
    };
  },
};
</script>

<style scoped>
.not-liked {
  color: #eeeeee;
}
.liked,
.liked ~ .like-count {
  color: red;
}
.like-count {
  margin-left: 8px;
  font-size: 12px;
  color: #a8996f;
}
</style>
