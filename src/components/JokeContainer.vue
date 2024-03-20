<template>
  <div class=" sm:flex sm:flex-row sm:justify-around m-auto px-10">
    <div class="px-3 text-center sm:w-1/2 sm:min-w-1/2">
      <h1 class="text-cyan-600 text-lg font-bold" >Current</h1>
      <JokeDisplay :text="data.value" />
    </div>
    <div class="px-3 text-center sm:w-1/2 sm:min-w-1/2">
      <h1 class="text-cyan-600 text-lg font-bold" >Previous quotes</h1>
      <JokeDisplayPrev :previous-data="previousData" />
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

</style>
