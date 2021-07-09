<template>
  <div class="form site__content">
    <div class="form__row">
      <label class="form__label">Name</label>
      <input v-model="form.name" class="form__input" type="text" placeholder="Rice, Pastes, etc.">
    </div>
    <div class="form__row">
      <label class="form__label">Brand</label>
      <input v-model="form.brand" class="form__input" type="text" placeholder="Barilla, taureau ailé, etc.">
    </div>
    <div class="form__row">
      <label class="form__label">Quantities</label>
      <div class="form__flex">
        <FoodData v-model.number="form.quantities.raw" :isCooked="false" />
        <FoodData v-model.number="form.quantities.cooked" :isCooked="true" />
      </div>
    </div>
    <div class="form__row">
      <label class="form__label">Calories <sup>per 100g</sup></label>
      <input v-model="form.calories" class="form__input" type="text">
    </div>
    <div class="form__row">
      <label class="form__label">Proteins <sup>per 100g</sup></label>
      <input v-model="form.proteins" class="form__input" type="text">
    </div>
    <div class="form__row">
      <label class="form__label">Carbs <sup>per 100g</sup></label>
      <input v-model="form.carbs" class="form__input" type="text">
    </div>
    <div class="form__row">
      <label class="form__label">Fats <sup>per 100g</sup></label>
      <input v-model="form.fats" class="form__input" type="text">
    </div>
    <button
      @click="submitData"
      class="button button--primary"
      :class="{ 'button--disabled': !isFormValid }"
    >Save</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import utilsMixin from '@/assets/js/mixins/utilsMixin';

export default {
  name: 'FormFood',
  mixins: [ utilsMixin ],
  props: {
    foodId: String
  },
  data() {
    return {
      form: {
        id: null,
        name: null,
        brand: null,
        quantities: {
          raw: null,
          cooked: null
        },
        calories: null,
        proteins: null,
        carbs: null,
        fats: null
      }
    }
  },
  mounted() {
    if (this.foodId) {
      // Edit food
      const food = this.deepCopy(this.getFoods).find(food => food.id === this.foodId);
      this.form = food;
    } else {
      // New food
      this.form.id = uuidv4();
    }
  },
  methods: {
    submitData() {
      if (!this.isFormValid) { return; }
      this.$store.dispatch('addFood', this.form);
      this.$router.push({ path: '/' });
    }
  },
  computed: {
    ...mapGetters([
      'getFoods'
    ]),
    isNameValid() {
      return this.form.name !== null && this.form.name.length > 0;
    },
    isQuantitiesValid() {
      return this.form.quantities.raw > 0 && this.form.quantities.cooked > 0;
    },
    isFormValid() {
      return this.isNameValid && this.isQuantitiesValid;
    }
  }
}
</script>

<style>

</style>