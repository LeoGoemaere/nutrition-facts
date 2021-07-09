<template>
  <div>
    <div :class="{ 'notification--active': isActive }" class="notification">
      <div class="notification__infos-container">
        <p v-if="description" class="notification__description">{{ description }}</p>
        <button
          @click="notifvalidated"
          class="notification__button"
          :class="'notification__button--' + validateButton.modifier"
        >{{ validateButton.text }}</button>
      </div>
      <button @click="notifCanceled" class="notification__button notification__button--cancel">{{ cancelButton.text }}</button>
    </div>
    <div :class="{ 'notification__overlay--active': isActive }" class="notification__overlay" @click="notifCanceled"></div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    isActive: Boolean,
    description: String,
    validateButton: Object,
    cancelButton: Object
  },
  methods: {
    notifvalidated() {
      this.$emit('validated');
    },
    notifCanceled() {
      this.$emit('canceled');
    }
  }
}
</script>

<style>

</style>