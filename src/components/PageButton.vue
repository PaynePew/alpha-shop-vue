<template>
  <section class="main__subNav">
    <div v-if="$route.name === 'Address'">
      <div class="btn__group--scale">
        <button @click="nextPage()" class="btn btn--scale btn--next">
          下一步 &#8594;
        </button>
      </div>
    </div>
    <div v-if="$route.name === 'Shipping'">
      <div class="btn__group--between">
        <button @click="prevPage()" class="btn btn--pre">&#8592; 上一步</button>
        <button @click="nextPage()" class="btn btn--next">
          下一步 &#8594;
        </button>
      </div>
    </div>
    <div v-if="$route.name === 'Checkout'">
      <div class="btn__group--between">
        <button @click="prevPage()" class="btn btn--pre">&#8592; 上一步</button>
        <button
          @click="
            updateInfo();
            showModal = true;
          "
          class="btn btn--next"
        >
          確認下單
        </button>
      </div>
    </div>
  </section>
  <CheckModal v-if="showModal" @close="showModal = false" />
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { SAVE_LOCAL_INFO, UPDATE_INFO } from '../store/mutation-types';
import CheckModal from './CheckModal.vue';

const props = defineProps({
  checkInfo: Object,
});

const store = useStore();
const router = useRouter();
const showModal = ref(false);

async function updateInfo() {
  await store.dispatch(UPDATE_INFO, props.checkInfo);
  await store.dispatch(SAVE_LOCAL_INFO);
}

function nextPage() {
  router.push({ name: router.currentRoute.value.meta.next });
  updateInfo();
}
function prevPage() {
  router.push({ name: router.currentRoute.value.meta.prev });
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_button"
</style>
