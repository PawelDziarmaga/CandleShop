<template>
	<div class="store">
		<router-link to="/store"
			><img
				src="../../assets/shoppingCart/shopping-cart.png"
				alt="shopping cart"
		/></router-link>

		<img src="../../assets/padlock/padlockClose.png" alt="padlock close" />
	</div>
</template>
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
