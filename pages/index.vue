<template>
  <div>
    <h1>Nutrition Facts</h1>
    <!-- <ImportExport /> -->
    <div class="site__content">
      <FoodLineItem />
      <nuxt-link to="/FoodRegister">Ajouter un ingredient</nuxt-link>
    </div>
  </div>
</template>

<script>
import ImportExport from '../components/ImportExport.vue'

export default {
  components: { ImportExport },
  name: 'Home',
  data() {
    return {
    }
  }
}
</script>

<style>
</style>
