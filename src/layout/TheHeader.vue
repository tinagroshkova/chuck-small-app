<template>
  <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
    <div class='container-fluid'>
      <ul class='navbar-nav'>
        <a class='navbar-brand' href='#'>
          <img src='../../public/images/logo1.png'>
        </a>
        <router-link to='/' class='nav-item nav-link' >Home</router-link>
        <router-link to='/jokes' class='nav-item nav-link'>Jokes</router-link>
        <router-link to='favorites' class='nav-item nav-link'>Favorites</router-link>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
ul {
  align-items: center;
}

.nav-link {
  margin: 0 10px;
  border-radius: 20px;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.1em;
}

img {
  width: 50px;
  height: auto;
}
.router-link-active.router-link-exact-active {
  background-color: #E4324C;
  color: white;
  text-shadow: 2px 2px #424e52;
}
</style>