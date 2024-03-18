<template>
  <div class="data">
    <p v-for="(data, index) in prevs" :key="index">
      <JokeDisplay :text="data.value"/>
      <span style="color:red; cursor: pointer;" @click="deleteItem(index)">
        Delete
      </span>
    </p>
  </div>
</template>

<script>
import JokeDisplay from '@/components/JokeDisplay.vue';

export default {
  components: { JokeDisplay },
  data() {
    return {
      prevs: this.$global.previousData,
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
