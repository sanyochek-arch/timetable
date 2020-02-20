import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		users:[
          name: 'John',
          surname: 'Doe',
          email: 'skjvbs@gmail.com'
          aboutMe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		],	
		title:'Home Page'
	}
})