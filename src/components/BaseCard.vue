<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  width: 600px;
  height: auto;
  border-radius: 20px;
  box-shadow: 10px 10px 6px -6px black;
  background-color: #E1E1E1;
  transition: all 1s;
}

.container:hover {
  transform: scale(1.2);
  background-color: white;
}

</style>