<template>
  <div class="flex justify-center py-2">
    <span class="font-semibold text-lg">
      Press <span class=" text-cyan-600">'Ctrl + Y'</span> for new joke
    </span>
  </div>
</template>

<script>

export default {
  methods: {
    fetchNewData(event) {
      if (event.ctrlKey && (event.key === 'y' || event.key === 'Y')) {
        this.$emit('getNewJoke');
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.fetchNewData);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.fetchNewData);
  },
};
</script>
