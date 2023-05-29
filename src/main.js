import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "floating-vue/dist/style.css";
import "./style.css";

createApp(App).use(Antd).mount("#app");
