<template>
  <button :class='mode'>
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ['mode']
};
</script>

<style scoped>

button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #C9D9FD;
  border: 1px solid #C9D9FD;
  color: #212529;
  cursor: pointer;
  box-shadow: 0 8px 6px -6px black;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 700;
}

button:hover,
button:active {
  background-color: #212529;
  border: 1px solid #212529;
  color: white;
}

</style>