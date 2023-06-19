<template>
  <img :src="imageSrc" :alt="altText" />
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: '',
    },
  },
};
</script>
<style scoped>
img {
  width: 800px;
  height: auto;
  border-radius: 50px;
  box-shadow: 0 10px 6px -6px black;
}
</style>
