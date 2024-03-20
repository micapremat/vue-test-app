<template>
  <div class="data">
    <p v-for="(data, index) in prevs" :key="index">
      <JokeDisplay :text="data.value"/>
      <button @click="deleteItem(index)" class="mt-2 text-red-600 font-medium">
        Delete
      </button>
    </p>
  </div>
</template>

<script>
import JokeDisplay from '@/components/JokeDisplay.vue';

export default {
  components: { JokeDisplay },
  data() {
    return {
      prevs: this.previousData,
    };
  },
  methods: {
    deleteItem(index) {
      this.prevs.splice(index, 1);
    },
  },
  props: {
    previousData: {
      type: Array,
      required: true,
    },
  },

};
</script>
