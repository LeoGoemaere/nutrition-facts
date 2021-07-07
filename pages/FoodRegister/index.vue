<template>
  <div>
    <h1>Ajouter un ingredient</h1>
    <div class="form site__content">
      <div class="form__row">
        <label class="form__label">Name</label>
        <input class="form__input" type="text" placeholder="Rice, Pastes, etc.">
      </div>
      <div class="form__row">
        <label class="form__label">Brand</label>
        <input class="form__input" type="text" placeholder="Barilla, taureau ailé, etc.">
      </div>
      <div class="form__row">
        <label class="form__label">Quantities</label>
        <div class="form__flex">
          <FoodData :isCooked="false" />
          <FoodData :isCooked="true" />
        </div>
      </div>
      <div class="form__row">
        <label class="form__label">Calories <sup>per 100g</sup></label>
        <input class="form__input" type="text">
      </div>
      <div class="form__row">
        <label class="form__label">Proteins <sup>per 100g</sup></label>
        <input class="form__input" type="text">
      </div>
      <div class="form__row">
        <label class="form__label">Carbs <sup>per 100g</sup></label>
        <input class="form__input" type="text">
      </div>
      <div class="form__row">
        <label class="form__label">Fats <sup>per 100g</sup></label>
        <input class="form__input" type="text">
      </div>
      <button class="button">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodRegister'
}
</script>

<style>

</style>