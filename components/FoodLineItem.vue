<template>
  <div class="foodlineitem">
    <div class="foodlineitem__top">
      <p class="foodlineitem__name">Riz</p>
    </div>
    <div class="foodlineitem__data">
      <FoodData :isCooked="false" />
      <FoodData :isCooked="true" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodLineItem'
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/foodlineitem';
</style>