<template>
<Stepper :step="1"/>
  <section class="main__content">
    <form action="" class="normalForm">
      <p class="normalForm__title">寄送地址</p>
      <div class="normalForm__content">
        <div class="normalForm__combine--1-2">
          <div class="normalForm__group">
            <label class="normalForm__label" for="">稱謂</label>
            <select name="" class="normalForm__input" v-model="checkInfo.title">
              <option selected value="先生">先生</option>
              <option value="小姐">小姐</option>
            </select>
          </div>
          <div class="normalForm__group">
            <label for="" class="normalForm__label">姓名</label>
            <input
            type="text"
              placeholder="請輸入姓名"
              class="normalForm__input"
              v-model="checkInfo.name"
            />
          </div>
        </div>
        <div class="normalForm__combine--d-1-1">
          <div class="normalForm__group">
            <label for="" class="normalForm__label">電話</label>
            <input
              type="text"
              placeholder="請輸入行動電話"
              class="normalForm__input"
              v-model="checkInfo.phone"
            />
          </div>
          <div class="normalForm__group">
            <label for="" class="normalForm__label">Email</label>
            <input
              type="text"
              placeholder="請輸入電子郵件"
              class="normalForm__input"
              v-model="checkInfo.email"
            />
          </div>
        </div>
        <div class="normalForm__combine--d-1-2">
          <div class="normalForm__group">
            <label for="" class="normalForm__label">縣市</label>
            <select
              placeholder="請選擇縣市"
              class="normalForm__input"
              v-model="checkInfo.state"
            >
              <option value="台北市">台北市</option>
              <option value="基隆市">基隆市</option>
              <option value="新北市">新北市</option>
              <option value="桃園市">桃園市</option>
              <option value="新竹市">新竹市</option>
              <option value="新竹縣">新竹縣</option>
              <option value="苗栗市">苗栗市</option>
              <option value="台中縣">台中縣</option>
              <option value="彰化縣">彰化縣</option>
              <option value="南投縣">南投縣</option>
              <option value="雲林縣">雲林縣</option>
              <option value="嘉義市">嘉義市</option>
              <option value="嘉義縣">嘉義縣</option>
              <option value="台南市">台南市</option>
              <option value="高雄市">高雄市</option>
              <option value="屏東縣">屏東縣</option>
              <option value="台東縣">台東縣</option>
              <option value="花蓮縣">花蓮縣</option>
              <option value="宜蘭縣">宜蘭縣</option>
              <option value="澎湖縣">澎湖縣</option>
              <option value="金門縣">金門縣</option>
              <option value="連江縣">連江縣</option>
            </select>
          </div>
          <div class="normalForm__group">
            <label for="" class="normalForm__label">地址</label>
            <input
              type="text"
              placeholder="請輸入地址"
              class="normalForm__input"
              v-model="checkInfo.address"
            />
          </div>
        </div>
      </div>
    </form>
  </section>
  <PageButton :check-info="checkInfo" />
</template>

<script setup>
import { useStore } from 'vuex';
import PageButton from '../components/PageButton.vue';
import Stepper from '../components/Stepper.vue';

const store = useStore();
// 初始info再宣告checkInfo不與Vuex響應，update時再做更新
const initCheckInfo = store.state.checkInfo.info;
const checkInfo = { ...initCheckInfo };
</script>
