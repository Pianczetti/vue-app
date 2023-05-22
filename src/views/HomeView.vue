<template>
  <div class="wrapper">
    <div class="head">
      <!-- <a-button type="primary" @click="showModal">
        <Person />
      </a-button> -->
      <!-- <Modal /> -->
      <button class="dp-flex w-100" @click="showModal">
        <Person />
      </button>
      <AddPost :visible="isModalVisible" @close="hideModal" @new-post="addPost"/>
    </div>

    <PostList :posts="[...posty]"/>
  <!-- <AddPostButton /> -->
     <!-- <PostComponent /> -->
</div>
  
</template>

<script>
// musisz stworzyc formularz, 
// 1.mantionable
// 2. a-select multiple autocomplete który przyujmuje jako props, tablice peopleStorage 
// 3. kudosy czyli v-for dla elmentu kudos, który zawiera element v-for=(item in items) :key='item.id > image - src='item.src', <opis> {{ item.kudos text}} </opis> <name> {{ name }} </name
// 4. a-select  który przyjmuje groups - z ikonką
// 5. to wsztstko przypisywane do initialVales posta
// i konkatenacja tablic czyli posts = [...postsstorage, newPost]
// stworzyc post na wzor kudosa
// dorobic sekcje komentarzy z dropdownem który i hoverem na pozycje
//////////////// ostylować wszystko 
//// ssać pałe Michałowi do konca zycia
////////////// PAMIETAJ O COMMITACH 

 
// vendor
import { ref } from 'vue'
import { Mentionable } from 'vue-mention'

//
import Person from '../components/Person/Person.vue'
import AddPost from './AddPost.vue'
import PostComponent from '../components/Post/Post.vue';
import PostList from '../components/PostsList/PostList.vue';
import { kudoses } from '../storage/kudoses.ts'
import { posts } from '../storage/posts.ts'
import { people as peopleStorage } from '../storage/people';
import { groups } from '../storage/groups.ts'
import Agreement from '../components/Icon/Agreement.vue';

const posty = [...posts]

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
      kudoses: kudoses
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal(){
      this.isModalVisible = false;
    },
    addPost(dataObject){
      posty.unshift(dataObject)
      console.log(posty)
    }
  },
 
};

</script>


<style lang="scss" scoped>
body {
  max-width: 650px
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
  padding: 10px
}

.mention-item {
  padding: 4px 10px;
  border-radius: 4px;
}

.mention-selected {
  background: rgb(192, 250, 153);
}

.w-100{
  width: 100%;
}

</style>