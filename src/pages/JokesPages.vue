<template>
  <h1>This is Jokes Page</h1>
  <select v-model='selectedCategory' @change='fetchRandomJoke'>
    <option disabled value=''>Get joke by category</option>
    <option :key='index' v-for='(category, index) in categories'> {{ category }}</option>
  </select>
  <base-button @click='fetchRandomJoke'>Get another one</base-button>
  <base-card v-if='currentJoke'>
    <p :key='currentJoke.id'>{{ currentJoke.text }}</p>
    <base-button
      @click='toggleFavorites(currentJoke)'>
      {{ currentJoke.isInFavorites ? 'Remove' : 'Add to Favorites' }}
    </base-button>
  </base-card>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import fetchData from '../utilities';
import BaseCard from '@/components/BaseCard.vue';

export default {
  components: { BaseCard, BaseButton },
  data() {
    return {
      categories: [],
      selectedCategory: '',
      currentJoke: {
        id: '',
        text: '',
        isInFavorites: false
      }
    };
  },
  beforeMount() {
    this.fetchCategories();
    this.fetchRandomJoke();
  },
  methods: {
    async fetchCategories() {
      const url = 'https://api.chucknorris.io/jokes/categories';
      const jsonData = await fetchData(url);
      this.categories = jsonData;
    },
    async fetchRandomJoke() {
      const url = this.selectedCategory
        ? `https://api.chucknorris.io/jokes/random?category=${this.selectedCategory}`
        : 'https://api.chucknorris.io/jokes/random';
      const jsonData = await fetchData(url);
      this.currentJoke.id = jsonData.id;
      this.currentJoke.text = jsonData.value;
      this.currentJoke.isInFavorites = false;
    },

    toggleFavorites(joke) {
      const isJokeInFavorites = this.$store.state.userFavorites.find(favorite => favorite.id === joke.id);
      if (isJokeInFavorites) {
        this.$store.commit('removeJoke', joke.id);
      } else {
        const jokeToAdd = { ...joke, isInFavorites: true };
        this.$store.commit('addJoke', jokeToAdd);
      }
      this.currentJoke.isInFavorites = !isJokeInFavorites;
      console.log(this.$store.state.userFavorites);
    }
  }
};

</script>
