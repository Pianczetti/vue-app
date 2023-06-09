<template>
  <a-space>
    <Agreement color="value2" />
    <a-typography-title :level="4">Utwórz kudos</a-typography-title>
  </a-space>

  <a-form class="custom-form" @submit="publish" :style="{ marginTop: '20px' }">
    <p>Treść posta nad kudosem</p>
    <Mentionable
      placement="bottom"
      :keys="['@', '#']"
      :items="mentionableItems"
      offset="6"
      insert-space
      @open="onOpen"
      @select="onSelect"
    >
      <a-textarea
        v-model:value="formData.text"
        placeholder="Napisz wiadomość"
        :autoSize="{ minRows: 2, maxRows: 3 }"
        @input="updateCharacterCount"
        :maxlength="500"
      ></a-textarea>

      <template #no-result>
        <div class="dim">Nie można użyć tagu</div>
      </template>

      <template #item-@="{ item }">
        <div class="user">
          <span class="dim"> @{{ item.value }} </span>
        </div>
      </template>

      <template #item-#="{ item }">
        <div class="hashtag">
          <span class="tag"> #{{ item.value }} </span>
        </div>
      </template>
    </Mentionable>

    <div class="character-counter">{{ formData.characterCount }}/500</div>
    <div class="select-container">
      <p style="text-align: left">Wybierz osobę której przyznajesz Kudos</p>
      <a-select
        mode="tags"
        :token-separators="[',']"
        placeholder="Wybierz osobę..."
        v-model:value="formData.value1"
        :options="options1"
      >
      </a-select>
    </div>

    <div class="kudoses-container">
      <p style="text-align: left">Wybierz kudos</p>
      <Kudos
        v-for="kudo in kudosy"
        :key="kudo.id"
        :id="kudo.id"
        :title="kudo.title"
        :description="kudo.description"
        :img="kudo.img"
        :selectedKudos="formData.selectedKudos"
        @update:selectedKudos="updateSelectedKudos"
      />
    </div>
    <div class="city-container">
      <p>Wybierz grupę</p>
      <div>
        <a-select
          v-model:value="formData.value2"
          style="width: 180px"
          @change="handleChange"
        >
          <a-select-option
            v-for="group in options2"
            :key="group.id"
            :value="group.value"
          >
            <img
              :src="group.img"
              alt="City Icon"
              style="width: 16px; height: 16px; margin-right: 8px"
            />
            {{ group.label }}
          </a-select-option>
        </a-select>
        <button type="submit">Opublikuj</button>
      </div>
    </div>
  </a-form>
</template>

<script>
import { kudoses } from "../storage/kudoses";
import { people } from "../storage/people.ts";
import { Mentionable } from "vue-mention";
import { groups } from "../storage/groups.ts";
import Kudos from "../components/Kudos/Kudos.vue";
import Agreement from "../components/Icon/Agreement.vue";
import dayjs from "dayjs";
import { ref } from "vue";
import { usePeople } from "../composables/usePeople";
import "floating-vue/dist/style.css";

const hashes = [
  {
    value: "Brawo",
  },
  {
    value: "Congratulacje",
  },
];

const defaultPost = {
  postId: null,
  author: {
    authorId: null,
    avatar: "",
    imie: "",
    nazwisko: "",
  },
  date: "",
  postDescription: "",
  likes: null,
  kudosId: null,
  targetPersonId: null,
  groupId: null,
};
export default {
  components: {
    Mentionable,
    Kudos,
    Agreement,
  },

  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },

  setup(_, { emit }) {
    const currentTime = ref("");
    const { activePerson } = usePeople();
    const [firstName, lastName] = activePerson.value.split(" ");
    const mentionableItems = ref([]);
    const newPost = ref(defaultPost);
    const kudosy = ref([...kudoses]);
    const options1 = ref([...people]);
    const options2 = ref([...groups]);

    const formData = ref({
      text: ref(""),
      value1: ref([]),
      selectedKudos: ref(0),
      value2: ref("Wybierz miasto"),
      characterCount: ref(0),
    });

    const resetFormData = () => {
      formData.value.text = "";
      formData.value.value1 = [];
      formData.value.selectedKudos = 0;
      formData.value.value2 = "Wybierz miasto";
      formData.value.characterCount = 0;
    };

    const updateSelectedKudos = kudosId => {
      formData.value.selectedKudos = kudosId;
    };

    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const getCurrentTime = () => {
      return (currentTime.value = dayjs().format("YYYY-MM-DDTHH:mm:ssZZ"));
    };

    const handleChange = value => {
      newPost.value.groupId = value;
    };

    const handleSelectedKudosUpdate = kudosId => {
      newPost.value.kudosId = kudosId;
    };

    const selectedName = name => {
      const matchingPerson = options1.value.find(
        person => person.value === name
      );
      if (matchingPerson.value) {
        newPost.value.targetPersonId = matchingPerson.id;
      }
    };

    const resetPost = () => {
      newPost.value = { ...defaultPost };
    };

    const onOpen = key => {
      mentionableItems.value = key === "@" ? people : hashes;
    };

    const onSelect = item => {
      text.value = text.value.replace(/@\S+/, `@${item.label} `);
    };

    const closeModal = () => {
      emit("close");
    };

    const updateCharacterCount = () => {
      newPost.value.postDescription = formData.value.text;
      formData.value.characterCount = formData.value.text.length;
    };

    const publish = () => {
      selectedName(formData.value.value1[0]);
      newPost.value.kudosId = formData.value.selectedKudos;
      newPost.value.author.authorId = activePerson.id;
      newPost.value.author.imie = firstName;
      newPost.value.author.nazwisko = lastName;
      newPost.value.author.avatar = activePerson.img;
      newPost.value.date = getCurrentTime();
      newPost.value.postId = getRandomIntInclusive(7, 99);
      newPost.value.likes = getRandomIntInclusive(7, 99);
      emit("new-post", newPost.value);
      resetFormData();
      resetPost();
      closeModal();
    };

    return {
      formData,
      kudosy,
      value1: ref(undefined),
      value2: ref(undefined),
      options1,
      options2,
      currentTime,
      mentionableItems,
      updateSelectedKudos,
      handleSelectedKudosUpdate,
      selectedName,
      onOpen,
      onSelect,
      closeModal,
      updateCharacterCount,
      publish,
      handleChange,
      getCurrentTime,
      resetFormData,
    };
  },
};
</script>

<style scoped lang="scss">
p {
  font-weight: 600;
  font-size: 14px;
  color: #616161;
}
.kudoses-container {
  margin-top: 30px;

  article {
    color: #616161;
    font-size: 14px;
    font-weight: 600;
  }
}
.select-container {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
}

.city-container {
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  p {
    margin-bottom: 0;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }

  button {
    border: none;
    background: #96459a;
    color: #fff;
    border-radius: 6px;
    font-weight: 600;
    font-size: 14px;
    padding: 4px 25px;
    margin-left: auto;
    max-height: 32px;

    &:hover {
      background: #a8996f;
    }
  }
}

.user,
.hashtag {
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: rgb(192, 250, 153);
  }
}
</style>
