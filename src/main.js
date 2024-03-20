import Vue from 'vue';
import requestPlugin from '@/plugins/request';
import App from './App.vue';
import './index.css';

Vue.config.productionTip = false;
const plugin = {
  install() {
    Vue.prototype.$request = requestPlugin;
  },
};

Vue.use(plugin);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
