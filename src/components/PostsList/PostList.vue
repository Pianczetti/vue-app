<template>
  <ul>
    <li v-for="post in posts" :key="post.postId">
      <Post
        :id="post.postId"
        :author="post.author"
        :date="post.date"
        :description="post.postDescription"
        :likes="post.likes"
        :kudosId="post.kudosId"
        :kudosTarget="post.targetPersonId"
        :group="post.groupId"
      />
      <Comment
        :style="{
          border: '1px solid #EEEEEE',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        }"
      />
    </li>
  </ul>
</template>

<script>
import Post from "../Post/Post.vue";
import Comment from "../Comment/Comment.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostList",
  components: {
    Post,
    Comment,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    person: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style></style>
