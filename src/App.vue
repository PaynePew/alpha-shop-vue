<template>
  <Header />
  <section class="main">
    <section class="main__container">
      <Stepper />
      <router-view />
      <Cart />
    </section>
  </section>
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Stepper from './components/Stepper.vue';
import Cart from './components/Cart.vue';

</script>

<style lang="scss" >
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
