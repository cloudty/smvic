<template>
  <div class="headDiv" style="clear: both;">
   <el-col :span="24" class='headStyle'>
				<el-col :span="16" >
					  <img src="../assets/images/logo.jpg"/>
					
				</el-col>
				<el-col :span="8" class='verticalBottom'>
					<!--<div>-->
						<div @click="changeLanguge" >{{this.$t('languge')}}</div>
						<div>
							<div class="" v-if="this.userName ? false : true">
								<router-link to="index">{{this.$t('login')}}</router-link>
							</div>
							<div v-if="this.userName ? true : false">
								<el-dropdown @command="handleCommand">
								 <span class="el-dropdown-link">
								    {{userName}}<i class="el-icon-caret-bottom el-icon--right"></i>
								  </span>
								  
								  <el-dropdown-menu slot="dropdown">
								    <el-dropdown-item command="loginout">{{$t('loginOut')}}</el-dropdown-item>
								     
								  </el-dropdown-menu>
								</el-dropdown>
							</div>
							
							
						</div>
						
					<!--</div>-->
					
				</el-col>
			</el-col>
   
  </div>
</template>

<script>
	import {getRank} from '../api/api'
export default {
  name: 'headDiv',
  data () {
    return {
      loginStatus:false,
      userName:sessionStorage.getItem('user')
    }
  },
  created(){
//console.log(this.userName)
  	
  },
  mounted(){
  	console.log(sessionStorage.getItem('user'))
  },
  methods:{
  	handleCommand(command){
  		if(command == 'loginout'){
  			sessionStorage.removeItem('user');
  			this.$router.go(0)
  		}
  	},
		changeLanguge(){
		    	console.log(this.$i18n.locale())
		    	if(this.$i18n.locale() == 'en'){
		    		this.$i18n.set('zh')
		    	}else{
		    		this.$i18n.set('en')
		    	}
//		    	this.$i18n.locale
//		    	Vue.i18n.set('zh')
		    	console.log('change')
		    },
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
