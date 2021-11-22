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
        <button @click="nextPage()" class="btn btn--next">確認下單</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    prevPage() {
      this.$router.push({ name: this.$router.currentRoute.value.meta.prev });
    },
    nextPage() {
      this.$router.push({ name: this.$router.currentRoute.value.meta.next });
    },
  },
};
</script>
