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
    <a-typography-text>
      {{description}}
    </a-typography-text>
    <a-card :style="{ marginTop:'24px', padding:'35px 55px 58px 5px',}">
      <a-image
      :preview=false
        :width="150"
        :src="kudosImg"
      />
      <a-space direction="vertical">
      <a-typography-text >{{ kudosTarget }}</a-typography-text>
      <a-typography-title :level="2" :style="{fontSize: '24px'}">{{ kudosTitle }}</a-typography-title>
      </a-space>
    </a-card>

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

.mt-24 { margin-top: 24px}
.pl-5 { padding-left: 5px}
.pt-35 {padding-top: 35px;}
.pb-58 {padding-bottom: 58px}
.pr-55 { padding-right: 55px}


</style>