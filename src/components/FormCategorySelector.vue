<template>
  <label for="category">Select a category:
    <select v-model="selectedValue" id="category">
      <option value="">Any</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      selectedValue: '',
    };
  },
  mounted() {
    this.getCategories();
    this.selectedValue = '';
  },
  methods: {
    async getCategories() {
      await this.$request.getCategories()
        .then((response) => {
          this.categories = response.data;
        })
        .catch((e) => {
          console.log('Error fetching categories: ', e);
        });
    },
  },
  watch: {
    selectedValue(newValue) {
      this.$emit('update', newValue);
    },
  },
};
</script>
