<template>
  <div class="main__top">
    <p class="main__title">結帳</p>
  </div>
  <section class="stepper main__stepper">
    <div class="stepper__container">
      <div class="stepper__item">
        <span class="stepper__number stepper__number--active">1</span>
        <span class="stepper__des stepper__des--active">寄送地址</span>
      </div>
      <span class="stepper__bar stepper__bar--active"></span>
      <div class="stepper__item">
        <span class="stepper__number stepper__number--disable">2</span>
        <span class="stepper__des stepper__des--disable">運送方式</span>
      </div>
      <span class="stepper__bar stepper__bar--disable"></span>
      <div class="stepper__item">
        <span class="stepper__number stepper__number--disable">3</span>
        <span class="stepper__des stepper__des--disable">付款資訊</span>
      </div>
    </div>
  </section>
</template>
