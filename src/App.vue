<template>
  <div id="app">
    <img style="width: 10%;" src="./assets/logo.png" />
    <FormWrapper :categories="['dev', 'science', 'technology', 'sport', 'history', 'food', 'vue']" style="margin-top:3em;"/>
  </div>
</template>

<script>
import FormWrapper from './components/FormWrapper.vue';

export default {
  components: {
    FormWrapper,
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
