<template>
	<div class="store-pge">
		<h1>Twój koszyk</h1>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>QTY</th>
					<th>SUBTOTAL</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="product in productsInStoor"
					v-bind:key="product.id"
					class="product-section__products__product"
				>
					<td>{{ product.name }}</td>
					<td>1</td>
					<td>{{ product.price }}</td>
					<td>
						<button v-on:click="removeProducts(product.id)">
							Delite
						</button>
					</td>
				</tr>
				<tr>
					<td></td>
					<td rowspan="3">Total</td>
					<td>{{ total }}</td>
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
			for (let i = 0; i < this.productsInStoor.length; i++) {
				this.total = this.total + this.productsInStoor[i].price;
			}
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
	h1 {
		text-align: center;
	}
	table {
		margin: 50px auto;
		border: 2px solid black;
		font-size: 20px;
		thead {
			th {
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

				height: 50px;
				text-align: center;
				padding: 0 20px;
				display: block;
				margin: 0 auto;
				color: #444444;
				font-family: "Comfortaa", cursive;
				border: 3px solid #444444;

				&:hover {
					color: #ededed;
					border: 5px solid #ededed;
					background-color: #444444;
				}
			}
		}
	}
}
</style>
