<template>
    <div> {{ text }} </div>
</template>

<script>
export default {
  name: 'JokeDisplayCurrent',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
