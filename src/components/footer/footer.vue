<template>
	<div class="footer">
		<div class="footer__first-floor">
			<Adres />
			<Kontakt />
			<Social />
		</div>
		<div class="footer__second-floor">
			<Cooperation />
		</div>
		<div class="footer__third-floor">
			<h5>©2021 All rights reserved</h5>
		</div>
	</div>
</template>
<script>
import Adres from "./adres.vue";
import Kontakt from "./kontakt.vue";
import Social from "./social.vue";
import Cooperation from "./cooperation.vue";

export default {
	components: {
		Adres,
		Kontakt,
		Social,
		Cooperation,
	},
};
</script>
<style lang="scss">
.footer {
	text-align: center;
	color: #ededed;

	&__first-floor {
		background-color: #444444;
		padding-top: 5vh;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	&__second-floor {
		background-color: #171717;
	}
	&__third-floor {
		font-size: 15px;
		padding: 1vh;
		background-color: #171010;
	}
}
</style>
