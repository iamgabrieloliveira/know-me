import { createApp } from 'vue'
import store from './store/index.js';

import App from './App.vue'
import Button from '@/components/globalComponents/Button.vue';

import './styles/index.css'

const app = createApp(App);

app.component('MyButton', Button);

app.use(store);

app.mount('#app');
