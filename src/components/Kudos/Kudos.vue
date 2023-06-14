<template>
  <label :class="{ selected: isSelected }">
    <a-radio
      :id="id.toString()"
      :value="id.toString()"
      :checked="isSelected"
      @change="updateSelectedKudos"
      :name="'selectKudos'"
    ></a-radio>
    <a-card class="kudos-card" :hoverable="true">
      <div slot="cover">
        <a-avatar class="kudos-avatar" :src="img"></a-avatar>
      </div>
      <div class="kudos-description">
        <a-typography
          class="kudos-title"
          :title="title"
          :ellipsis="true"
          strong
          >{{ title }}</a-typography
        >
        <a-typography
          class="kudos-target-name"
          :title="description"
          :ellipsis="true"
          >{{ description }}</a-typography
        >
      </div>
    </a-card>
  </label>
</template>

<script>
import {
  Radio as ARadio,
  Card as ACard,
  Avatar as AAvatar,
  Typography as ATypography,
} from "ant-design-vue";
import { defineComponent, computed, ref } from "vue";

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
    selectedKudos: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const isSelected = computed(() => props.selectedKudos === props.id);

    const updateSelectedKudos = () => {
      emit("update:selectedKudos", props.id);
    };

    return {
      isSelected,
      updateSelectedKudos,
    };
  },
});
</script>

<style scoped>
.selected .kudos-card {
  background-color: #eeeeee;
  border-color: #a8996f;
}
.kudos-card {
  padding: 20px;
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  border: 1px solid gray;
  align-items: center;
  margin-top: 16px;
  border-radius: 6px;
  transition: 0.3s all ease-in-out;
}

.kudos-description {
  margin-left: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.kudos-target-name {
  color: #616161;
  font-weight: 600;
  margin-top: 8px;
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

.ant-radio-wrapper {
  display: none;
}
</style>
