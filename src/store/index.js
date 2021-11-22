import Vue from "vue";
import Vuex from "vuex";

import products from "./modules/products";
import stoor from "./modules/stoor";

// load Vuex
Vue.use(Vuex);

// create store

export default new Vuex.Store({
	modules: {
		products,
		stoor,
	},
});
