<template>
  <div class="foodlineitem">
    <div class="foodlineitem__top">
      <p class="foodlineitem__name">{{ foodData.name }}</p>
      <div class="foodlineitem__nutriments">
        <span v-if="foodData.carbs" class="foodlineitem__nutriment carbs">c.{{roundValue(getNutrimentValue('carbs'))}}g</span>
        <span v-if="foodData.proteins" class="foodlineitem__nutriment proteins">p.{{roundValue(getNutrimentValue('proteins'))}}g</span>
        <span v-if="foodData.fats" class="foodlineitem__nutriment fats">f.{{roundValue(getNutrimentValue('fats'))}}g</span>
        <span v-if="foodData.calories" class="foodlineitem__nutriment calories">cal.{{roundValue(getNutrimentValue('calories'))}}g</span>
        <button class="foodlineitem__edit" @click="$router.push({ name: 'foodModifier', query: { id: foodData.id } })"><i class="far fa-edit"></i></button>
        <button @click="openDeleteNotification" class="foodlineitem__delete"><i class="far fa-trash-alt"></i></button>
      </div>
    </div>
    <div class="foodlineitem__data">
      <FoodData :value="rawValue" @input="convertCookedFromRaw" :isCooked="false" />
      <FoodData :value="cookedValue" @input="convertRawFromCooked" :isCooked="true" />
    </div>
    <Notification
      :isActive="isDeleteNotificationOpen"
      @canceled="closeDeleteNotification"
      @validated="deleteLineItem"
      :validateButton="{ text: 'Supprimer', modifier: 'danger' }"
      :cancelButton="{ text: 'Annuler' }"
    />
  </div>
</template>

<script>
import utilsMixin from '@/assets/js/mixins/utilsMixin';
import Notification from './Notification.vue';

export default {
  components: { Notification },
  name: 'FoodLineItem',
  mixins: [ utilsMixin ],
  props: {
    foodData: { type: Object },
    raw: { type: Number },
    cooked: { type: Number },
  },
  data() {
    return {
      rawValue: null,
      cookedValue: null,
      isDeleteNotificationOpen: false
    }
  },
  mounted() {
    this.rawValue = this.raw;
    this.cookedValue = this.cooked;
  },
  methods: {
    convertCookedFromRaw(newValue) {
      if (Number(newValue) === 0 || !newValue) {
        this.rawValue = this.foodData.quantities.raw;
        this.cookedValue = this.foodData.quantities.cooked;
      } else {
        const oldRawValue = this.rawValue;
        const newRawValue = Number(newValue);
        this.rawValue = newRawValue;
        this.cookedValue = (newRawValue * this.cookedValue) / oldRawValue;
      }
    },
    convertRawFromCooked(newValue) {
      if (newValue === 0 || !newValue) {
        this.rawValue = this.foodData.quantities.raw;
        this.cookedValue = this.foodData.quantities.cooked;
      } else {
        const oldCookedValue = this.cookedValue;
        const newCookedValue = Number(newValue);
        this.cookedValue = newCookedValue;
        this.rawValue = (newCookedValue * this.rawValue) / oldCookedValue;
      }
    },
    openDeleteNotification() {
      this.isDeleteNotificationOpen = true;
    },
    closeDeleteNotification() {
      this.isDeleteNotificationOpen = false;
    },
    deleteLineItem() {
      this.$store.dispatch('deleteFood', this.foodData)
    }
  },
  computed: {
    getNutrimentValue() {
      return (nutriment) => {
        switch (nutriment) {
          case 'carbs':
            return (this.rawValue * Number(this.foodData.carbs)) / 100;
            break;
          case 'proteins':
            return (this.rawValue * Number(this.foodData.proteins)) / 100;
            break;
          case 'fats':
            return (this.rawValue * Number(this.foodData.fats)) / 100;
            break;
          case 'calories':
            return (this.rawValue * Number(this.foodData.calories)) / 100;
            break;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/foodlineitem';
</style>