<template>
  <section class="main__sub">
    <!-- cart start from here! -->
    <div class="cart">
      <p class="cart__title">購物籃</p>
      <div class="cart__item">
        <div class="cart__imgFrame">
          <img src="${el.picture}" alt="" class="cart__img" />
        </div>
        <div class="cart__content">
          <div class="cart__des">
            <p class="cart__name">${el.product}</p>
            <div class="cart__count" id="${el.id}">
              <span class="cart__down">&#8722;</span>
              <span class="cart__number">${el.amount}</span>
              <span class="cart__up">&#43;</span>
            </div>
          </div>
          <div class="cart__price">$${numbersWithCommas(el.price)}</div>
        </div>
      </div>
      <div class="cart__footer">
        <span class="cart__footerName">運費</span>
        <span class="cart__price">${shippingFee}</span>
      </div>
      <div class="cart__footer">
        <span class="cart__footerName">小計</span>
        <span class="cart__price">$${numbersWithCommas(totalPrice)}</span>
      </div>
    </div>
  </section>
</template>
