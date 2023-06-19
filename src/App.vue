<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from '@/layout/TheHeader.vue';
export default {
  components: {
    TheHeader,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: grey;
}
</style>