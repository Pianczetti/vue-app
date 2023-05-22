<template>
  <div>
    <div class="post">
    <a-row>
      <a-col class="col-1" span="3">
        <a-avatar :src="author.avatar" shape="rounded" size="default" />
      </a-col>
      <a-col class="col-2" span="9">
        <a-typography level="4">
          {{author.imie}} {{author.nazwisko}}
        </a-typography>
        <a-space />
        <a-typography level="4">
          {{date}}
        </a-typography>
      </a-col>
      <a-col class="col-3" span="3">
        <Agreement />
      </a-col>
    </a-row>

    <a-typography level="4" >
      {{description}}
    </a-typography>

    <a-typography>
      <a-image
      :preview=false
        :width="200"
        :src="kudosImg"
      />
      {{ kudosTarget }}
      {{ kudosTitle }}
    </a-typography>
</div>
 
</div>

</template>

<script  >
import { defineComponent } from 'vue';
import  Agreement  from '../Icon/Agreement.vue';
import { Dayjs } from 'dayjs';
import { kudoses } from '../../storage/kudoses';
import { ref } from 'vue';
import { people } from '../../storage/people';
// import { posts } from '../../../storage/posts';



export default defineComponent({
    name: "PostComponent",
    props: {
      id: {type: Number},
      author: {type: Object},
      date: {type: Dayjs},
      description: {type: String},
      likes: {type: Number},
      kudosProp: {type: Object},
      group: {type: Number}
    },
    components: { Agreement },

    computed: {
      kudosTitle() {
        const foundKudos = kudoses.find(kudos => kudos.id === this.kudosProp.kudosId);
        return foundKudos ? foundKudos.title : '';
      },
      kudosImg() {
        const foundKudos = kudoses.find(kudos => kudos.id === this.kudosProp.kudosId);
        return foundKudos ? foundKudos.img : '';
      },
      kudosTarget() {
        const foundPerson = people.find(person => person.id === this.kudosProp.kudosId);
        return foundPerson ? foundPerson.value : '';
      }
    }
    
}) 
</script>

<style  scoped>
.post {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 16px;
  margin: 13px 0;
  width: 100%;
  max-width: 564px;
  height: 513px;
  background-color: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 6px;
}

.col-3 {
  margin-left: auto
}


</style>