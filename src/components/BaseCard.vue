<template>
  <div class='container'>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  width: 600px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 6px -6px black;
  background-color: #E1E1E1;
  transition: all 1s;
}

div:hover {
  transform: scale(1.1);
  background-color: white;
}
</style>
