import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";
import ui from "./ui";
import "./styles/main";

const app = createApp(App);
const pinia = createPinia();

ui.forEach((component) => {
  app.component(component.name, component);
});

app.use(router);
app.use(pinia);

app.mount("#app");
