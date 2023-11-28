import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from "@/helpers/fontawesome/index";

const app = createApp(App);

app.use(router);
app.component("fa", FontAwesomeIcon);
app.mount("#app");
