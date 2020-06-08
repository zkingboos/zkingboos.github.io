<template>
	<div class="userEntity">
		<div class="box">
			<div class="division">
				<div
					class="userAvatar"
					:style="gitVars"
				></div>
				<p class="meme">{{message}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "UserEntity",
	props: ['user', 'message'],
	computed: {
		gitVars() {
			return {
				'--avatar-user': `url(${this.user.avatar_url})`,
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap");

@media only screen and (max-width: 600px) {
	.userEntity {
		.box {
			.userAvatar {
				display: none;
			}
		}
	}
}

.userEntity {
	margin-top: 20px;
	width: 100%;
	justify-content: space-around;
	display: flex;

	.box {
		padding: 10px 20px;
		width: 70%;
		position: relative;
		border: 1px solid white;

		.division {
			display: flex;

			.userAvatar {
				background-image: var(--avatar-user);
				background-size: cover;
				background-position: center;
				padding: 50px;
				border-radius: 5px;
			}

			.meme {
				margin: auto;
				text-align: center;
				font-size: 25px;
				font-family: "Red Hat Display", sans-serif;
			}
		}
	}
}
</style>