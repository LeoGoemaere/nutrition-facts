<template>
  <div class="fooddata">
    <div class="fooddata__input-container">
      <input :value="roundValue(value)" @change="$emit('input', $event.target.value)" class="fooddata__input" type="number">
      <label class="fooddata__label">g</label>
    </div>
    <span v-if="!this.isCooked" class="fooddata__info"><i class="far fa-snowflake"></i></span>
    <span v-else class="fooddata__info"><i class="fas fa-fire"></i></span>
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
      return this.isCooked ? 'cooked' : 'raw';
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/fooddata';
</style>