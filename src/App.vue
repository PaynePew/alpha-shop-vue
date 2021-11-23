<template>
  <Header />
  <section class="main">
    <section class="main__container">
      <Stepper />
      <router-view />
      <Cart />
      <router-view
      @shipping="handleShipping"
      @after-submit="handleSubmit"
      />
      <Cart
        :cart-store="cartStore"
        :total-price="totalPrice"
        :shipping-fee="shippingFee"
        @add-amount="handleAddAmount"
        @down-amount="handleDownAmount"
      />
      <PageButton />
    </section>
  </section>
  <Footer />
</template>

<script>
const dummyData = [
  {
    id: 1,
    product: '破壞補丁修身牛仔褲',
    price: 3999,
    picture: 'item-1@2x.png',
    amount: 1,
  },
  {
    id: 2,
    product: '刷色直筒牛仔褲',
    price: 1299,
    picture: 'item-2@2x.png',
    amount: 1,
  },
];
</script>

<script setup>
import {
  watch, ref, reactive, onMounted, toRefs,
} from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Stepper from './components/Stepper.vue';
import Cart from './components/Cart.vue';
import PageButton from './components/PageButton.vue';

export default {
  components: {
    Header,
    Footer,
    Stepper,
    Cart,
    PageButton,
// Reactive Data
const cartStore = ref([]);
const priceState = reactive({
  shippingFee: 0,
  totalPrice: 0,
});
const { shippingFee, totalPrice } = toRefs(priceState);

// Function Section
function handleAddAmount(itemId) {
  cartStore.value.forEach((_el) => (_el.id === itemId ? (_el.amount += 1) : _el));
}
function handleDownAmount(itemId) {
  cartStore.value.forEach((_el) => {
    if (_el.id === itemId && _el.amount > 0) {
      _el.amount -= 1;
    }
  });
}
function handleTotalPrice() {
  return (
    cartStore.value.reduce((a, b) => a.amount * a.price + b.amount * b.price)
    + shippingFee.value
  );
}
function handleShipping(fee) {
  shippingFee.value = fee;
}
// LifeCycle Section
onMounted(async () => {
  // 模擬fetch data
  const response = await dummyData;
  cartStore.value = await response;
});

// Watch List
watch(
  [cartStore, shippingFee],
  () => {
    totalPrice.value = handleTotalPrice();
  },
};
  { deep: true },
);
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
