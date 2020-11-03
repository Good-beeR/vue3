import {createApp} from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from '@/App.vue'
import router from '@/router'
import {vuexStore} from '@/repositories';

createApp(App).use(vuexStore.store).use(router).use(VueAxios, axios).mount('#app');
