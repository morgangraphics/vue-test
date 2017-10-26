// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import { Table, TableColumn } from 'element-ui';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// Only include what we really need
Vue.use(VueResource);
Vue.use(Table);
Vue.use(TableColumn);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
