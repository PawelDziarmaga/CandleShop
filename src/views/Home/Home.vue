<template>
	<div class="home">
		<div class="filtr-section">
			<h1 class="filtr-section__header">Filter</h1>
			<div class="filtr-section__price">
				<h2>Price</h2>
				<div class="filtr-section__price__box">
					<p>from</p>
					<input
						type="number"
						v-model="priceMin"
						placeholder="20"
						min="0"
						max="100"
					/>
				</div>
				<div class="filtr-section__price__box">
					<p>to</p>
					<input
						type="number"
						v-model="priceMax"
						placeholder="100"
						min="0"
						max="100"
					/>
				</div>
			</div>
			<div class="filtr-section__availability">
				<h2>Available</h2>
				<div class="filtr-section__availability__box">
					<p>Yes</p>
					<input type="checkbox" v-model="available" />
				</div>
			</div>
			<div class="filtr-section__smell">
				<h2>Smell</h2>
				<div class="filtr-section__smell__box">
					<p>Citrus</p>
					<input type="checkbox" v-model="citrus" />
				</div>
				<div class="filtr-section__smell__box">
					<p>Lavender</p>
					<input type="checkbox" v-model="lavender" />
				</div>
				<div class="filtr-section__smell__box">
					<p>Spicy</p>
					<input type="checkbox" v-model="spicy" />
				</div>
			</div>
			<button @click="filtrItem">Filter</button>
		</div>
		<div class="product-section">
			<div class="product-section__products">
				<div
					v-for="product in filterProducts"
					v-bind:key="product.id"
					class="product-section__products__product"
				>
					<h2>{{ product.name }}</h2>
					<img v-bind:src="product.img" />
					<h3>{{ product.price }} zł</h3>
					<div class="product-section__products__product__cart">
						<p>
							Availability:
							{{ product.inventory - product.qty }}
						</p>
						<p>In Your cart: {{ product.qty }}</p>
					</div>
					<button
						@click="
							if (product.inventory - product.qty > 0) {
								addProduct(product);
							}
						"
					>
						{{
							product.inventory - product.qty > 0 ? "buy" : "none"
						}}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
	name: "Home",
	computed: mapGetters(
		{ products: "allProducts" },
		{ productsInStoor: "allProductsInStoor" }
	),
	data() {
		return {
			filterProducts: this.products,
			priceMin: "",
			priceMax: "",
			available: false,
			citrus: false,
			lavender: false,
			spicy: false,
		};
	},
	beforeMount() {
		this.filtrItem();
	},
	methods: {
		filtrItem() {
			this.filterProducts = [...this.products];
			if (this.priceMin !== "") {
				this.filterProducts = this.filterProducts.filter(
					(product) => product.price > this.priceMin
				);
			}

			if (this.priceMax !== "") {
				this.filterProducts = this.filterProducts =
					this.filterProducts.filter(
						(product) => product.price < this.priceMax
					);
			}

			if (this.available) {
				this.filterProducts = this.filterProducts.filter(
					(product) => product.inventory - product.qty > 0
				);
			}
			if (this.citrus) {
				this.filterProducts = this.filterProducts.filter(
					(product) => product.citrus
				);
			}
			if (this.lavender) {
				this.filterProducts = this.filterProducts.filter(
					(product) => product.lavender
				);
			}
			if (this.spicy) {
				this.filterProducts = this.filterProducts.filter(
					(product) => product.spicy
				);
			}
		},
		...mapMutations(["ADD_PRODUCT"]),
		addProduct: function (product) {
			this.ADD_PRODUCT(product);
		},
	},
};
</script>
<style lang="scss">
.home {
	color: #444444;
	font-family: "Comfortaa", cursive;

	display: flex;
	min-height: 50vh;
	margin: 10px;
	.filtr-section {
		box-shadow: 0 0 5px #444444;
		width: 250px;
		height: 65vh;
		margin: 10px;
		@media screen and (max-height: 1000px) {
			height: 80vh;
		}
		@media screen and (max-height: 800px) {
			height: 100vh;
		}
		@media screen and (max-height: 600px) {
			height: 120vh;
		}
		@media screen and (max-height: 500px) {
			height: 150vh;
		}
		@media screen and (max-height: 400px) {
			height: auto;
		}
		&__header {
			font-size: 50px;
			margin: 20px 0;
			text-align: center;
			background-color: #9dbeb9;
		}
		&__price {
			margin: 20px 0;
			h2 {
				font-size: 30px;
				text-align: center;
				padding-bottom: 10px;
			}
			&__box {
				margin: 20px 0;
				display: flex;
				p {
					font-size: 20px;
					width: 50%;
					text-align: center;
				}
				input {
					text-align: center;
				}
			}
		}
		&__availability {
			margin: 20px 0;
			h2 {
				font-size: 30px;
				text-align: center;
				padding-bottom: 10px;
			}
			&__box {
				margin: 20px 0;
				display: flex;
				p {
					font-size: 20px;
					width: 50%;
					text-align: center;
				}
				input {
					text-align: center;
					margin-top: 5px;
				}
			}
		}
		&__smell {
			margin: 20px 0;
			h2 {
				font-size: 30px;
				text-align: center;
				padding-bottom: 10px;
			}
			&__box {
				margin: 20px 0;
				display: flex;
				p {
					font-size: 20px;
					width: 70%;
					text-align: center;
				}
				input {
					text-align: center;
					margin-top: 5px;
				}
			}
		}
		button {
			background-color: #ededed;
			font-size: 30px;
			height: 50px;
			text-align: center;
			width: 80%;
			display: block;
			margin: 0 auto;
			color: #194350;
			font-family: "Comfortaa", cursive;
			background-color: #ffc2b4;
			border: 8px solid #ededed;
			transition: 0.1s ease-out;

			&:hover {
				border: 8px solid #ffc2b4;
				background-color: #ededed;
			}
		}
	}
	.product-section {
		width: 100%;

		&__products {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;

			width: 100%;

			&__product {
				width: 500px;
				height: 600px;
				margin: 10px;
				box-shadow: 0 0 5px #444444;
				@media screen and (max-width: 1850px) {
					width: 400px;
					height: 550px;
				}
				@media screen and (max-width: 1550px) {
					width: 300px;
					height: 470px;
				}
				@media screen and (max-width: 1200px) {
					width: 400px;
					height: 520px;
				}
				@media screen and (max-width: 1100px) {
					width: 300px;
					height: 470px;
				}
				@media screen and (max-width: 900px) {
					width: 200px;
					height: 400px;
				}
				@media screen and (max-width: 660px) {
					width: 100%;
					height: 500px;
				}
				@media screen and (max-width: 550px) {
					width: 100%;
					height: 450px;
				}
				h2 {
					text-align: center;
					padding: 10px;
					font-size: 40px;
					margin: 20px 0;

					background-color: #9dbeb9;
					@media screen and (max-width: 1550px) {
						font-size: 30px;
					}
					@media screen and (max-width: 900px) {
						font-size: 20px;
					}
				}
				img {
					width: 80%;
					display: block;
					margin: 0 auto;
					box-shadow: 0 0 5px #ededed;
					border-radius: 5px;
				}
				h3 {
					text-align: center;
					font-size: 30px;
					padding: 30px;
					color: #194350;
					text-shadow: 0px 0px 15px #ffc2b4;
				}
				button {
					font-size: 30px;
					height: 50px;
					text-align: center;
					width: 80%;
					display: block;
					margin: 0 auto;
					color: #194350;
					font-family: "Comfortaa", cursive;
					background-color: #ffc2b4;
					border: 8px solid #ededed;
					transition: 0.1s ease-out;
					&:hover {
						border: 8px solid #ffc2b4;
						background-color: #ededed;
					}
				}
				&__cart {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					padding-bottom: 10px;
					@media screen and (max-width: 900px) {
						display: block;
					}
					p {
						text-align: center;
						width: 50%;
						@media screen and (max-width: 900px) {
							width: 100%;
						}
					}
				}
			}
		}
	}
}
</style>
