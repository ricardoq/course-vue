import { createApp } from 'vue';
import App from './App.vue';
import vLazyLoad from './directives/LazyLoadDirective';
import store from '@/stores/pinia';

const app = createApp(App).use(store);

app.mount('#app');

app.directive('lazyLoad', vLazyLoad);
