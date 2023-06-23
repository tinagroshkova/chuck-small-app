<template>
  <div class="container">
    <base-card
        v-for="joke in favorites"
        :key="joke.id"
        class="joke-card"
    >
      <h5>{{ joke.category }}</h5>
      <p>{{ joke.text }}</p>
      <i
          :class="['fas', 'fa-star', 'star-icon', {'red': joke.isInFavorites }]"
          @click="showDeleteConfirmation(joke)"
      ></i>
    </base-card>
    <base-modal
        :show="showModal"
        title="Are you sure you want to delete this joke?"
        @confirm="removeFromFavorites"
        @cancel="showModal = false">
    </base-modal>
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import BaseModal from "@/components/BaseModal.vue";

export default {
  components: {
    BaseCard,
    BaseModal
  },
  data() {
    return {
      favorites: [],
      showModal: false,
      selectedJoke: null
    };
  },
  created() {
    const storedFavorites = JSON.parse(localStorage.getItem("userFavorites"));
    if (storedFavorites) {
      this.favorites = storedFavorites;
    }
  },
  methods: {
    showDeleteConfirmation(joke) {
      this.selectedJoke = joke;
      this.showModal = true;
    },
    removeFromFavorites() {
      const joke = this.selectedJoke;
      const isJokeInFavorites = this.$store.state.userFavorites.find(
          (favorite) => favorite.id === joke.id
      );
      if (isJokeInFavorites) {
        this.$store.dispatch("removeJoke", joke.id);
      }
      this.favorites = this.favorites.filter(
          (favorite) => favorite.id !== joke.id
      );
      this.showModal = false;
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
  font-size: 42px;
  padding: 20px;
  align-self: flex-end;
  filter: drop-shadow(1px 1px 1px black);
}

h5 {
  padding-top: 20px;
}

</style>
