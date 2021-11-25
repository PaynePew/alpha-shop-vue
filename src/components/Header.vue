<template>
  <section class="header">
    <nav class="navbar">
      <div class="logo navbar__logo">
        <a href="#" class="logo__link"
          ><img
            class="logo__img"
            src="../assets/img/logo@2x.png"
            alt="alpha shop"
        /></a>
      </div>
      <img
        class="navbar__hamburger"
        src="../assets/img/bx_bx-menu-alt-left@2x.png"
        alt=""
      />
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
        <img class="tool__icon" src="../assets/img/icon-search@2x.png" alt="" />
        <img class="tool__icon" src="../assets/img/icon-cart@2x.png" alt="" />
        <img
          class="tool__icon themeButton"
          src="../assets/img/icon-dark@2x.png"
          alt=""
        />
      </div>
    </nav>
  </section>
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
      <img class="tool__icon" src="../assets/img/icon-search@2x.png" alt="" />
      <img class="tool__icon" src="../assets/img/icon-cart@2x.png" alt="" />
      <img
        class="tool__icon themeButton"
        src="../assets/img/icon-dark@2x.png"
        alt=""
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/components/_navbar";
@import "@/assets/scss/components/_tool";
@import "@/assets/scss/components/_logo";
@import "@/assets/scss/components/_modal";

</style>
