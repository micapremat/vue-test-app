<template>
  <div class="data">
    <p v-for="(data, index) in prevs" :key="index">
      <JokeDisplayCurrent v-if="data && data.value" :text="data.value"/>
      <button @click="deleteItem(index)" class=" text-red-600">
        Delete
      </button>
    </p>
  </div>
</template>

<script>
import JokeDisplayCurrent from '@/components/JokeDisplayCurrent.vue';

export default {
  components: { JokeDisplayCurrent },
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
