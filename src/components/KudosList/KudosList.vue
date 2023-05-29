<!-- <template>
  <Kudos
    v-for="kudo in kudosiki"
    :key="kudo.id"
    :id="kudo.id"
    :title="kudo.title"
    :description="kudo.description"
    :img="kudo.img"
    :selectedKudos="selectedKudos"
    @update:selectedKudos="updateSelectedKudos"
  />
</template>

<script>
import { ref, onMounted } from "vue";
import Kudos from "../Kudos/Kudos.vue";
import { kudoses } from "../../storage/kudoses.ts";

export default {
  components: {
    Kudos,
  },
  setup(_, { emit }) {
    const selectedKudos = ref(0);
    const kudosiki = ref([...kudoses]);

    const updateSelectedKudos = kudosId => {
      selectedKudos.value = kudosId;
      emit("update:selectedKudos", selectedKudos.value);
    };

    return {
      selectedKudos,
      kudosiki,
      updateSelectedKudos,
    };
  },
};
</script> -->
