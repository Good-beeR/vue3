import {createApp} from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from '@/App.vue'
import router from '@/router/router'
import {store} from '@/store/store';

createApp(App).use(router).use(store).use(VueAxios, axios).mount('#app');
