
<template>
    <Kudos 
        v-for="kudo in kudosiki" 
        :key="kudo.id"
        :id="kudo.id"
        :title="kudo.title" 
        :description="kudo.description" 
        :img="kudo.img" 
        :selectedKudos="selectedKudos"
        @update:selectedKudos="updateSelectedKudos"/>
</template>


<script>
import Kudos from '../Kudos/Kudos.vue'
import { kudoses } from '../../storage/kudoses.ts'
import { ref } from 'vue';

const kudosiki = [...kudoses]

export default {
    components: {
        Kudos
    },
    data(){
    return {
        selectedKudos: 0,
        kudosiki: kudosiki
    }
    },
    methods: {
    updateSelectedKudos(kudosId) {
      this.selectedKudos = kudosId;
    },
  },
}


</script>