<template>
  <div>
    <h1> {{ description }}</h1>
    <base-button @click='navigateToJokes'>Get Jokes</base-button>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
export default {
  components: {
    BaseButton,
  },
  props: {
    description: {
      type: String,
      required: true,
    },
    navigateTo: {
      type: String,
      required: true,
    },
  },
  methods: {
    navigateToJokes() {
      this.$router.push({ path: this.navigateTo });
    },
  },
};
</script>

<style scoped>
div {
  margin: 0 40px;
}
h1 {
  display: flex;
  font-weight: 700;
  font-size: 38px;
  width: 340px;
}

</style>