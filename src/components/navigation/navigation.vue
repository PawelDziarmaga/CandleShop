<template>
	<div class="nav">
		<NormalNav />
		<HamburgerBtn />
		<MobileNav />
	</div>
</template>
<script>
import NormalNav from "./normalNav.vue";
import HamburgerBtn from "./hamburgerBtn.vue";
import MobileNav from "./mobileNav.vue";

export default {
	components: {
		NormalNav,
		HamburgerBtn,
		MobileNav,
	},
};
</script>

<style lang="scss"></style>
