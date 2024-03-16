<template>
  <div class="data">
    <p v-for="data in prevs">
      <Display :text="data.value"/>
    </p>
  </div>
</template>

<script>
import Display from '@/components/Display.vue';

export default {
  components: { Display },
  data() {
    return {
      prevs: this.$global.previousData,
    };
  },
  props: {
    previousData: {
      type: Array,
      required: true,
    },
  },

};
</script>
