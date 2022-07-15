import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
//Routes
import router from "./router";

import Vuelidate from "@vuelidate/core";
//fontawesome component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//fontawesome JS
import { library } from "@fortawesome/fontawesome-svg-core";
//fontawesome icons
import { fas } from "@fortawesome/free-solid-svg-icons";
//brands icons
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);
createApp(App)
  .use(router)
  .use(Vuelidate)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
