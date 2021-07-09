<template>
  <div>
    <h1>Modifier un ingredient</h1>
    <FormFood :foodId="$route.query.id" />
  </div>
</template>

<script>
export default {
  name: 'FoodRegister'
}
</script>

<style>

</style>