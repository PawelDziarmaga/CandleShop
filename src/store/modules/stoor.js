const state = {
	productsInStoor: [],
};

const getters = {
	allProducts: (state) => state.productsInStoor,
};

const actions = {};

const mutations = {
	PRICE_MIN_FILTER: (state, priceMin) => {},
	PRICE_MAX_FILTER: (state, priceMax) => {},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
