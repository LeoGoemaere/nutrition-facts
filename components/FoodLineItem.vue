<template>
  <div class="foodlineitem">
    <div class="foodlineitem__top">
      <p class="foodlineitem__name">{{ name }}</p>
      <button class="foodlineitem__edit" @click="$router.push({ name: 'foodModifier', query: { id } })">Edit</button>
    </div>
    <div class="foodlineitem__data">
      <FoodData :value="raw" :isCooked="false" />
      <FoodData :value="cooked" :isCooked="true" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodLineItem',
  props: {
    id: { type: String },
    name: { type: String },
    raw: { type: Number },
    cooked: { type: Number },
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/foodlineitem';
</style>