<template>
  <base-card v-for='joke in favorites' :key='joke.id' class='joke-card'>
    <p>{{ joke.text }}</p>
    <base-button @click='removeFromFavorites(joke)'>Remove</base-button>
    <menu-icon fill-color='red' class='star-icon'></menu-icon>
  </base-card>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import BaseCard from '@/components/BaseCard.vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default {
  components: {
    BaseCard,
    BaseButton,
    MenuIcon
  },
  data() {
    return {
      favorites: []
    };
  },
  created() {
    const storedFavorites = JSON.parse(localStorage.getItem('userFavorites'));
    if (storedFavorites) {
      this.favorites = storedFavorites;
    }
  },
  methods: {
    removeFromFavorites(joke) {
      const isJokeInFavorites = this.$store.state.userFavorites.find(favorite => favorite.id === joke.id);
      if (isJokeInFavorites) {
        this.$store.commit('removeJoke', joke.id);
      }
      this.favorites = this.favorites.filter(favorite => favorite.id !== joke.id);
      console.log(this.$store.state.userFavorites);
    }
  }
};
</script>

<style scoped>
.joke-card {
  border-radius: 50px;
  box-shadow: 10px 10px 10px red;
}

.joke-content {
  display: flex;
  align-items: center;
}

.star-icon {
  height: 1.5em;
  width: 1.5em;
  margin-left: 1em;
  fill: red;
}
</style>