<template>
  <div class="main__top">
    <p class="main__title">結帳</p>
  </div>
  <section class="stepper main__stepper">
    <div class="stepper__container">
      <div class="stepper__item">
        <span
          class="stepper__number"
          :class="{
            'stepper__number--active': step === 1,
            'stepper__number--done': step > 1,
          }"
          ><img v-if="step>1" class="stepper__img" src="../assets/img/VectorcheckMark@2x.png"/>
          {{ stepHelper(1) }}
        </span>
        <span class="stepper__des">寄送地址</span>
      </div>
      <span class="stepper__bar stepper__bar--active"></span>
      <div class="stepper__item">
        <span
          class="stepper__number"
          :class="{
            'stepper__number--disable': step === 1,
            'stepper__number--active': step === 2,
            'stepper__number--done': step === 3,
          }"
          ><img v-if="step>2" class="stepper__img" src="../assets/img/VectorcheckMark@2x.png"/>
          {{ stepHelper(2) }}</span
        >
        <span
          class="stepper__des"
          :class="{ 'stepper__des--disable': step < 2 }"
          >運送方式</span
        >
      </div>
      <span
        class="stepper__bar"
        :class="{
          'stepper__bar--disable': step < 2,
          'stepper__bar--active': step > 1,
        }"
      ></span>
      <div class="stepper__item">
        <span
          class="stepper__number"
          :class="{
            'stepper__number--disable': step < 3,
            'stepper__number--active': step === 3,
          }"
          >{{ stepHelper(3) }}</span
        >
        <span
          class="stepper__des"
          :class="{ 'stepper__des--disable': step < 3 }"
          >付款資訊</span
        >
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  step: Number,
});

function stepHelper(number) {
  return number < props.step ? null : number;
}
</script>

<style scoped>
</style>
