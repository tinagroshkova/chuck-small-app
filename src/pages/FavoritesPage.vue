<template>
  <div class="container">
    <base-card v-for="joke in favorites" :key="joke.id" class="joke-card">
      <p>{{ joke.text }}</p>
      <i :class="['fas', 'fa-star', 'star-icon', {'red': joke.isInFavorites }]"
         @click="removeFromFavorites(joke)"></i>
    </base-card>
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";

export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      favorites: [],
    };
  },
  created() {
    const storedFavorites = JSON.parse(localStorage.getItem("userFavorites"));
    if (storedFavorites) {
      this.favorites = storedFavorites;
    }
  },
  methods: {
    removeFromFavorites(joke) {
      const isJokeInFavorites = this.$store.state.userFavorites.find(
          (favorite) => favorite.id === joke.id
      );
      if (isJokeInFavorites) {
        this.$store.commit("removeJoke", joke.id);
      }
      this.favorites = this.favorites.filter(
          (favorite) => favorite.id !== joke.id
      );
      console.log(this.$store.state.userFavorites);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;

}
.joke-card {
  display: flex;
  width: 300px;
  height: auto;
  margin: 20px;
}

p {
  text-align: center;
  padding: 20px;
}

.red {
  color: #E4324C;
}

.star-icon {
  font-size: 48px;
  padding: 20px;
  align-self: flex-end;
}
</style>