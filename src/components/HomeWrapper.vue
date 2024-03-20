<template>
  <div>
    <div>
      <FormWrapper @data="setData" @newJoke="create" @getNewJoke="getJokes"/>
    </div>
    <div>
      <JokeContainer :previous-data="this.previousData" :data="data" />
    </div>
  </div>
</template>

<script>
import JokeContainer from '@/components/JokeContainer.vue';
import FormWrapper from '@/components/FormWrapper.vue';

export default {
  components: {
    FormWrapper,
    JokeContainer,
  },
  data() {
    return {
      selectedCategory: '',
      data: {
        value: '',
      },
      previousData: [],
    };
  },
  methods: {
    create(newJoke) {
      this.previousData.unshift({ value: newJoke });
      this.data = { value: newJoke };
    },
    getJokes() {
      if (this.selectedCategory) {
        this.$request.getJokesByCategory(this.selectedCategory)
          .then((response) => {
            this.previousData.unshift(response.data);
            this.data = response.data;
          })
          .catch((e) => {
            console.log('Error fetching joke:: ', e);
          });
      } else {
        this.$request.getRandomJokes()
          .then((response) => {
            this.previousData.unshift(response.data);
            this.data = response.data;
          })
          .catch((e) => {
            console.log('Error fetching joke:: ', e);
          });
      }
    },
    setData(data) {
      this.previousData.unshift(data);
      this.data = data;
    },
  },
};
</script>
