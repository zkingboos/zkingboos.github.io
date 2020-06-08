<template>
	<div class="header">
		<div class="box">
			<div class="twitter"></div>
			<p class="twitter-link">{{twitter}}</p>
		</div>
		<div class="box">
			<p class="github">GITHUB</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header",
	props: ['twitter']
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

.header {
	width: 80%;
	margin: auto;
	height: 10vh;
	display: flex;

	.twitter {
		background-image: url("../assets/svg/twitter.svg");
		background-size: cover;
		background-position: center;
		//padding: 10px;
		width: 20px;
		margin: 2px 0px;
		height: 20px;
		position: absolute;
	}

	.box {
		width: 100%;
		margin: 20px 10px;
		position: relative;

		.github {
			text-align: right;
		}

		.twitter-link {
			padding-left: 23px;
		}

		p {
			font-family: "Roboto", sans-serif;
		}
	}
}
</style>