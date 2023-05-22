<template>
  <label :class="{ 'selected': isSelected }">
      <a-radio
        :id="id.toString()"
        :value="id.toString()"
        :checked ="isSelected"
        @change="updateSelectedKudos"
        :name="'selectKudos'"
      ></a-radio>
      <a-card class="kudos-card" :hoverable="true" :loading="loading" @click="selectKudos">
        <div slot="cover">
          <a-avatar class="kudos-avatar" :src="img"></a-avatar>
        </div>
        <div>
          <a-typography class="kudos-title" :title="title" :ellipsis="true" strong>{{ title }}</a-typography>
          <a-typography class="kudos-description" :title="description" :ellipsis="true">{{ description }}</a-typography>
        </div>
      </a-card>
    </label>
</template>
  
  <script>
  import { kudoses } from '../../storage/kudoses.ts'
  import { Radio as ARadio, Card as ACard, Avatar as AAvatar, Typography as ATypography } from 'ant-design-vue';
  import { defineComponent } from 'vue';


  export default defineComponent({
    components: {
      ARadio,
      ACard,
      AAvatar,
      ATypography,
    },
    props: {
      id: {
        type: Number,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      loading: {
        type: Boolean,
        default: false,
      },
      selectedKudos: {
        type: Number,
        required: true,
        default: 0
      }
    },
    computed: {
      isSelected() {
        return this.selectedKudos === this.id;
      }
    },
    methods: {
    updateSelectedKudos() {
      this.$emit('update:selectedKudos', this.id);
    },
    selectKudos() {
      if (!this.isSelected) {
        this.updateSelectedKudos();
      }
    },
  },
    // data() {
    //   return {
    //     selectedKudos: null,
    //   };
    // },
  });
  </script>
  
  <style scoped>
  .selected .kudos-card{
    background-color: #EEEEEE;
    border-color: #A8996F;
  }
  .kudos-card{
    padding: 20px;
    display: flex;
    height: 80px;
    width: 100%;
    justify-content: space-between;
    border: 1px solid gray;
    align-items: center;
    margin-top: 16px;
    border-radius: 6px;
    transition: .3s all ease-in-out;
  }
  .kudos {
    display: inline-block;
  }
  
  .kudos-avatar {
    width: 60px;
    height: 60px;
  }
  
  .kudos-title {
    margin-top: 8px;
  }
  
  .kudos-description {
    margin-top: 8px;
  }

  .ant-radio-wrapper{
    display: none;
  }
  </style>