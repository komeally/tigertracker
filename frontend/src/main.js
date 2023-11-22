import { createApp } from 'vue';
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia(); // Create Pinia instance

app.use(router);
app.use(pinia); // Add Pinia instance to Vue application

app.mount('#app');