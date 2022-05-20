<template>
  <nav>
    <router-link to="/">Home</router-link>                                          &nbsp;&nbsp;
    <router-link to="/about">About</router-link>                                    &nbsp;&nbsp;
    <router-link to="/databinding">Data Binding</router-link>                       &nbsp;&nbsp;
    <router-link to="/databinding-html">Data Binding Html</router-link>             <br>
    -------------------------------------------------------------------------       <br>
    <router-link to="/databinding-input-text">Data Binding Text</router-link>       &nbsp;&nbsp;
    <router-link to="/databinding-input-number">Data Binding Number</router-link>   &nbsp;&nbsp;
    <router-link to="/databinding-textarea">Data Binding Textarea</router-link>     &nbsp;&nbsp;
    <router-link to="/databinding-checkbox">Data Binding checkbox</router-link>     &nbsp;&nbsp;
    <router-link to="/databinding-checkbox2">Data Binding checkbox2</router-link>   &nbsp;&nbsp;
    <router-link to="/databinding-radio">Data Binding Radio</router-link>           &nbsp;&nbsp;
    <router-link to="/databinding-attribute">Data Binding Attribute</router-link>   &nbsp;&nbsp;
    <router-link to="/databinding-button">Data Binding Button</router-link>         <br>
    -------------------------------------------------------------------------       <br>
    <router-link to="/databinding-list">Data Binding List</router-link>             &nbsp;&nbsp;
    <router-link to="/databinding-list2">Data Binding List2</router-link>           <br>
    -------------------------------------------------------------------------       <br>
    <router-link to="/nested-component">NestedComponent</router-link>             &nbsp;&nbsp;
    <router-link to="/parent-component">ParentComponent</router-link>             &nbsp;&nbsp;
    <router-link to="/parent-component2">ParentComponent2</router-link>             &nbsp;&nbsp;
    <router-link to="/parent-component3">ParentComponent3</router-link>             <br>
    -------------------------------------------------------------------------       <br>
    <router-link to="/slot-modal">Slot Modal</router-link>             &nbsp;&nbsp;


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
<script>export default {
  components: {}
}
</script>