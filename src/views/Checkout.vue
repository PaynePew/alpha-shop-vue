<template>
  <section class="main__content">
    <form action="" class="normalForm">
            <p class="normalForm__title">付款資訊</p>
            <div class="normalForm__content">
              <div class="normalForm__group">
                <label for="" class="normalForm__label">持卡人姓名</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  class="normalForm__input"
                  v-model="checkInfo.cardHolder"
                />
              </div>
              <div class="normalForm__group">
                <label for="" class="normalForm__label">卡號</label>
                <input
                  type="text"
                  placeholder="1111 2222 3333 4444"
                  class="normalForm__input"
                  v-model="checkInfo.cardNumber"
                />
              </div>
              <div class="normalForm__combine--1-1">
                <div class="normalForm__group">
                  <label for="" class="normalForm__label">有效期限</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    class="normalForm__input"
                    v-model="checkInfo.expired"
                  />
                </div>
                <div class="normalForm__group">
                  <label for="" class="normalForm__label">CVC/CCV</label>
                  <input
                    type="text"
                    placeholder="123"
                    class="normalForm__input"
                    v-model="checkInfo.valid"
                  />
                </div>
              </div>
            </div>
          </form>
  </section>
  <PageButton :check-info="checkInfo"/>
</template>

<script setup>
import { useStore } from 'vuex';
import PageButton from '../components/PageButton.vue';

const store = useStore();
// 初始info再宣告checkInfo不與Vuex響應，update時再做更新
const initCheckInfo = store.state.checkInfo.info;
const checkInfo = { ...initCheckInfo };
</script>
