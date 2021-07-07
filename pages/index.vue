<template>
  <div class="site">
    <h1>Nutrition Facts</h1>
    <!-- <ImportExport /> -->
    <div class="site__content">
      <FoodLineItem />
      <button>Add food</button>
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
