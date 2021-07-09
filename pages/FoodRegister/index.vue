<template>
  <div>
    <button class="button button--aslink" @click="$router.push({ path: '/'})"><i class="fas fa-arrow-left"></i> Back</button>
    <h1>Ajouter un ingredient</h1>
    <FormFood />
  </div>
</template>

<script>
export default {
  name: 'FoodRegister'
}
</script>

<style>

</style>