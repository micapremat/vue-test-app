<template>
  <div id="app">
    <header class=" flex justify-center py-10">
      <img src="./assets/logo.png" alt="logo" class=" w-3/6 sm:w-3/12 md:w-2/12"/>
    </header>
    <body class="min-w-full justify-center text-center">
      <HomeWrapper />
    </body>
  </div>
</template>

<script>
import HomeWrapper from '@/components/HomeWrapper.vue';

export default {
  components: {
    HomeWrapper,
  },
};

</script>

<style scoped>

</style>
