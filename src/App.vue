<template>
	<div>
		<Header />
		<Store />
		<Navigation />
		<Main />
		<Footer />
	</div>
</template>

<script>
import Header from "./components/header/header.vue";
import Store from "./components/store/store.vue";
import Navigation from "./components/navigation/navigation.vue";
import Main from "./components/main/main.vue";
import Footer from "./components/footer/footer.vue";

export default {
	components: {
		Header,
		Store,
		Navigation,
		Main,
		Footer,
	},
};
</script>
<style></style>
