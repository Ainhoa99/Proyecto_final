import { createApp } from 'vue'
import App from './App.vue'

// bootrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

//createApp(App).mount('#app')
