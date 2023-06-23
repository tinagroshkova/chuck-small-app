import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRouter, createWebHistory } from 'vue-router';
import JokesPages from '@/pages/JokesPages.vue';
import FavoritesPage from '@/pages/FavoritesPage.vue';
import HomePage from '@/pages/HomePage.vue';
import store from './store';

import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/jokes', component: JokesPages },
    { path: '/favorites', component: FavoritesPage }
  ]
});


app.use(router);
app.use(store);
app.mount('#app');
