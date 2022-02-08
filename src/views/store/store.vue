<template>
	<div class="store-pge">
		<h1>Shopping cart</h1>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>QTY</th>
					<th>SUBTOTAL</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="product in productsInStoor"
					v-bind:key="product.id"
					class="product-section__products__product"
				>
					<td>{{ product.name }}</td>
					<td>{{ product.qty }}</td>
					<td>{{ product.price }} zł</td>
					<td>
						<button
							v-on:click="
								removeProducts(product.id);
								addPrice();
							"
						>
							Delite
						</button>
					</td>
				</tr>
				<tr>
					<td></td>
					<td rowspan="3">Total</td>
					<td>{{ total }} zł</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "store",
	data() {
		return {
			qty: 1,
			total: 0,
		};
	},
	computed: mapGetters({ productsInStoor: "allProductsInStoor" }),
	methods: {
		addPrice() {
			let total = 0;
			for (let i = 0; i < this.productsInStoor.length; i++) {
				total =
					total +
					this.productsInStoor[i].price * this.productsInStoor[i].qty;
			}
			this.total = total.toFixed(2);
		},
		...mapActions(["removeProduct"]),
		removeProducts: function (link) {
			this.removeProduct(link);
		},
	},
	beforeMount() {
		this.addPrice();
	},
};
</script>
<style lang="scss">
.store-pge {
	color: #444444;

	h1 {
		margin: 0 auto;
		padding-bottom: 10px;
		text-align: center;
		width: 10%;
		border-bottom: 5px solid #ffc2b4;
		@media screen and (max-width: 1950px) {
			width: 15%;
		}
		@media screen and (max-width: 1300px) {
			width: 20%;
		}
		@media screen and (max-width: 1000px) {
			width: 30%;
		}
		@media screen and (max-width: 650px) {
			width: 50%;
		}
		@media screen and (max-width: 400px) {
			width: 80%;
		}
	}
	table {
		margin: 50px auto;
		border: 2px solid #ededed;
		box-shadow: 0px 0px 10px #ededed;
		font-size: 20px;
		thead {
			th {
				border-bottom: 2px solid #ffc2b4;
				padding: 20px 50px;
				@media screen and (max-width: 750px) {
					padding: 20px 30px;
				}
				@media screen and (max-width: 600px) {
					padding: 10px 10px;
				}
			}
		}
		tbody {
			tr {
				padding: 5px;
				border: 2px solid #ededed;
				box-shadow: 0px 0px 10px #ededed;
			}
			td {
				padding: 20px 50px;
				@media screen and (max-width: 750px) {
					padding: 20px 10px;
				}
				@media screen and (max-width: 600px) {
					padding: 10px 10px;
				}
			}
			button {
				background-color: #ededed;
				font-size: 20px;

				text-align: center;
				padding: 5px;
				display: block;
				margin: 0 auto;
				color: #194350;
				font-family: "Comfortaa", cursive;
				background-color: #ffc2b4;
				border: 8px solid #ededed;
				transition: 0.1s ease-out;
				@media screen and (max-width: 700px) {
					font-size: 15px;
					padding: 3px;
					border: 4px solid #ededed;
				}
				&:hover {
					border: 8px solid #ffc2b4;
					background-color: #ededed;
				}
			}
		}
	}
}
</style>
