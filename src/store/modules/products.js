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
		},
		{
			id: 2,
			name: "Dolor sit amet",
			price: 40.99,
			inventory: 27,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img2,
		},
		{
			id: 3,
			name: "Consectetur",
			price: 40.99,
			inventory: 5,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img3,
		},
		{
			id: 4,
			name: "Adipiscing elit",
			price: 35.99,
			inventory: 15,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img4,
		},
		{
			id: 5,
			name: "Sed do eiusmod",
			price: 45.99,
			inventory: 0,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img5,
		},
		{
			id: 6,
			name: "Tempor incididunt",
			price: 40.99,
			inventory: 0,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img6,
		},
		{
			id: 7,
			name: "Ut labore",
			price: 25.99,
			inventory: 20,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img7,
		},
		{
			id: 8,
			name: "Et dolore",
			price: 30.99,
			inventory: 10,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img8,
		},
		{
			id: 9,
			name: "Magna aliqua",
			price: 45.99,
			inventory: 3,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img9,
		},
		{
			id: 10,
			name: "Commodo viverra",
			price: 40.99,
			inventory: 5,
			description:
				"Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae nunc sed velit dignissim sodales ut eu. Praesent tristique magna sit amet purus gravida quis. Sit amet purus gravida quis blandit turpis. Id eu nisl nunc mi ipsum. Turpis massa sed elementum tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. ",
			img: img10,
		},
	],
};

const getters = {
	allProducts: (state) => state.products,
};

const actions = {};

const mutations = {};

export default {
	state,
	getters,
	actions,
	mutations,
};
