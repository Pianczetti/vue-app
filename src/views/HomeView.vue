<template>
  <div class="wrapper">
    <div class="head">
      <!-- <a-button type="primary" @click="showModal">
        <Person />
      </a-button> -->
      <!-- <Modal /> -->
      <button class="btn dp-flex w-100" @click="showModal">
        <Person :person="activePerson" />
      </button>
      <AddPost
        :activePerson="activePerson"
        :visible="isModalVisible"
        @close="hideModal"
        @new-post="addPost"
      />
    </div>
    <PostList :posts="[...posty]" :person="activePerson" />
  </div>
</template>

<script>
// vendor
import { ref } from "vue";
import { Mentionable } from "vue-mention";
import { kudoses } from "../storage/kudoses.ts";
import { posts } from "../storage/posts.ts";
import { people } from "../storage/people";
//
import Person from "../components/Person/Person.vue";
import AddPost from "./AddPost.vue";
import PostComponent from "../components/Post/Post.vue";
import PostList from "../components/PostsList/PostList.vue";
import Agreement from "../components/Icon/Agreement.vue";

const posty = [...posts];

export default {
  components: {
    PostComponent,
    AddPost,
    Agreement,
    Person,
    PostList,
  },
  data() {
    return {
      isModalVisible: false,
      posty: posty,
      kudoses: kudoses,
      people: people,
      activePerson: null,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
    addPost(dataObject) {
      posty.unshift(dataObject);
      console.log(posty);
    },
  },
  created() {
    this.activePerson = people.find(person => person.isActive);
  },
};
</script>

<style lang="scss" scoped>
body {
  max-width: 650px;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.mentionable {
  width: 100%;
  padding: 10px;
}

.mention-item {
  padding: 4px 10px;
  border-radius: 4px;
}

.mention-selected {
  background: rgb(192, 250, 153);
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
