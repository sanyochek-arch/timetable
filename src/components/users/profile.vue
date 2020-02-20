<template>
	<div id="users-profile">
		<h1>User Profile</h1>
		<p><strong>name</strong>{{user.name}}</p>
		<p><strong>surname</strong>{{user.surname}}</p>
		<p><strong>AboutMe</strong>{{user.aboutMe|readMore(200,'...')}}</p>

		<div v-if="showForm">
			<profile-form :user="user" @save-user="saveUser($event)" @cancel="showForm = false"></profile-form>
		</div>
		<div v-else>
			<button @click="showForm = true">Edit</button>
		</div>
	</div>

</template>

<script>
	import ProfileForm from "./ProfileForm";
	export default {
		components: {ProfileForm},
		props: {
			user: {
				type: Object,
				required: true
			}
		},
		filters: {
			readMore(text, limit, suffix) {
				return text.substring(0, limit) + suffix
			}
		},
		name: "profile",
		data() {
			return {
				showForm: false
			}
		},
		methods: {
			saveUser(user) {
				this.$emit('save-user', user)
			}
		}

	}
</script>

<sryle scoped>
	
</sryle>