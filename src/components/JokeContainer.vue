<template>
  <div id="container-wrapper">
    <div style="width: 50%">
      <h1 style="font-size: 14px; color:#229392;">Current</h1>
      <JokeDisplayCurrent :text="data.value" />
    </div>
    <div style="width: 50%">
      <h1 style="font-size: 14px; color:#229392;">Previous quotes</h1>
      <JokeDisplayPrev :previous-data="previousData" />
    </div>

  </div>
</template>

<script>
import JokeDisplayCurrent from '@/components/JokeDisplayCurrent.vue';
import JokeDisplayPrev from './JokeDisplayPrev.vue';

export default {
  components: {
    JokeDisplayPrev,
    JokeDisplayCurrent,
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
