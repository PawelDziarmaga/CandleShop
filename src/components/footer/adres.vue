<template>
	<div class="footer__adress">
		<h1>Adres</h1>
		<ul>
			<li>Lorem ipsum dolor</li>
			<li>ul Excepteur sint 5</li>
			<li>00-000 Duis aute</li>
		</ul>
	</div>
</template>
<style lang="scss">
.footer__kontakt,
.footer__adress,
.footer__social {
	padding: 0 10% 2vh 10%;

	h1 {
		border-bottom: 5px solid #da0037;
		margin-bottom: 3vh;
		@media screen and (max-width: 500px) {
			font-size: 30px;
		}
	}
	ul {
		@media screen and (max-width: 500px) {
			font-size: 15px;
		}
		li {
			text-align: left;
			list-style: none;
			margin-bottom: 1.5vh;
			img {
				height: 35px;
				padding-right: 5%;
			}
			span {
				display: inline-block;
				transform: translate(0, -10px);
			}
		}
	}
}
</style>
