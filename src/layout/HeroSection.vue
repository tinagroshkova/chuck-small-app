<template>
  <img :src="imageSrc" :alt="altText"  />
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
  width: 600px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 6px -6px black;
  object-fit: cover;
  transition: all 1s;
}
img:hover {
  transform: scale(1.1);
}
</style>
