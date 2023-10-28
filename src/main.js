import { createApp } from "vue";
import "./style/index.scss";
import "@/assets/fonticons/index.css";
import "@/assets/font/index.css";

import App from "./App.vue";
import router from "./router/index";

createApp(App)
  .use(router)

  .mount("#app");