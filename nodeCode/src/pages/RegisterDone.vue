<template>
	<div class="index">
		
		<el-row>
			<headers></headers>
			<el-col :span=24 class="">
				<div class="contanteBack">
					<el-row type='flex' justify="center" :span=24 align='middle' class="minHeight_720">
						<el-col :span=6 class="registerInfo">
							<div v-if='registerStatus = "faild" ? false : true'>
								<img src="../assets/images/registerDone.png" alt="" />
								<h1 v-if='registerStatus = "faild" ? false : true'>{{$t('registerDone')}}</h1>
								
								<div class="">
									{{$t('registerDoneInfo')}}
								</div>
								
							</div>
							<div v-if='registerStatus = "faild" ? true : false'> 
								<img src="../assets/images/registerFaild.png" alt="" />
								
								
								<h1>{{$t('registerFaild')}}</h1>	
								<div class="">
									{{$t('registerFaildInfo')}}
								</div>
							</div>
							
							
							
						</el-col>
						
						
					</el-row>
					
					
					
				</div>
			</el-col>
			
			    
			   
			<footers></footers>
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
	      registerStatus:'faild',
	    }
	  },
	  components:{
	      headers,
	      footers
	    },
	  created(){

		
		
	  },
	  mouted(){
	  	console.log(this.loginInfo)
	  },
	  methods:{
	  	login(val){
	  		this.$refs[val].validate((valid) => {
					console.log(valid)
		          if (valid) {
		          	this.loginInfo.password = md5(this.loginInfo.password)
		            console.log(this.loginInfo)
		          } else {
		          	
		          	
		          	
		            console.log('error submit!!');
		            return false;
		          }
		        });
	  	},
	  	
			gettest(){
				getRank().then(res => {
					console.log(res.data)
				})
			},
			logintest(){
				gid:md5(121212)
				let params = {
					gid:'test',
					pwd:'123456'
				}
				getLogin(params).then(res => {
					console.log(res.data)
				})
				
				
			}
		}
	}
</script>

<style>
</style>