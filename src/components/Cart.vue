<template>
  <section class="main__sub">
    <!-- cart start from here! -->
    <div class="cart">
      <p class="cart__title">購物籃</p>
      <!-- :key不該使用id，但因為是dummydata不操作，很髒但方便 -->
      <div v-for="item in cartStore" :key="item.id" class="cart__item">
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
              <span @click="$emit('downAmount', item.id)" class="cart__down"
                >&#8722;</span
              >
              <span class="cart__number">{{ item.amount }}</span>
              <span @click="$emit('addAmount', item.id)" class="cart__up"
                >&#43;</span
              >
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
import { computed, toRef } from 'vue';
import numbersWithCommas from '../utils/mixins';

const props = defineProps({
  cartStore: Array,
  totalPrice: Number,
  shippingFee: Number,
});
const emit = defineEmits(['addAmount', 'downAmount']);

const shippingFee = toRef(props, 'shippingFee');
const freeOrNot = computed(() => (!shippingFee.value ? '免費' : `$${shippingFee.value}`));

</script>
