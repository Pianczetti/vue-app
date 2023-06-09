<template>
  <div>
    <div class="post">
      <a-row>
        <a-col
          :style="{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }"
          class="col-1"
          span="2"
        >
          <a-avatar :src="author.avatar" shape="rounded" size="large" />
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
          span="6"
        >
          <a-space level="4">
            <a-typography-text strong>
              {{ author.imie }} {{ author.nazwisko }}
            </a-typography-text>
          </a-space>
          <a-space level="4">
            <Date :date="date" />
          </a-space>
        </a-col>
        <a-col class="col-3" span="3">
          <Agreement color="value1" />
        </a-col>
      </a-row>

      <p :style="{ marginTop: '38px', textAlign: 'left' }">
        {{ description }}
      </p>

      <a-card :style="postCardStyle">
        <img :height="124" :width="100" :src="kudosImg" />
        <div :style="postCardSpaceStyle">
          <p :style="{ margin: '0' }">{{ kudosTarget }}</p>
          <a-typography-title :level="2" :style="postCardTitleStyle">
            {{ kudosTitle }}
          </a-typography-title>
        </div>
      </a-card>
      <div class="post-info-container">
        <div class="city-container">
          <img
            class="filter-gray"
            :src="kudosGroupImg"
            alt="City Icon"
            style="width: 16px; height: 16px; margin-right: 8px"
          />
          <a-typography-text strong>
            {{ kudosGroup }}
          </a-typography-text>
        </div>
        <div class="likes-container">
          <Likes :likes="likes" />
        </div>
        <a-popover trigger="click">
          <template #content>
            <p class="popover-item">Edit</p>
            <p class="popover-item">Share</p>
            <p class="popover-item">Other</p>
          </template>
          <a-button
            :style="{ marginLeft: '5px', border: 'unset', padding: '2px' }"
          >
            <ThreeDots />
          </a-button>
        </a-popover>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Agreement from "../Icon/Agreement.vue";
import Likes from "../Likes/Likes.vue";
import Date from "../Date/Date.vue";
import ThreeDots from "../../components/ThreeDots/ThreeDots.vue";
import { kudoses } from "../../storage/kudoses";
import { groups } from "../../storage/groups";
import { people } from "../../storage/people";
import {
  getKudosProperty,
  getKudosGroupProperty,
} from "../../composables/useKudos.js";

dayjs.extend(relativeTime);

export default defineComponent({
  name: "PostComponent",
  props: {
    id: { type: Number },
    author: { type: Object },
    date: { type: Dayjs },
    description: { type: String },
    likes: { type: Number },
    kudosId: { type: Number },
    kudosTarget: { type: Number },
    group: { type: Number },
  },
  components: {
    Agreement,
    Likes,
    Date,
    ThreeDots,
  },

  setup(props) {
    const kudosy = ref([...kudoses]);
    const grupy = ref([...groups]);

    const kudosTitle = computed(() => {
      return getKudosProperty(kudosy, props, "title");
    });

    const kudosImg = computed(() => {
      return getKudosProperty(kudosy, props, "img");
    });

    const kudosGroup = computed(() => {
      return getKudosGroupProperty(grupy, props, "label");
    });

    const kudosGroupImg = computed(() => {
      return getKudosGroupProperty(grupy, props, "img");
    });

    const kudosTarget = computed(() => {
      const foundPerson = people.find(
        person => person.id === props.kudosTarget
      );
      return foundPerson ? foundPerson.value : "";
    });

    const postCardStyle = computed(() => ({
      height: "193px",
      marginTop: "24px",
      marginBottom: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6px",
    }));

    const postCardSpaceStyle = computed(() => ({
      marginLeft: "35px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }));

    const postCardTitleStyle = computed(() => ({
      fontSize: "24px",
    }));

    return {
      postCardStyle,
      postCardSpaceStyle,
      postCardTitleStyle,
      kudosTitle,
      kudosImg,
      kudosTarget,
      kudosGroup,
      kudosGroupImg,
    };
  },
});
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 13px 0 0 0;
  width: 100%;
  max-width: 564px;
  height: 441px;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom: unset;
}

.city-container {
  display: flex;
  align-items: center;
}
.city-container span {
  color: #a8996f;
}
.post-info-container {
  display: flex;
  align-items: center;
}

.likes-container {
  margin-left: auto;
}

.filter-gray {
  filter: brightness(0) saturate(100%) invert(64%) sepia(28%) saturate(414%)
    hue-rotate(7deg) brightness(91%) contrast(84%);
}
.col-3 {
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
}

.popover-item {
  padding: 5px 15px;
  border: 1px solid #eee;
  border-radius: 6px;
}
.popover-item:hover {
  background: #fbfbfb;
  cursor: pointer;
}
</style>
