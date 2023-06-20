<template>
  <button class='btn btn-outline-primary'>
    <slot></slot>
  </button>
</template>

<style scoped>

button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #E4324C;
  border: 1px solid #E4324C;
  color: white;
  cursor: pointer;
  box-shadow: 0 8px 6px -6px black;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0;
}

button:hover,
button:active {
  background-color: #c52c42;
  border: 1px solid #c52c42;
  color: white;
}
</style>