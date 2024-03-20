<template>
  <div>
    <span><b>Press <span style="color:#229392;">'Ctrl + Y'</span> for new joke</b></span>
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
