<template>
<Stepper :step="2"/>
  <section class="main__content">
    <div class="radioForm">
      <p class="radioForm__title">運送方式</p>
      <div class="radioForm__item" @click="updateShipping(0)">
        <label for="customRadio-normal" class="radioForm__container">
          <input
            id="customRadio-normal"
            type="radio"
            class="radioForm__input"
            name="shipping"
          />
          <span class="radioForm__radio"></span>
          <div class="radioForm__content">
            <div class="radioForm__des">
              <span class="radioForm__text">標準運送</span>
              <span class="radioForm__text--small">約3~7個工作天</span>
            </div>
            <span class="radioForm__text--price">免費</span>
          </div>
          <div class="radioForm__focusBorder"></div>
        </label>
      </div>
      <div class="radioForm__item" @click="updateShipping(500)">
        <label for="customRadio-DHL" class="radioForm__container">
          <input
            id="customRadio-DHL"
            type="radio"
            class="radioForm__input"
            name="shipping"
          />
          <span class="radioForm__radio"></span>
          <div class="radioForm__content">
            <div class="radioForm__des">
              <span class="radioForm__text--bold">DHL貨運</span>
              <span class="radioForm__text--small">48小時內送達</span>
            </div>
            <span class="radioForm__text--price">$500</span>
          </div>
          <div class="radioForm__focusBorder"></div>
        </label>
      </div>
    </div>
  </section>
  <PageButton />
</template>

<script setup>
import { useStore } from 'vuex';
import Stepper from '../components/Stepper.vue';
import PageButton from '../components/PageButton.vue';
import { UPDATE_SHIPPING } from '../store/mutation-types';

const store = useStore();

function updateShipping(charge) {
  store.dispatch(UPDATE_SHIPPING, charge);
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_radioForm"
</style>
