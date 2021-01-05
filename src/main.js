/*
 * @Author: sky.li
 * @LastEditors: sky.li
 * @Description:
 * @可以输入预定的版权声明、个性签名、空行等
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "element-ui/lib/theme-chalk/index.css";
import axios from 'axios';
Vue.config.productionTip = false;
import Element from "element-ui";

import mock from '@/mock/index' //也可以不写index.js
// 如果process.env.Mock == true执行startMock()
mock.startMock();

Vue.use(Element);


Vue.prototype.$axios = axios;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
