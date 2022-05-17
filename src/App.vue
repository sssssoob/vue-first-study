<template>
  <nav>
    <router-link to="/">Home</router-link>                                       &nbsp;&nbsp;
    <router-link to="/about">About</router-link>                                 &nbsp;&nbsp;
    <router-link to="/databinding">Data Binding</router-link>                    &nbsp;&nbsp;
    <router-link to="/databinding-html">Data Binding Html</router-link>          &nbsp;&nbsp;
    <router-link to="/databinding-input-text">Data Binding Text</router-link>    &nbsp;&nbsp;
    <router-link to="/databinding-input-number">Data Binding Number</router-link>  &nbsp;&nbsp;
    <router-link to="/databinding-textarea">Data Binding Textarea</router-link>  &nbsp;&nbsp;
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
