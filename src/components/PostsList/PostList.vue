<template>
    <ul>
        <li v-for="post in posts" >
            <Post
                :id="post.postId"
                :author="post.author"
                :date="post.date"
                :description="post.postDescription"
                :likes="post.likes"
                :kudosProp="post.kudos"
                :group="post.groupId"
            />
        </li>
    </ul>


</template>

<script>
import Post from '../Post/Post.vue'
import { defineComponent } from 'vue';

export default {
    components: {
    Post
},
    props: {
        posts: {
            type: Array,
            required: true
        },
        // kudoses: Array
    }
}
</script>

<style>


</style>