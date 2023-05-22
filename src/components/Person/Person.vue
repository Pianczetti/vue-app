<template>
  <a-row>
    <a-col class="col-1" span="3">
      <a-avatar src="https://picsum.photos/200" shape="rounded" size="default" />
    </a-col>
    <a-col class="col-2" span="9">
      <a-typography level="4">
        Jaca Grzelak
      </a-typography>
      <a-space />
    </a-col>
    <a-col class="col-3" span="3">
      <Agreement />
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent } from 'vue';
import Agreement from '../Icon/Agreement.vue';

export default defineComponent({
    name: "Person",
    components: {
        Agreement
    }
})
</script>

<style>
    .col-3 {
        margin-left: auto;
    }
</style>