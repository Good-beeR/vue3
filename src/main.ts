import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import {vuexStore} from '@/repositories';

createApp(App).use(vuexStore.store).use(router).mount('#app');