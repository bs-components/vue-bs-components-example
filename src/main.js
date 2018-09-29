import Vue from 'vue'
import App from './App.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { defineCustomElements } from 'bs-components';

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'bs-alert',
  'bs-button',
  'bs-carousel',
  'bs-collapse',
  'bs-dropdown',
  'bs-modal',
  'bs-scrollspy',
  'bs-tab',
  'bs-tooltip',
];

defineCustomElements(window);

new Vue({
  render: h => h(App)
}).$mount('#app')
