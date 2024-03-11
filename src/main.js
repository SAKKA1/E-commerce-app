import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// emitter config
import mitt from "mitt";

const Emitter = mitt();

// bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .provide("Emitter", Emitter)
  .use(createPinia())
  .use(vuetify)
  .use(router)
  .mount("#app");
