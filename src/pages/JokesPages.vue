<template>
  <div class="container">
    <div class="select-holder">
      <select v-model="selectedCategory" @change="fetchRandomJoke">
        <option disabled value="">Get joke by category</option>
        <option :key="index" v-for="(category, index) in categories">{{ category }}</option>
      </select>
      <base-button @click="fetchRandomJoke">Get another one</base-button>
    </div>
    <base-card v-if="currentJoke" class="joke-holder">
      <p :key="currentJoke.id">{{ currentJoke.text }}</p>
      <i :class="['fas', 'fa-star', 'star-icon', {'red': currentJoke.isInFavorites, 'grey': !currentJoke.isInFavorites}]"
         @click="toggleFavorites(currentJoke)"></i>
    </base-card>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import fetchData from '../utilities';
import BaseCard from '@/components/BaseCard.vue';

export default {
  components: {BaseCard, BaseButton},
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
        const jokeToAdd = {...joke, isInFavorites: true};
        this.$store.commit('addJoke', jokeToAdd);
      }
      this.currentJoke.isInFavorites = !isJokeInFavorites;
      console.log(this.$store.state.userFavorites);
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 100px;
}

.select-holder {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  margin: auto;
}

select {
  padding: 0 20px;
  height: 52px;
  border-radius: 20px;
}
.joke-holder {
  display: flex;
  justify-content: center;
}
p {
  font-size: 22px;
  padding: 20px;
}
.red {
  color: #E4324C;
}

.grey {
  color: grey;
}
.star-icon {
  font-size: 48px;
  display: flex;
  width: 100px;
  align-self: flex-end;
  padding: 20px;
}
</style>