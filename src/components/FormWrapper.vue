<template>
    <div>
      <form @submit.prevent="create" style="margin-bottom:0.75rem;">
        <label for="create">
          Create your own:
          <input type="text" v-model="newJoke" name="create" id="create">
        </label>
        <button type="submit">Create</button>
      </form>

      <form @submit.prevent="getJokes" style="margin-bottom:0.75rem;">
        <FormCategorySelector @update="selectedCategory = $event" />
        <button type="submit">Get a random Joke</button>
      </form>

      <FormNewJokeOnKeydown @getNewJoke="$emit('getNewJoke');"/>
    </div>
</template>

<script>
import FormNewJokeOnKeydown from '@/components/FormNewJokeOnKeydown.vue';
import FormCategorySelector from '@/components/FormCategorySelector.vue';

export default {
  components: {
    FormCategorySelector,
    FormNewJokeOnKeydown,
  },
  data() {
    return {
      newJoke: '',
      selectedCategory: '',
    };
  },
  methods: {
    create() {
      this.$emit('newJoke', this.newJoke);
    },
    async getJokes() {
      if (this.selectedCategory) {
        await this.$request.getJokesByCategory(this.selectedCategory)
          .then((response) => {
            this.$emit('data', response.data);
            // this.previousData.push(response.data);
            // this.data = response.data;
          })
          .catch((e) => {
            console.log('Error fetching joke:: ', e);
          });
      } else {
        await this.$request.getRandomJokes()
          .then((response) => {
            this.$emit('data', response.data);
            // this.previousData.push(response.data);
            // this.data = response.data;
          })
          .catch((e) => {
            console.log('Error fetching joke:: ', e);
          });
      }
    },
  },
};
</script>
