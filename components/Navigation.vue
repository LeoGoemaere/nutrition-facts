<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <nuxt-link :to="{ path: '/' }" class="navigation__link"><i class="fas fa-home"></i></nuxt-link>
      </li>
      <li class="navigation__item">
        <nuxt-link :to="{ path: '/settings' }" class="navigation__link"><i class="fas fa-cog"></i></nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/navigation';
</style>