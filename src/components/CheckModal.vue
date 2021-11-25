<template>
  <transition name="checkModal">
    <div @click="$emit('close')" class="checkModal__mask">
      <div class="checkModal__wrapper">
        <div class="checkModal__container">
          <div class="checkModal__header">
            <slot> 購買產品 </slot>
          </div>
          <div
            v-for="(item, id) in products"
            :key="id"
            class="checkModal__body"
          >
            <slot> {{ item.product }} x {{ item.amount }}</slot>
          </div>
          <div class="checkModal__body">
            <slot> 總金額(含運費): ${{ numbersWithCommas(totalPrice) }} </slot>
          </div>
          <div class="checkModal__header">
            <slot> 付款資訊 </slot>
          </div>
          <div
            v-for="(item, key) in checkInfo"
            :key="key"
            class="checkModal__body"
          >
            <slot> {{ key }}:{{ item }} </slot>
          </div>
          <div class="checkModal__footer">
            <slot>
              是否送出訂單?
              <button class="checkModal__button" @click="$emit('close')">
                確認送出
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, toRefs } from 'vue';
import numbersWithCommas from '../utils/mixins';

const store = useStore();

const { products, totalPrice, shippingFee } = toRefs(store.state.cart);
const checkInfo = computed(() => store.state.checkInfo.info);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_checkModal";
</style>
