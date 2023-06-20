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
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #666666 !important;
  font-family: 'Staatliches', cursive;
}

</style>