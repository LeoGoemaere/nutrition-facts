export default {
  methods: {
    roundValue(value) {
      if (isNaN(value)) return 0;
      return Math.ceil(value);
    },
    deepCopy(arr) {
      return JSON.parse(JSON.stringify(arr));
    }
  }
}