<template>
  <div class="wrapper">
    <div class="head">
      <button class="btn w-100" @click="showModal">
        <Person />
      </button>
      <a-modal v-model:visible="visible" :footer="null" :closeIcon="vnode">
        <AddPost :visible="visible" @new-post="addPost" @close="hideModal" />
      </a-modal>
    </div>
    <PostList :posts="posts" :person="activePerson" />
  </div>
</template>
<script>
import { ref, onMounted, h } from "vue";
import { posts as importedPosts } from "../storage/posts.ts";
import { people } from "../storage/people";
import Person from "../components/Person/Person.vue";
import PostList from "../components/PostsList/PostList.vue";
import Agreement from "../components/Icon/Agreement.vue";
import AddPost from "./AddPost.vue";
import { useModal } from "../composables/useModal";

export default {
  components: {
    // Close,
    Agreement,
    Person,
    PostList,
    AddPost,
  },
  setup() {
    const vnode = h("img", { src: "../../src/assets/img/icons/close.svg" });
    const posts = ref([...importedPosts]);
    const peopleList = ref(people);
    const activePerson = ref({});
    const { visible, showModal, hideModal } = useModal();

    const addPost = dataObject => {
      posts.value.unshift(dataObject);
    };

    onMounted(() => {
      activePerson.value = peopleList.value.find(person => person.isActive);
    });

    return {
      vnode,
      visible,
      posts,
      peopleList,
      activePerson,
      showModal,
      hideModal,
      addPost,
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.w-100 {
  width: 100%;
}

.btn {
  background: white;
  border: 1px solid #eeeeee;
  border-radius: 6px;
}
</style>
