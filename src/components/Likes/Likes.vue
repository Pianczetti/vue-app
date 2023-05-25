<template>
  <div>
    <a-tooltip title="Like">
      <heart-outlined :class="{ liked: liked }" @click="handleLike" />
    </a-tooltip>
    <span class="like-count">{{ count }}</span>
  </div>
</template>

<script>
import { HeartOutlined } from "@ant-design/icons-vue";
export default {
  props: {
    likes: { type: Number },
  },
  components: {
    HeartOutlined,
  },
  data() {
    return {
      count: this.likes,
      liked: false,
    };
  },
  methods: {
    handleLike() {
      this.count += this.liked ? -1 : 1;
      this.liked = !this.liked;
    },
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
