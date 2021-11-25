<template>
  <transition name="modal">
    <div @click="$emit('close')" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"> 購買產品 </slot>
          </div>

          <div v-for="(item, id) in products" :key="id" class="modal-body">
            <slot name="body"> {{ item.product }} x {{ item.amount }}</slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              總金額(含運費): ${{ numbersWithCommas(totalPrice) }}
            </slot>
          </div>

          <div class="modal-header">
            <slot name="header"> 付款資訊 </slot>
          </div>

          <div v-for="(item, key) in checkInfo" :key="key" class="modal-body">
            <slot name="body"> {{ key }}:{{ item }} </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              是否送出訂單?
              <button class="modal-default-button" @click="$emit('close')">
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

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
