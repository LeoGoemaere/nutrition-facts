<template>
  <div>
    <h1>Nutrition Facts</h1>
    <!-- <ImportExport /> -->
    <div class="site__content">
      <FoodLineItem
        v-for="food in getFoods"
        :key="food.id"
        :foodData="food"
        :raw="food.quantities.raw"
        :cooked="food.quantities.cooked"
      />
      <button class="button button--primary" @click="$router.push({ name: 'foodRegister' })">Add food</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ImportExport from '../components/ImportExport.vue'

export default {
  components: { ImportExport },
  name: 'Home',
  computed: {
    ...mapGetters([
      'getFoods'
    ])
  }
}
</script>

<style>
</style>
