<template>
	<div class="cooperation-box">
		<div>
			Icons made by
			<a href="https://www.freepik.com" title="Freepik"> Freepik </a> from
			<a href="https://www.flaticon.com/" title="Flaticon">
				www.flaticon.com</a
			>
		</div>
	</div>
</template>
<style lang="scss">
.cooperation-box {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	div {
		font-size: 15px;
		line-height: 35px;
		@media screen and (max-width: 500px) {
			font-size: 10px;
			line-height: 20px;
		}
		a {
			color: #eeeeee;
		}
	}
}
</style>
