import { createApp } from 'vue';
import App from './App.vue';
import vLazyLoad from './directives/LazyLoadDirective';
import store from '@/stores/pinia';
import router from '@/router';

const app = createApp(App).use(store).use(router);

app.mount('#app');

app.directive('lazyLoad', vLazyLoad);
