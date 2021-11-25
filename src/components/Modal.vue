<template>
  <section class="modal">
    <div class="navbar__collapse">
      <ul class="navbar__list">
        <li class="navbar__item">
          <a class="navbar__link" href="#">男款</a>
        </li>
        <li class="navbar__item">
          <a class="navbar__link" href="#">女款</a>
        </li>
        <li class="navbar__item">
          <a class="navbar__link" href="#">最新消息</a>
        </li>
        <li class="navbar__item">
          <a class="navbar__link" href="#">客製商品</a>
        </li>
        <li class="navbar__item">
          <a class="navbar__link" href="#">聯絡我們</a>
        </li>
      </ul>
    </div>
    <div class="tool navbar__tool">
      <img class="tool__icon" src="./src/img/icon-search@2x.png" alt="" />
      <img class="tool__icon" src="./src/img/icon-cart@2x.png" alt="" />
      <img
        class="tool__icon themeButton"
        src="./src/img/icon-dark@2x.png"
        alt=""
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/_navbar";
@import "@/assets/scss/components/_tool"
</style>
