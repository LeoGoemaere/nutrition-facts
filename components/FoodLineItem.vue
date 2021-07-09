<template>
  <div class="foodlineitem">
    <div class="foodlineitem__top">
      <p class="foodlineitem__name">{{ name }}</p>
      <button class="foodlineitem__edit" @click="$router.push({ name: 'foodModifier', query: { id } })">Edit</button>
    </div>
    <div class="foodlineitem__data">
      <FoodData :value="rawValue" @input="convertCookedFromRaw" :isCooked="false" />
      <FoodData :value="cookedValue" @input="convertRawFromCooked" :isCooked="true" />
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
  },
  data() {
    return {
      rawValue: null,
      cookedValue: null
    }
  },
  mounted() {
    this.rawValue = this.raw;
    this.cookedValue = this.cooked;
  },
  methods: {
    convertCookedFromRaw(newValue) {
      const oldRawValue = this.rawValue;
      const newRawValue = Number(newValue);
      this.rawValue = newRawValue;
      this.cookedValue = (newRawValue * this.cookedValue) / oldRawValue;
    },
    convertRawFromCooked(newValue) {
      const oldCookedValue = this.cookedValue;
      const newCookedValue = Number(newValue);
      this.cookedValue = newCookedValue;
      this.rawValue = (newCookedValue * this.rawValue) / oldCookedValue;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/foodlineitem';
</style>