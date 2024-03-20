import axios from 'axios';

const baseURL = 'https://api.chucknorris.io/jokes';

const requestPlugin = {
  getRandomJokes() {
    return new Promise((resolve, reject) => {
      axios.get(`${baseURL}/random`).then((response) => {
        resolve(response);
      }).catch((e) => {
        console.log('error: ', e);
        reject(e);
      });
    });
  },

  getJokesByCategory(category) {
    return new Promise((resolve, reject) => {
      axios.get(`${baseURL}/random?category=${category}`).then((response) => {
        resolve(response);
      }).catch((e) => {
        console.log('error: ', e);
        reject(e);
      });
    });
  },

  getCategories() {
    return new Promise((resolve, reject) => {
      axios.get(`${baseURL}/categories`).then((response) => {
        resolve(response);
      }).catch((e) => {
        console.log('error: ', e);
        reject(e);
      });
    });
  },
};
export default requestPlugin;
