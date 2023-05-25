<template>
  <!-- <Avatar /> -->
  <div class="modal" v-if="visible">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">X</button>

      <a-form class="custom-form" @submit="publish">
        <Mentionable
          placement="bottom"
          :keys="['@', '#']"
          :items="items"
          offset="6"
          insert-space
          @open="onOpen"
          @select="onSelect"
        >
          <textarea
            v-model="text"
            placeholder="Napisz wiadomość"
            @input="updateCharacterCount"
            :maxlength="500"
          />

          <template #no-result>
            <div class="dim">Użytkownik nie istnieje</div>
          </template>

          <template #item-@="{ item }">
            <div class="user">
              <span class="dim"> ({{ item.value }}) </span>
            </div>
          </template>
        </Mentionable>

        <div class="character-counter">{{ characterCount }}/500</div>
        <div class="select-container">
          <p style="text-align: left">Wybierz osobę której przyznajesz Kudos</p>
          <Select v-model="selectedPerson.value" />
        </div>

        <div class="kudoses-container">
          <p style="text-align: left">Wybierz kudos</p>
          <KudosList v-model="selectedKudos" />
        </div>

        <div class="city-container">
          <CitySelect v-model="selectedCity.value" />
          <button type="submit">Opublikuj</button>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script>
import { people } from "../storage/people.ts";
import { Mentionable } from "vue-mention";
import { groups } from "../storage/groups.ts";
import Select from "../components/Select/Select.vue";
import CitySelect from "../components/CitySelect/CitySelect.vue";
import KudosList from "../components/KudosList/KudosList.vue";
import dayjs from "dayjs";
import { ref } from "vue";

let date = dayjs().format();

const issues = [
  {
    value: 123,
    label: "Error with foo bar",
    searchText: "foo bar",
  },
  {
    value: 42,
    label: "Cannot read line",
    searchText: "foo bar line",
  },
  {
    value: 77,
    label: "I have a feature suggestion",
    searchText: "feature",
  },
];

const defaultValues = {
  postId: "",
  authorId: "",
  avatar: "",
  date: "",
  postDescription: "",
  likes: 0,
  kudos: {
    kudosId: "",
    personId: "",
  },
  groupId: "",
};

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    activePerson: {
      type: Object,
    },
  },

  setup() {
    const selectedPerson = ref([]);
    const selectedCity = ref([]);
    return {
      selectedPerson,
      selectedCity,
    };
  },

  components: {
    Mentionable,
    Select,
    KudosList,
    CitySelect,
  },
  data() {
    return {
      text: "",
      items: [],
      characterCount: 0,
      person: "",
      kudos: "",
      city: 0,
    };
  },

  computed: {
    selectedPersonId() {
      if (this.selectedPerson) {
        const selectedName = this.selectedPerson.value[0];
        const matchedPerson = people.find(
          person => person.value === selectedName
        );
        return matchedPerson ? matchedPerson.id : null;
      }
      return null;
    },
    selectedCityId() {
      if (this.selectedCity) {
        console.log(this.selectedCity);
        const citySelectVal = this.selectedCity.value;
        const matchedCity = groups.find(group => group.value === citySelectVal);
        return matchedCity ? matchedCity.value : null;
      }
    },
  },

  methods: {
    onOpen(key) {
      this.items = key === "@" ? people : issues;
    },
    onSelect(item) {
      this.text = this.text.replace(/@\S+/, `@${item.label} `);
    },
    closeModal() {
      this.$emit("close");
    },
    updateCharacterCount() {
      this.characterCount = this.text.length;
    },
    publish() {
      let newPost = {
        postId: getRandomIntInclusive(7, 99),
        author: {
          authorId: this.activePerson.id,
          avatar: this.activePerson.img,
          imie: this.activePerson.value,
          nazwisko: this.activePerson.value,
        },
        date: date,
        postDescription: this.text,
        likes: getRandomIntInclusive(7, 99),
        kudos: {
          kudosId: 1,
          targetPersonId: this.selectedPersonId,
        },
        groupId: this.selectedCityId,
      };
      // Emit the dataObject to the parent component
      this.$emit("new-post", newPost);

      // Reset the form
      this.text = "";
      this.characterCount = 0;
      this.selectedPerson = "";
      this.kudos = "";
      this.city = "";
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
.select-container {
  display: flex;
  flex-direction: column;
}

.mentionable {
  display: flex;
  gap: 20px;
}

textarea {
  width: 100%;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal-content {
  width: 564px;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  max-height: 800px; /* Adjust the height as needed */
  overflow-y: auto;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 18px;
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 999;
}
</style>
