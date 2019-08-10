import Vue from 'vue';
import iView from 'iview';
import App from './App.vue';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(iView);
new Vue({
  render: h => h(App),
}).$mount('#app');
