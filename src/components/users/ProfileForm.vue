<template>
	<div id="profile-form">
		<div>
			<label for="name">Name</label>
			<input type="text" id="name" v-model="name">
		</div>
		<div>
			<label for="surname">Surname</label>
			<input v-model="surname" type="text" id="surname">
		</div>
		<div>
			<button @click="save">Save</button>
			<button @click="cancel">Cancel</button>
		</div>
		<div>
			<label for="aboutMe">Aboutme</label>
			<input v-model="AboutMe" type="textarea" id="AboutMe">
		</div>
	</div>
</template>

<script>
	import {eventBus} from '../../main'
	import Vuex from 'vuex'
	import Vuex.Store from './index.js'
	export default {
		props: {
			user: {
				type: Object,
				required: true
			}
		},
		name: "ProfileForm",
		data(){
			return {

			}
		},
		methods: {
			save() {
				let name = this.name
				let surname = this.surname

				this.$emit('save-user', {name, surname})
				eventBus.$emit('show-notify', {
					message: 'User saved',
					status: 'success'
				})
				this.cancel()
			},
			cancel() {
				this.$emit('cancel')
			}
		},
		created() {
			this.name = this.user.name
			this.surname = this.user.surname
		},
		computed: {
			console.log('store.index.js.state.users.name')
			return store.index.js.state.users.name
		}
	}
</script>