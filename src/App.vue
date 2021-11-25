<template>
  <Header />
  <section class="main">
    <section class="main__container">
      <router-view />
      <Cart />
    </section>
  </section>
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Cart from './components/Cart.vue';

</script>

<style lang="scss" >
@import './assets/scss/vendor/_vendor-dir'

</style>
