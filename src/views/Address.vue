<template>
<section class="main__content">
  <form action="" class="normalForm">
    <p class="normalForm__title">寄送地址</p>
    <div class="normalForm__content">
      <div class="normalForm__combine--1-2">
        <div class="normalForm__group">
          <label class="normalForm__label" for="">稱謂</label>
          <select name="" class="normalForm__input">
            <option value="先生">先生</option>
            <option value="小姐">小姐</option>
          </select>
        </div>
        <div class="normalForm__group">
          <label for="" class="normalForm__label">姓名</label>
          <input
            type="text"
            placeholder="請輸入姓名"
            class="normalForm__input"
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
          />
        </div>
        <div class="normalForm__group">
          <label for="" class="normalForm__label">Email</label>
          <input
            type="text"
            placeholder="請輸入電子郵件"
            class="normalForm__input"
          />
        </div>
      </div>
      <div class="normalForm__combine--d-1-2">
        <div class="normalForm__group">
          <label for="" class="normalForm__label">縣市</label>
          <select
            type="text"
            placeholder="請選擇縣市"
            class="normalForm__input"
          >
            <option value="">台北市</option>
            <option value="">基隆市</option>
            <option value="">新北市</option>
            <option value="">桃園市</option>
            <option value="">新竹市</option>
            <option value="">新竹縣</option>
            <option value="">苗栗市</option>
            <option value="">台中縣</option>
            <option value="">彰化縣</option>
            <option value="">南投縣</option>
            <option value="">雲林縣</option>
            <option value="">嘉義市</option>
            <option value="">嘉義縣</option>
            <option value="">台南市</option>
            <option value="">高雄市</option>
            <option value="">屏東縣</option>
            <option value="">台東縣</option>
            <option value="">花蓮縣</option>
            <option value="">宜蘭縣</option>
            <option value="">澎湖縣</option>
            <option value="">金門縣</option>
            <option value="">連江縣</option>
          </select>
        </div>
        <div class="normalForm__group">
          <label for="" class="normalForm__label">地址</label>
          <input
            type="text"
            placeholder="請輸入地址"
            class="normalForm__input"
          />
        </div>
      </div>
    </div>
  </form>
</section>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>

</style>
