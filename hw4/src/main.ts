import { createApp } from 'vue';
import App from './App.vue';
import vLazyLoad from './directives/LazyLoadDirective';
import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App);
app.use(pinia)

app.mount('#app');

app.directive('lazyLoad', vLazyLoad);
