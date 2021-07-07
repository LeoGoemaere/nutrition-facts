<template>
  <div class="fooddata">
    <div class="fooddata__input-container">
      <input class="fooddata__input" type="number">
      <label class="fooddata__label">g</label>
    </div>
    <span class="fooddata__info">{{displayFoodInfos}}</span>
  </div>
</template>

<script>
export default {
  name: 'FoodData',
  props: {
    isCooked: false
  },
  computed: {
    displayFoodInfos() {
      return this.isCooked ? 'cuit' : 'cru';
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/fooddata';
</style>