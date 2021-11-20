<template>
	<div class="header">
		<img src="../../assets/fire.png" alt="fire icon" />
		<h1>Candle shop</h1>
	</div>
</template>
<script></script>
<style lang="scss">
.header {
	display: flex;
	justify-content: space-around;
	margin: 80px 0 0 0;
	padding: 20px 20%;
	background-color: #ededed;
	@media screen and (max-width: 700px) {
		padding: 20px 0;
	}
	@media screen and (max-width: 400px) {
		padding: 20px 0;
		margin: 50px 0 0 0;
	}
	h1 {
		font-family: "Shalimar", cursive;
		font-size: 150px;
		color: #444444;
		@media screen and (max-width: 1000px) {
			font-size: 100px;
		}
		@media screen and (max-width: 400px) {
			font-size: 60px;
		}
		@media screen and (max-width: 250px) {
			font-size: 30px;
		}
	}
	img {
		height: 150px;
		width: auto;
		@media screen and (max-width: 1000px) {
			height: 100px;
		}
		@media screen and (max-width: 400px) {
			height: 60px;
		}
		@media screen and (max-width: 250px) {
			height: 30px;
		}
	}
}
</style>
