<template>
  <a-typography-title :level="2" style="margin-top: 10px"
    >Wybierz grupę</a-typography-title
  >
  <a-space>
    <a-select
      ref="select"
      v-model:value="city"
      style="width: 120px"
      :options="options"
      @change="handleChange"
    ></a-select>
  </a-space>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import { groups } from "../../storage/groups";
export default defineComponent({
  props: ["modelValue"],
  setup(props, { emit }) {
    const options = ref([...groups]);
    const city = ref(props.modelValue || []);
    const handleChange = value => {
      city.value = value;
      emit("update:modelValue", city.value);
    };
    watch(city, () => {
      console.log("value", city.value);
    });
    return {
      options,
      handleChange,
      city: ref(3),
    };
  },
});
</script>
