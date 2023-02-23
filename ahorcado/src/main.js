import { createApp } from 'vue'
import App from './App.vue'

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faEnvelope, faUsers, } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope);
library.add(faHome);
library.add(faUsers);


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

//createApp(App).mount('#app')
