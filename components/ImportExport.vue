<template>
  <div>
    <div class="settings__row">
      <label for="" class="form__label">Import datas</label>
      <div class="settings__content">
        <input class="form__input" type="file" value="import" ref="file">
        <button class="button button--primary settings__button" @click="importFile">Import</button>
      </div>
    </div>
    <div class="settings__row">
      <p class="form__label">Export datas</p>
      <button class="button button--primary settings__button" @click="exportFile">Export</button>
    </div>
  </div>
</template>

<script>
import data from '@/data/data.json';
import { mapGetters } from 'vuex';
export default {
  name: 'ImportExport',
  methods: {
    importFile() {
      const file = this.$refs.file.files;
      if (file.length > 0) { // Check if file is correct
        const fileReader = new FileReader();
        const self = this;
        fileReader.onload = (e) => {
          const data = JSON.parse(e.target.result)
          self.$store.dispatch('setFoods', data)
        }
        fileReader.readAsText(file.item(0));
      }
    },
    exportFile() {
      const blob = new Blob([JSON.stringify(this.getFoods)], {type : 'application/json'})
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = 'nutritionFacts-export';
      a.click();
    }
  },
  computed: {
    ...mapGetters({
      getFoods: 'getFoods'
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/settings';
</style>