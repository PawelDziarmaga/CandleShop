import img1 from "../../assets/productPictures/1.jpg";
import img2 from "../../assets/productPictures/2.jpg";
import img3 from "../../assets/productPictures/3.jpg";
import img4 from "../../assets/productPictures/4.jpg";
import img5 from "../../assets/productPictures/5.jpg";
import img6 from "../../assets/productPictures/6.jpg";
import img7 from "../../assets/productPictures/7.jpg";
import img8 from "../../assets/productPictures/8.jpg";
import img9 from "../../assets/productPictures/9.jpg";
import img10 from "../../assets/productPictures/10.jpg";

const state = {
	products: [
		{
			id: 1,
			name: "Lorem ipsum",
			price: 40.99,
			inventory: 2,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img1,
			citrus: false,
			lavender: true,
			spicy: false,
		},
		{
			id: 2,
			name: "Dolor sit amet",
			price: 40.99,
			inventory: 27,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img2,
			citrus: true,
			lavender: false,
			spicy: false,
		},

		{
			id: 3,
			name: "Consectetur",
			price: 40.99,
			inventory: 5,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img3,
			citrus: false,
			lavender: false,
			spicy: true,
		},
		{
			id: 4,
			name: "Adipiscing elit",
			price: 35.99,
			inventory: 15,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img4,
			citrus: true,
			lavender: false,
			spicy: true,
		},
		{
			id: 5,
			name: "Sed do eiusmod",
			price: 45.99,
			inventory: 0,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img5,
			citrus: false,
			lavender: true,
			spicy: true,
		},
		{
			id: 6,
			name: "Tempor incididunt",
			price: 40.99,
			inventory: 0,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img6,
			citrus: true,
			lavender: true,
			spicy: false,
		},
		{
			id: 7,
			name: "Ut labore",
			price: 25.99,
			inventory: 20,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img7,
			citrus: true,
			lavender: true,
			spicy: true,
		},
		{
			id: 8,
			name: "Et dolore",
			price: 30.99,
			inventory: 10,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img8,
			citrus: true,
			lavender: false,
			spicy: false,
		},
		{
			id: 9,
			name: "Magna aliqua",
			price: 45.99,
			inventory: 3,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img9,
			citrus: false,
			lavender: true,
			spicy: false,
		},
		{
			id: 10,
			name: "Commodo viverra",
			price: 40.99,
			inventory: 5,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img10,
			citrus: false,
			lavender: false,
			spicy: true,
		},
	],
};

const getters = {
	allProducts: (state) => state.products,
};

const actions = {};

const mutations = {
	PRICE_MIN_FILTER: (state, priceMin) => {
		if (priceMin === "") {
			priceMin = 0;
		}
		console.log("MIN: " + priceMin);
		const nevState = state.products.filter(
			(product) => product.price > priceMin
		);

		return (state.products = nevState);
	},
	PRICE_MAX_FILTER: (state, priceMax) => {
		if (priceMax === "") {
			priceMax = 100;
		}
		console.log("MAX: " + priceMax);
		const nevState = state.products.filter(
			(product) => product.price < priceMax
		);

		return (state.products = nevState);
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
