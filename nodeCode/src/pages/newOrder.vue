<template>
	<div class="newOrder">
		
		<el-row :span=24>
			<el-col :span=24>
				
			</el-col>
			<el-col :span=24 class="rightMain">
				<el-form  label-position="right" :rules='rules' ref="order" :model="order" label-width="140px"
				class='clearBoth'
				>
				  <el-form-item :label="$t('input.orderNo')" prop='orderNo'>
				    <el-input v-model="order.orderNo" :placeholder="$t('input.phOrderNo')"></el-input>
				   
				  </el-form-item>
				  <el-form-item :label="$t('input.orderType')" prop='type'>
				    <el-input v-model="order.type"></el-input>
				  </el-form-item>
				   
				</el-form>
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
	      	type:''
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