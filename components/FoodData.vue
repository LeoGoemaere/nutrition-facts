<template>
  <div class="fooddata">
    <div class="fooddata__input-container">
      <input :value="roundValue(value)" v-on:input="$emit('input', $event.target.value)" class="fooddata__input" type="number">
      <label class="fooddata__label">g</label>
    </div>
    <span class="fooddata__info">{{displayFoodInfos}}</span>
  </div>
</template>

<script>
import utilsMixin from '@/assets/js/mixins/utilsMixin';
export default {
  name: 'FoodData',
  mixins: [ utilsMixin ],
  props: {
    value: { type: Number, default: 0 },
    isCooked: { default: false }
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