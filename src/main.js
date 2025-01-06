import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';

import App from './App.vue'
//import ParentSlotApp from './components/SlotsExample/ParentSlot.vue'
import router from './router'; // Import the router
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap'; // Bootstrap JS (optional, if using components like modals or tooltips)
import '@mdi/font/css/materialdesignicons.css'; // Optional icons

import 'vuetify/styles'; // Vuetify CSS
import BootstrapVue3 from 'bootstrap-vue-3';

const app = createApp(App);
const vuetify = createVuetify();

app.use(router); // Use the router in your Vue app
app.use(createPinia());
app.use(vuetify);
app.use(BootstrapVue3);
app.mount('#app')
app.config.devtools = true;


// const slotApp = createApp(ParentSlotApp);
// slotApp.mount('#slotApp')
