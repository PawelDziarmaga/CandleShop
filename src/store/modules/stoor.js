const state = {
	productsInStoor: [],
};

const getters = {
	allProductsInStoor: (state) => state.productsInStoor,
};

const mutations = {
	ADD_PRODUCT: (state, link) => {
		/*Check if the product is in the shopping cart*/
		let index = state.productsInStoor.findIndex(
			(element) => element.name === link.name
		);

		/*If not, add the product to the shopping cart*/
		if (index < 0) {
			state.productsInStoor.push(link);
		}
		/*Find the product index*/
		index = state.productsInStoor.findIndex(
			(element) => element.name === link.name
		);

		/*Adds and removes items to keep the cart counter working*/
		state.productsInStoor.splice(index, 1);
		state.productsInStoor.push(link);

		/*Add the product to the cart*/
		let newQty = state.productsInStoor[index].qty + 1;
		state.productsInStoor[index].qty = newQty;
	},
	REMOVE_PRODUCT: (state, link) => {
		let index = state.productsInStoor.findIndex(
			(product) => product.id === link
		);

		if (state.productsInStoor[index].qty > 1) {
			let newQty = state.productsInStoor[index].qty - 1;
			state.productsInStoor[index].qty = newQty;
		} else {
			state.productsInStoor[index].qty = 0;
			return state.productsInStoor.splice(index, 1);
		}
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
