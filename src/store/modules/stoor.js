const state = {
	productsInStoor: [
		{
			id: 9,
			name: "Magna aliqua",
			price: 45.99,
			inventory: 3,
		},
		{
			id: 10,
			name: "Commodo viverra",
			price: 40.99,
			inventory: 5,
		},
	],
};

const getters = {
	allProductsInStoor: (state) => state.productsInStoor,
};

const mutations = {
	ADD_PRODUCT: (state, link) => {
		console.log(link);
		state.productsInStoor.push(link);
	},
	REMOVE_PRODUCT: (state, link) => {
		const index = state.productsInStoor.findIndex(
			(product) => product.id === link
		);

		return state.productsInStoor.splice(index, 1);
	},
};
const actions = {
	removeProduct: (context, link) => {
		context.commit("REMOVE_PRODUCT", link);
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
