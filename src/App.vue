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
import { useStore } from 'vuex';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Cart from './components/Cart.vue';
import { LOAD_LOCAL_CART, LOAD_LOCAL_INFO } from './store/mutation-types';

const store = useStore();
store.dispatch(LOAD_LOCAL_INFO);
store.dispatch(LOAD_LOCAL_CART);

</script>

<style lang="scss" >
@import './assets/scss/vendor/_vendor-dir'

</style>
