import { createApp } from 'vue';
import App from './App.vue';
import vLazyLoad from './directives/LazyLoadDirective';

const app = createApp(App).mount('#app');

app.directive('lazyLoad', vLazyLoad);
