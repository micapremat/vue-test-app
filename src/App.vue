<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png" alt="logo" class=" w-2/12"/>
    </header>
    <body>
      <HomeWrapper style="margin-top:3em;"/>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
