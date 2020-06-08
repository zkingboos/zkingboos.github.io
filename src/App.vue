<template>
	<div class="app">
		<div class="content">
			<Header v-bind:twitter="twitter" />
			<UserEntity
				v-bind:user="user"
				v-bind:message="message"
			/>
			<!---<RepoEntity v-bind:repos="repos" />--->
		</div>
		<!---<div class="waves">
			<img src="./assets/svg/waves.svg" />
		</div>--->
	</div>
</template>

<script>
import Header from "./components/Header.vue";
import UserEntity from "./components/UserEntity.vue";
//import RepoEntity from "./components/RepoEntity.vue";
import { retrieveUserRepos } from "./actions/github";

export default {
	async mounted() {
		this.repos = await retrieveUserRepos("zkingboos");
		this.user = this.repos[0].owner;
	},
	name: "App",
	components: {
		Header, UserEntity, //RepoEntity
	},
	data() {
		return {
			twitter: "@zkingboos",
			message: "Aprendendo com os erros, errando com os aprendizados.",
			user: {
				avatar_url: String
			},
			repos: [{
				name: String,
				description: String,
				language: String
			}]
		};
	},
};
</script>

<style lang="scss">
* {
	padding: 0px;
	margin: 0px;
}

body {
	color: white;
	background-color: #070707;
}

.waves {
	img {
		width: 100%;
		margin: 0px;
		padding: 0px;
	}
}
</style>
