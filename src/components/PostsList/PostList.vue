<template>
  <ul>
    <li v-for="post in posts">
      <Post
        :id="post.postId"
        :author="post.author"
        :date="post.date"
        :description="post.postDescription"
        :likes="post.likes"
        :kudosProp="post.kudos"
        :group="post.groupId"
        :activePerson="person"
      />
      <Comment
        :activePerson="person"
        :style="{
          border: '1px solid #EEEEEE',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        }"
      />
      <!-- <AntComment /> -->
    </li>
  </ul>
</template>

<script>
import Post from "../Post/Post.vue";
import Comment from "../Comment/Comment.vue";
import AntComment from "../Comment/AntComment.vue";
import { defineComponent } from "vue";

export default {
  components: {
    Post,
    Comment,
    AntComment,
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
    // kudoses: Array
  },
};
</script>

<style></style>
