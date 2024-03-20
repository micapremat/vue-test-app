<template>
    <div class="text-center">
      <span v-if="text">
        {{ text }}
      </span>
      <span v-else class=" text-gray-500">
        Create a joke to see it here
      </span>
    </div>
</template>

<script>
export default {
  name: 'JokeDisplay',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
