<template>
  <div id="container-wrapper">
    <div style="width: 50%">
      <h1 style="font-size: 14px; color:#229392;">Current</h1>
      <JokeDisplay :text="data.value"></JokeDisplay>
    </div>
    <div style="width: 50%">
      <h1 style="font-size: 14px; color:#229392;">Previous quotes</h1>
      <JokeDisplayPrev :previous-data="previousData"></JokeDisplayPrev>
    </div>

  </div>
</template>

<script>
import JokeDisplay from '@/components/JokeDisplay.vue';
import JokeDisplayPrev from './JokeDisplayPrev.vue';

export default {
  components: {
    JokeDisplayPrev,
    JokeDisplay,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    previousData: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
#container-wrapper {
  display: flex;
}

.two-columns {
  flex-direction: row;
  justify-content: space-between;
}
</style>./JokeDisplayPrev.vue
