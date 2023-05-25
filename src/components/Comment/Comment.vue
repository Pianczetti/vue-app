<template>
  <div class="comment">
    <a-avatar :src="activePerson.img" :shape="avatarShape"></a-avatar>
    <a-textarea
      v-model="comment"
      :placeholder="placeholder"
      :autoSize="{ minRows: 2, maxRows: 3 }"
      :style="{ marginRight: '100px' }"
    ></a-textarea>
    <div class="icons">
      <a-tooltip title="GIF">
        <file-gif-outlined />
      </a-tooltip>
      <a-tooltip title="Emoticon">
        <smile-outlined :style="{ marginLeft: iconMarginLeft }" />
      </a-tooltip>
      <a-tooltip title="Attachment">
        <paper-clip-outlined :style="{ marginLeft: iconMarginLeft }" />
      </a-tooltip>
    </div>
  </div>
</template>

<script>
import {
  FileGifOutlined,
  PaperClipOutlined,
  SmileOutlined,
} from "@ant-design/icons-vue";
export default {
  props: {
    activePerson: {
      type: Object,
    },
  },
  components: {
    FileGifOutlined,
    PaperClipOutlined,
    SmileOutlined,
  },
  data() {
    return {
      avatarShape: "circle",
      comment: "",
      placeholder: "Napisz komentarz...",
      iconMarginLeft: "11px",
    };
  },
};
</script>

<style scoped>
.comment {
  display: flex;
  align-items: center;
  padding: 26px 20px;
  position: relative;
}

.comment .ant-avatar {
  flex-shrink: 0;
  margin-right: 15px;
}

.icons {
  display: flex;
  right: 16px;
  position: absolute;
}

.icons a-icon {
  margin-left: 8px;
  cursor: pointer;
}
</style>
