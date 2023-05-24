<template>
    <a-typography-title :level="2" :style="{marginTop: '10px'}">Wybierz grupę</a-typography-title>
    <a-space>
      <a-select
        ref="select"
        v-model:value="value1"
        style="width: 120px"
        :options="options1"
      ></a-select>
    </a-space>
  </template>
  <script>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    setup() {
      const options1 = ref([{
        value: 'warszawa',
        label: 'Warszawa',
      }, {
        value: 'krakow',
        label: 'Kraków',
      }, {
        value: 'bialystok',
        label: 'Białystok',
      }, {
        value: 'gdansk',
        label: 'Gdańsk',
      }]);
      return {
        value1: ref('bialystok'),
        options1,
      };
    },
  });
  </script>