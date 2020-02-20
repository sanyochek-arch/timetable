export default {
	data(){
		return{
		notify: {
		message: null,
		status: null
		},
			showNotify: false
		}
	},
	created() {
	notifier.$on('show-notify', (notify) => {
		this.notify = notify
		this.showNotify = true
	})
	}
}