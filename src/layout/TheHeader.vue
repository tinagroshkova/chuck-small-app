<template>
  <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
    <div class='container-fluid'>
      <ul class='navbar-nav'>
        <a class='navbar-brand' href='#'>
          <img src='../../public/images/logo.png'>
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
a {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.1em;
}
.nav-link {
  margin: 0 10px;
}

img {
  width: 70px;
  height: auto;
}
.router-link-active.router-link-exact-active.nav-item.nav-link {
  background-color: #E4324C;
  border-radius: 20px;
  color: white;
}
</style>