<template>
  <a-row>
    <a-col class="col-1" span="2">
      <a-avatar :src="activePerson.img" shape="rounded" size="large" />
    </a-col>
    <a-col
      :style="{
        display: 'flex',
        alignContent: 'flexStart',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '5px',
      }"
      class="col-2"
      span="9"
    >
      <a-space level="4">
        <a-typography-text> Kliknij, aby dodać post. </a-typography-text>
      </a-space>
      <a-space />
    </a-col>
    <a-col class="col-3" span="3">
      <Agreement color="value1" />
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent } from "vue";
import Agreement from "../Icon/Agreement.vue";
import { usePeople } from "../../composables/usePeople";

export default defineComponent({
  name: "Person",
  components: {
    Agreement,
  },
  setup() {
    const { activePerson } = usePeople();

    return {
      activePerson,
    };
  },
});
</script>

<style>
.col-3 {
  margin-left: auto;
  display: flex !important;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
}

.col-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
}
</style>
