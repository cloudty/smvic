<template>
	<div class="register ">
		<headers></headers>
		
		<el-col :span=24 class="contanteBack">
			<el-col :span=24  style="text-align: center;" class="margin_60">
				<div class="font_36">{{this.$t('registerTitle')}}</div>
				
			</el-col>
			
			
			<el-col :span=10 :offset="7" class="margin_bottom_60">
				<el-form  label-position="right" :rules='rules' ref="form" :model="form" label-width="140px"
				class='clearBoth'
				>
				  <el-form-item :label="$t('input.email')" prop='email'>
				    <el-input v-model="form.email"></el-input>
				    <span>{{this.$t('tips.accountFunction')}}</span>
				  </el-form-item>
				  <el-form-item :label="$t('input.name')" prop='name'>
				    <el-input v-model="form.name"></el-input>
				  </el-form-item>
				   <el-form-item :label="$t('input.company')" prop='company'>
				    <el-input v-model="form.company"></el-input>
				  </el-form-item>
				  <el-form-item :label="$t('input.inputPassword')" prop='password' class="redStart">
				    <el-input v-model="form.password" type="password" auto-complete="off" ></el-input>
				  </el-form-item>
				  <el-form-item :label="$t('input.confirmPassword')" prop='confirmPassword' class="redStart">
				    <el-input v-model="form.confirmPassword" type="password"></el-input>
				  </el-form-item>
				  <el-form-item :label="$t('input.tel')" >
				    <el-input v-model="form.tel" ></el-input>
				  </el-form-item>
				  <el-form-item>
				  	<el-col :span="11">
				 		<el-button class="registeBtn" @click="onSubmit('form')" >{{$t('btn.submit')}}</el-button>
				  		
				  	</el-col>
				    <el-col :span="11" style="float: right;">
				    	
				    	<router-link to="index"><el-button class="registeBtn">{{$t('btn.cancel')}}</el-button></router-link>
				    </el-col>
				    <el-col :span="24">
				    	<el-checkbox v-model="checked">{{this.$t('agreeToTheTerms1')}}</el-checkbox>
				    	<a href="">{{this.$t('agreeToTheTerms2')}}</a>
				    </el-col>
				  </el-form-item>
				</el-form>
				
			</el-col>
			
		</el-col>
		
		<footers></footers>
	</div>
</template>

<script>
	import {register} from '../api/api'
	import md5 from 'js-md5';
	import headers from '../components/header'
	import footers from '../components/footer'
	export default {
	  name: 'register',
	  components:{
	      headers,
	      footers
	    },
	  data () {
	  	let validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error(this.$t('tips.inputPassword')));
	        }else if (value.length < 6){
	        	callback(new Error(this.$t('tips.PWDcount')));
	        }
	         else {
	          if (this.form.confirmPassword !== '') {
	            this.$refs.form.validateField('confirmPassword');
	          }
	          callback();
       		}
        };
        let validatePass2 = (rule,value,callback)=>{
        	if (value === '') {
	          	callback(new Error(this.$t('tips.inputCPassword')));
	        } else if (value !== this.form.password) {
	          	callback(new Error(this.$t('tips.inputWrongPWD')));
	        } else {
	          callback();
	        }
        	
        };
        let telCheck = (rule,value,callback)=>{
        	let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
				if(!myreg.test(value))
				{ 
				   callback(new Error(this.$t('tips.telConfirme')));
				} else{
					callback();
				}
        }
	    return {
	      form: {
	          name: '',
	          email: '',
	          company: '',
	          password: '',
	          confirmPassword: '',
	          tel: ''
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
	          ],password:[
	            { validator: validatePass, trigger: 'blur' }
	          ],confirmPassword:[
	            { validator: validatePass2, trigger: 'blur' }
	          ]
//	          ,tel:[
//	          	{validator: telCheck, trigger: 'blur' }
//	          ]
	      },
	      checked:true,
	    }
	  },
	  created(){
		if(sessionStorage.getItem('user')){
			this.$router.push({ path: '/index' })
		}
	  },
	  mounted(){
	  	
	  },
	  methods:{
			onSubmit(formName) {
				
				this.$refs[formName].validate((valid) => {
					console.log(valid)
					
		          if (valid) {
		            register(this.form).then(res => {
			        	console.log(res)
			        	
			        	
			        	
			        	this.$router.push({ name: 'RegisterDone'})
			        })
		          } else {
		          	
		          	
		          	
		            console.log('error submit!!');
		            return false;
		          }
		        });
		       
		        
//		        for(var k in data){
//		        	if(data[k] !== '' && k <=4){
//		        		console.log(data[k])
//		        	}else{
//		        		console.log(123)
//		        		return ;
//		        	}
//		        }
//		        
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
		    }
		}
	}
</script>

<style>
</style>