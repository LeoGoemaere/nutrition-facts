<template>
  <div>
    <input type="file" value="import" ref="file">
    <button @click="importFile">Import</button>
    <button @click="exportFile">Export</button>
    {{this.getAppData}}
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
          // TODO: Rename actions
          self.$store.dispatch('setAppData', data)
        }
        fileReader.readAsText(file.item(0));
      }
    },
    exportFile() {
      const blob = new Blob([JSON.stringify(data)], {type : 'application/json'})
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = 'nutritionFacts-export';
      a.click();
    }
  },
  computed: {
    ...mapGetters({
      getAppData: 'getAppData'
    })
  }
}
</script>

<style>

</style>