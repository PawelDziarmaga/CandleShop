<template>
	<div @click="activeHamburgerBtn" class="nav__hamburger">
		<span class="nav__hamburger__line"></span>
	</div>
</template>
<script>
export default {
	methods: {
		activeHamburgerBtn() {
			let habmburgerBtn =
				document.getElementsByClassName("nav__hamburger")[0];
			let mobileVav = document.getElementsByClassName("mobileNav")[0];
			habmburgerBtn.classList.toggle("active");
			mobileVav.classList.toggle("visible");
		},
	},
};
</script>
<style lang="scss">
.nav__hamburger {
	display: none;
	height: 50px;
	width: 50px;
	cursor: pointer;
	position: fixed;
	right: 10px;
	top: 35px;
	@media screen and (max-width: 600px) {
		display: block;
	}
	@media screen and (max-width: 400px) {
		height: 35px;
		width: 35px;
		top: 28px;
	}
	&__line {
		position: absolute;
		height: 4px;
		width: 50px;
		background-color: #444444;
		transition: 0.2s 0.2s ease-in-out;
		@media screen and (max-width: 400px) {
			width: 35px;
		}
		&:before,
		&:after {
			position: absolute;
			height: 4px;
			width: 50px;
			background-color: #444444;
			content: "";
			transition: 0.2s 0.2s ease-in-out;
			@media screen and (max-width: 400px) {
				width: 35px;
			}
		}
		&:before {
			top: 13px;
			@media screen and (max-width: 400px) {
				top: 8px;
			}
		}
		&:after {
			bottom: 13px;
			@media screen and (max-width: 400px) {
				bottom: 8px;
			}
		}
	}
}

/*************	changes after clicking	************/

.active {
	.nav__hamburger__line:before {
		transform: translateY(-13px) rotate(45deg);
		background-color: #444444;
		@media screen and (max-width: 400px) {
			transform: translateY(-8px) rotate(45deg);
		}
	}
	.nav__hamburger__line:after {
		transform: translateY(13px) rotate(-45deg);
		background-color: #444444;
		@media screen and (max-width: 400px) {
			transform: translateY(8px) rotate(-45deg);
		}
	}
	.nav__hamburger__line {
		background-color: transparent;
	}
}
</style>
