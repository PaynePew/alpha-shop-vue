<template>
  <section class="main__sub">
    <!-- cart start from here! -->
    <div class="cart">
      <p class="cart__title">購物籃</p>
      <!-- :key不該使用Object.key，但因為是dummydata不操作，很髒但方便 -->
      <div v-for="(item, id) in products" :key="id" class="cart__item">
        <div class="cart__imgFrame">
          <img
            :src="require(`@/assets/img/${item.picture}`)"
            alt=""
            class="cart__img"
          />
        </div>
        <div class="cart__content">
          <div class="cart__des">
            <p class="cart__name">{{ item.product }}</p>
            <div class="cart__count">
              <span @click="downAmount(id)" class="cart__down">&#8722;</span>
              <span class="cart__number">{{ item.amount }}</span>
              <span @click="addAmount(id)" class="cart__up">&#43;</span>
            </div>
          </div>
          <div class="cart__price">${{ numbersWithCommas(item.price) }}</div>
        </div>
      </div>
      <div class="cart__footer">
        <span class="cart__footerName">運費</span>
        <span class="cart__price">{{ freeOrNot }}</span>
      </div>
      <div class="cart__footer">
        <span class="cart__footerName">小計</span>
        <span class="cart__price">${{ numbersWithCommas(totalPrice) }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  computed, onMounted, watch, toRefs,
} from 'vue';
import { useStore } from 'vuex';
import numbersWithCommas from '../utils/mixins';
import {
  ADD_AMOUNT, DOWN_AMOUNT, GET_PRODUCT, SAVE_LOCAL_CART, UPDATE_PRICE,
} from '../store/mutation-types';

const store = useStore();
const { products, totalPrice, shippingFee } = toRefs(store.state.cart);

async function handleTotalPrice() {
  const price = await store.getters.GET_PRODUCT.reduce(
    (a, b) => a.amount * a.price + b.amount * b.price,
  )
    + shippingFee.value;
  await store.dispatch(UPDATE_PRICE, price);
  await store.dispatch(SAVE_LOCAL_CART);
}
async function addAmount(id) {
  await store.dispatch(ADD_AMOUNT, id);
}
async function downAmount(id) {
  await store.dispatch(DOWN_AMOUNT, id);
}
const freeOrNot = computed(() => (!shippingFee.value ? '免費' : `$${shippingFee.value}`));

onMounted(async () => {
  await handleTotalPrice();
});

watch(([products, shippingFee]), () => {
  handleTotalPrice();
}, { deep: true });

</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_cart"
</style>
