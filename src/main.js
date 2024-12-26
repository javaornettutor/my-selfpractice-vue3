import { createApp } from 'vue'
import App from './App.vue'
//import ParentSlotApp from './components/SlotsExample/ParentSlot.vue'
import router from './router'; // Import the router
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap'; // Bootstrap JS (optional, if using components like modals or tooltips)

const app = createApp(App);
app.use(router); // Use the router in your Vue app
app.mount('#app')
app.config.devtools = true;


// const slotApp = createApp(ParentSlotApp);
// slotApp.mount('#slotApp')
