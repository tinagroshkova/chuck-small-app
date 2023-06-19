<template>
  <div>
    <h1> {{ title.toLocaleUpperCase() }}</h1>
    <base-button @click='navigateToJokes'>Get Jokes</base-button>
  </div>
</template>
<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  components: {
    BaseButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    navigateTo: {
      type: String,
      required: true
    }
  },
  methods: {
    navigateToJokes() {
      this.$router.push({ path: this.navigateTo });
    }
  }
};
</script>
<style scoped>
h1 {
  width: 400px;
  font-weight: 800;
}

</style>

