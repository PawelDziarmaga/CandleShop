<template>
	<div class="normalNav">
		<router-link to="/">Home</router-link>

		<router-link to="/about">About</router-link>
		<router-link to="/findUs">Find Us</router-link>
	</div>
</template>
<style lang="scss">
.normalNav {
	display: flex;
	justify-content: center;
	@media screen and (max-width: 600px) {
		display: none;
	}
	a {
		font-size: 30px;
		padding: 2vh 3%;
		text-decoration: none;
		color: #444444;

		@media screen and (max-width: 900px) {
			font-size: 25px;
		}
		@media screen and (max-width: 750px) {
			font-size: 20px;
		}
		&:hover {
			border-bottom: 2px solid #444444;
		}
	}
}
</style>
