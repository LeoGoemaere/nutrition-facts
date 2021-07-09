<template>
  <div>
    <h1>Nutrition Facts</h1>
    <!-- <ImportExport /> -->
    <div class="site__content">
      <FoodLineItem
        v-for="food in getFoods"
        :key="food.id"
        :name="food.name"
        :raw="food.quantities.raw"
        :cooked="food.quantities.cooked"
        :id="food.id"
      />
      <nuxt-link to="/foodRegister">Ajouter un ingredient</nuxt-link>
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
