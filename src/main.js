import Vue from 'vue';
import FormWrapper from '@/components/FormWrapper.vue';
import App from './App.vue';
import './index.css';

Vue.config.productionTip = false;

Vue.prototype.$global = {
  previousData: [],
};

Vue.component('form-wrapper', FormWrapper);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
