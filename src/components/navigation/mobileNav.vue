<template>
	<div @click="unActiveHamburgerBtn" class="mobileNav visible">
		<router-link to="/">Home</router-link>

		<router-link to="/about">About</router-link>
		<router-link to="/findUs">Find Us</router-link>
	</div>
</template>
<script>
export default {
	methods: {
		unActiveHamburgerBtn() {
			let habmburgerBtn =
				document.getElementsByClassName("nav__hamburger")[0];
			let mobileVav = document.getElementsByClassName("mobileNav")[0];
			habmburgerBtn.classList.remove("active");
			mobileVav.classList.add("visible");
		},
	},
};
</script>
<style lang="scss">
.mobileNav {
	z-index: 10;
	top: 240px;
	position: fixed;
	height: 100vh;
	width: 100vw;
	background-color: white;

	transition: 0.2s 0.2s ease-in-out;

	@media screen and (max-width: 400px) {
		top: 160px;
	}
	@media screen and (max-width: 250px) {
		top: 130px;
	}
	a {
		display: block;

		margin: 15px 20%;

		font-size: 30px;
		width: 50%;
		text-decoration: none;
		color: #444444;
		&:hover {
			border-bottom: 2px solid #444444;
		}
	}
}
.visible {
	transform: translateX(200vw);
}
</style>
