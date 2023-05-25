<template>
  <a-select
    v-model:value="person"
    mode="tags"
    style="width: 100%"
    :token-separators="[',']"
    placeholder="Imię Nazwisko"
    :options="options"
    @change="handleChange"
  ></a-select>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import { people } from "../../storage/people";
export default defineComponent({
  props: ["modelValue"],
  setup(props, { emit }) {
    const options = ref([...people]);
    const person = ref(props.modelValue || []);
    const handleChange = value => {
      console.log(`selected ${person}`);
      person.value = value;
      emit("update:modelValue", person.value);
    };
    watch(person, () => {
      console.log("value", person.value);
    });
    return {
      options,
      handleChange,
      person,
    };
  },
});
</script>
