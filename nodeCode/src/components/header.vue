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
							<div class="">
								{{this.$t('login')}}
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
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
