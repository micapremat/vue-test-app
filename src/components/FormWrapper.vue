<template>
  <div>
    <div class="sm:flex sm:flex-col justify-center m-auto">
      <div>
        <form @submit.prevent="create" style="margin-bottom:0.75rem;">
          <label for="create" class="block sm:inline-block font-semibold text-lg">
            Create your own:
            <input type="text" v-model="newJoke" name="create" id="create"
              class=" block my-2 sm:my-0 sm:inline-block m-auto border border-gray-300
              rounded-lg sm:mx-4 font-normal px-2" />
          </label>
          <button type="submit" class=" bg-cyan-600 px-4 py-1 text-gray-100 rounded-lg
            font-medium hover:bg-cyan-500">
            Create
          </button>
          <p class="mt-1 text-red-600 text-xs"> {{ errorMsg }}</p>
        </form>
      </div>
      <div>
      <form @submit.prevent="getJokes" style="margin-bottom:0.75rem;">
        <FormCategorySelector @update="selectedCategory = $event" />
        <button type="submit" class=" bg-cyan-600 px-4 py-1 text-gray-100 rounded-lg
          font-medium hover:bg-cyan-500">
          Get a random Joke
        </button>
      </form>
    </div>
  </div>
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
      errorMsg: '',
    };
  },
  methods: {
    create() {
      if (this.newJoke) {
        this.errorMsg = '';
        this.$emit('newJoke', this.newJoke);
        this.newJoke = '';
      } else {
        this.errorMsg = 'Please write your own joke';
      }
    },
    async getJokes() {
      this.errorMsg = '';
      if (this.selectedCategory) {
        await this.$request.getJokesByCategory(this.selectedCategory)
          .then((response) => {
            this.$emit('data', response.data);
          })
          .catch((e) => {
            console.log('Error fetching joke:: ', e);
          });
      } else {
        await this.$request.getRandomJokes()
          .then((response) => {
            this.$emit('data', response.data);
          })
          .catch((e) => {
            console.log('Error fetching joke:: ', e);
          });
      }
    },
  },
};
</script>
