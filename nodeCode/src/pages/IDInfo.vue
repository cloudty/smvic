<template>
	<div class="MyBusiness">
		
		<el-row :span=24>
			<el-col :span=24>
				<h1>{{$t('IDInfo')}}</h1>
			</el-col>
			<el-col :span=24 class="rightMain">
				<h2>
					建设中
				</h2>
				
				
				
				
				
				
				
			</el-col>
		</el-row>
		
	</div>
</template>

<script>
	import {getRank,getLogin} from '../api/api'
	import md5 from 'js-md5';
	import headers from '../components/header'
	import footers from '../components/footer'
	export default {
	  name: 'Index',
	  data () {
	    return {
	      order:{
	      	orderNo:'',
	      	typeChoose:'',
	      	typeList:[]
	      },
	      rules:{
	      	name:[
	            { required: true, message: this.$t('tips.inputName'), trigger: 'blur' }
	          ],
	          email:[
	            { required: true, message: this.$t('tips.inputEmail'), trigger: 'blur' },
	            { type: 'email', message: this.$t('tips.emailConfirme'), trigger: 'blur,change' }
	          ],company:[
	            { required: true, message: this.$t('tips.inputCompany'), trigger: 'blur' }
	          ]
//	          ,tel:[
//	          	{validator: telCheck, trigger: 'blur' }
//	          ]
	      },
	    }
	  },
	  components:{
	      headers,
	      footers
	    },
	  created(){
		
		
		
	  },
	  mouted(){
	  	
	  	
	  	
	  },
	  methods:{
	  	
	  	
	  }
	}
</script>

<style>
</style>