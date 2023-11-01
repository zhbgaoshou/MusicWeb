import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style/index.scss";
import "@/assets/fonticons/index.css";
import "@/assets/font/index.css";

import App from "./App.vue";
import router from "./router/index";

import BaseSongCard from "@/base/BaseSongCard.vue";
import BaseMusicCard from "@/base/BaseMusicCard.vue";
import BaseMVCard from "@/base/BaseMVCard.vue";

const app = createApp(App);
app.component("BaseSongCard", BaseSongCard);
app.component("BaseMusicCard", BaseMusicCard);
app.component("BaseMVCard", BaseMVCard);
app.use(router).use(createPinia()).mount("#app");
