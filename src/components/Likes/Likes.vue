<template>
  <div>
    <a-tooltip title="Like">
      <HeartOutlined :class="{ liked: liked }" @click="handleLike" />
    </a-tooltip>
    <span class="like-count">{{ count }}</span>
  </div>
</template>

<script>
import { ref } from "vue";
import { HeartOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    HeartOutlined,
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
.liked {
  color: red;
}
.like-count {
  margin-left: 8px;
}
</style>
