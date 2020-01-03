import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import qs from "qs";
import "./libs/rem.js";
import bus from "./bus";

require("swiper/dist/css/swiper.css");
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);

/**********axios*************/
// import axios from "axios";
// axios.defaults.baseURL = "http://127.0.0.1:4000/";
// // 配置发送请求保存session信息
// axios.defaults.withCredentials = true;

import api from "./apis/index.js";
Vue.prototype.$api = api;

// Vue.prototype.axios = axios;

/****************vant**************/
//switch开关组件
import Vant from "vant";

Vue.use(Vant);

import "vant/lib/index.css";

import { Lazyload } from "vant";

// options 为可选参数，无则不传
Vue.use(Lazyload);

Vue.prototype.bus = bus;
Vue.config.productionTip = false;
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
