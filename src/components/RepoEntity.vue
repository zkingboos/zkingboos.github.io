<template>
	<div class="repoEntity">
		<div class="projects">
			<p>PROJETOS</p>
		</div>
		<div class="box">
			<div
				v-for="({name, description, language}, index) in repos"
				:key="index"
				class="entity"
			>
				<div class="desc">
					<p class="title">{{name}}</p>
					<p class="aboutRepo">{{!description ? "Nenhuma descrição para este repositório." : description}}</p>
				</div>
				<div class="repo">
					<div class="tag">
						{{language}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

.repoEntity {
	height: 100vh;

	.box {
		min-width: 80%;
		width: 80%;
		margin: auto;
		margin-top: 40px;

		.entity {
			width: 80%;
			height: 15vh;

			padding: 10px;
			margin: 30px auto;

			background-color: #171717;
			border-radius: 5px;

			.desc {
				.title {
					font-size: 20px;
					line-height: 40px;
					text-transform: uppercase;
					font-family: "Roboto", sans-serif;
				}

				.aboutRepo {
					font-family: "Lato";
					overflow-wrap: break-word;
				}
			}

			.repo {
			}
		}
	}

	.projects {
		margin-top: 40px;

		p {
			font-family: "Lato", sans-serif;
			font-size: 30px;
			text-align: center;
		}
	}
}
</style>

<script>
export default {
	name: "RepoEntity",
	props: ['repos']
}
</script>
