import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRouter, createWebHistory } from 'vue-router';
import JokesPages from '@/pages/JokesPages.vue';
import FavoritesPage from '@/pages/FavoritesPage.vue';
import HomePage from '@/pages/HomePage.vue';
import { createStore } from 'vuex';
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

const store = createStore({
  state() {
    return {
      userFavorites: JSON.parse(localStorage.getItem('userFavorites')) || []
    };
  },
  actions: {
    addJoke(context, joke) {
      context.state.userFavorites.push(joke);
      localStorage.setItem('userFavorites', JSON.stringify(context.state.userFavorites));
    },
    removeJoke(context, jokeId) {
      const index = context.state.userFavorites.findIndex(joke => joke.id === jokeId);
      if (index !== -1) {
        context.state.userFavorites.splice(index, 1);
        localStorage.setItem('userFavorites', JSON.stringify(context.state.userFavorites));
      }
    }
  }
});
app.use(router);
app.use(store);
app.mount('#app');
