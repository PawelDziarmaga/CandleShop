<template>
	<div class="store">
		<router-link to="/store">
			<img
				src="../../assets/shoppingCart/shopping-cart.png"
				alt="shopping cart"
			/>
			<div class="store__cartNubmber">{{ this.total }}</div>
		</router-link>

		<img src="../../assets/padlock/padlockClose.png" alt="padlock close" />
	</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
	name: "store",
	data() {
		return {
			total: 0,
		};
	},
	computed: mapGetters({ productsInStoor: "allProductsInStoor" }),
	methods: {
		addCard() {
			let total = 0;
			for (let i = 0; i < this.productsInStoor.length; i++) {
				total = total + this.productsInStoor[i].qty;
			}
			this.total = total;
			console.log(total);
		},
	},

	watch: {
		productsInStoor: function () {
			this.addCard();
		},
	},
};
</script>
<style lang="scss">
.store {
	position: fixed;
	display: inline;
	width: 250px;
	flex-wrap: nowrap;
	top: 0;
	right: 30px;
	margin-top: 15px;
	@media screen and (max-width: 400px) {
		right: 0;
		width: 150px;
	}
	a {
		img {
			height: 50px;
			width: auto;
			padding: 0 30px;
			@media screen and (max-width: 400px) {
				height: 30px;
				padding: 0 10px;
			}
		}
		.store__cartNubmber {
			position: absolute;
			left: 70px;
			bottom: 0px;

			width: 20px;
			height: 20px;
			line-height: 20px;
			text-align: center;
			border-radius: 50%;
			color: #444444;
			font-weight: bold;
			background-color: #ffc2b4;
		}
	}
	img {
		height: 50px;
		width: auto;
		padding: 0 30px;
		@media screen and (max-width: 400px) {
			height: 30px;
			padding: 0 10px;
		}
	}
}
</style>
