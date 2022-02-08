<template>
	<div class="findUs">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8578.624547667065!2d19.021834191390106!3d50.26503623275754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1637324237640!5m2!1spl!2spl"
			allowfullscreen=""
			loading="lazy"
		></iframe>
	</div>
</template>

<script>
export default {
	name: "findUs",
};
</script>
<style lang="scss">
.findUs {
	margin-top: 3vh;
	text-align: center;
	iframe {
		width: 600px;
		height: 450px;
		@media screen and (max-width: 700px) {
			width: 90%;
			height: 450px;
		}
	}
}
</style>
