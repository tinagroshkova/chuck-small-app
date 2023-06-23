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
      <i :class="['fas', 'fa-star', 'star-icon', {'added': currentJoke.isInFavorites, 'toAdd': !currentJoke.isInFavorites}]"
         @click="toggleFavorites(currentJoke)"></i>
    </base-card>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import fetchData from '../utilities';
import BaseCard from '@/components/BaseCard.vue';
import { SITE_URL } from "@/constants";

export default {
  components: {
    BaseCard,
    BaseButton,
  },
  data() {
    return {
      categories: [],
      selectedCategory: '',
      currentJoke: {
        id: '',
        text: '',
        category: '',
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
      const jsonData = await fetchData(`${SITE_URL}/categories`);
      this.categories = jsonData;
    },
    async fetchRandomJoke() {
      const url = this.selectedCategory
          ? `${SITE_URL}/random?category=${this.selectedCategory}`
          : `${SITE_URL}/random`;
      const jsonData = await fetchData(url);
      this.currentJoke.id = jsonData.id;
      this.currentJoke.text = jsonData.value;
      this.currentJoke.isInFavorites = this.isJokeInFavorites(jsonData.id);
      this.currentJoke.category = this.selectedCategory;
    },

    toggleFavorites(joke) {
      const isJokeInFavorites = this.isJokeInFavorites(joke.id);
      if (isJokeInFavorites) {
        this.$store.dispatch('removeJoke', joke.id);
      } else {
        const jokeToAdd = {...joke, isInFavorites: true};
        this.$store.dispatch('addJoke', jokeToAdd);
      }
      this.currentJoke.isInFavorites = !isJokeInFavorites;
    },

    isJokeInFavorites(jokeId) {
      return this.$store.state.userFavorites.some(favorite => favorite.id === jokeId);
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
  box-shadow: 10px 10px 6px -6px black;
}
.joke-holder {
  display: flex;
  justify-content: center;
}
p {
  font-size: 22px;
  padding: 20px;
}
.added {
  color: #E4324C;
}
.toAdd {
  color: grey;
}
.star-icon {
  font-size: 48px;
  display: flex;
  width: 100px;
  align-self: flex-end;
  padding: 20px;
  filter: drop-shadow(1px 1px 1px black);
}
</style>
