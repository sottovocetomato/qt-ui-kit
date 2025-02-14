import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { vMaska } from "maska/vue";
import setDefaultValidationRules from "./config/vee-validate/validation";

setDefaultValidationRules();
const Vue = createApp(App);
Vue.directive("maska", vMaska);
Vue.mount("#app");
