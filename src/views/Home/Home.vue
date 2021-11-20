<template>
	<div class="home">
		<div class="filtr-section"></div>
		<div class="product-section">
			<div class="product-section__sort"></div>
			<div class="product-section__products">
				<div
					v-for="product in allProducts"
					v-bind:key="product.id"
					class="product-section__products__product"
				>
					<h2>{{ product.name }}</h2>
					<img v-bind:src="product.img" />
					<h3>{{ product.price }} zł</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "Home",
	computed: mapGetters(["allProducts"]),
};
</script>
<style lang="scss">
.home {
	border: 1px solid black;
	display: flex;
	min-height: 50vh;
	margin: 10px;
	.filtr-section {
		border: 1px solid black;
		width: 20%;
		margin: 10px;
	}
	.product-section {
		width: 80%;
		margin: 10px;
		border: 1px solid black;
		&__sort {
			width: 30%;
			height: 50px;
			margin: 10px;

			border: 1px solid black;
		}
		&__products {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin: 10px;
			width: 99%;
			border: 1px solid black;
			&__product {
				width: 500px;
				height: 500px;
				margin: 10px;
				border: 1px solid black;
				h2 {
					text-align: center;
					padding: 30px;
				}
				img {
					width: 80%;
					display: block;
					margin: 0 auto;
				}
				h3 {
					text-align: center;
					padding: 30px;
				}
			}
		}
	}
}
</style>
