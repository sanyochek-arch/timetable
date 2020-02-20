<template>
  <div id="app">
    <notification  v-if="showNotify"
                    :message="notify.message"
                    :status="notify.status"
                     @cancel="showNotify=false">
                       
    </notification>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <user-profile @save-user="user = $event" :user="user"></user-profile>
  </div>
</template>
<div id="app">
  <div>
    <h2>Hello, {{user.name|uppercase}}!</h2>
  </div>
</div>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UserProfile from "./components/users/profile.vue"
import Notification from "./components/Support/Notification"

import notifier from "./mixins/notifier"


export default {
  name: 'app',
  mixins: [notifier],
  components: {
    HelloWorld, UserProfile, Notification
  },
  data() {
    return {
      user:{
          name: 'John',
          surname: 'Doe',
          aboutMe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eaque impedit sapiente optio minus totam dolor rem doloremque vitae eius aut delectus omnis molestias natus sed unde eligendi at nesciunt.100'
        },
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
