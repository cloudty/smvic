<template>
	<div class="index">
		
		<el-row>
			<headers></headers>
			<!--banner-->
			<el-col :span=24 class="carousel_box">
				<el-carousel height="500px">
			      <el-carousel-item v-for="item in images" :key="item">
			        <img src="../assets/images/home_Page_1.jpg"/>
			      </el-carousel-item>
			    </el-carousel>
			    
			    <div class="login_box">
					<div class="titles">
						<h1>SMVIC</h1>
						<h2>{{$t('checkTheRegistrationPlatform')}}</h2>
					</div>
					<div class="login_main">
						<h3>{{$t('quickLogin')}}</h3>
						<el-form label-position="letf" :rules='rules' ref='loginInputs' 
							:model='loginInfo'
							class="formStyle">
							<el-form-item prop='name'>
						    	<el-input v-model="loginInfo.name" :placeholder="$t('input.placeHolderID')"></el-input>
						    </el-form-item>
							<el-form-item prop='password'>
						    	<el-input v-model="loginInfo.password" type="password" :placeholder="$t('input.placeHolderPWD')"></el-input>
						    </el-form-item>
							<el-form-item>
								<el-col :span=24>
									<el-button @click="login('loginInputs')" class="loginBtn">
										{{$t('btn.login')}}
									</el-button>
								</el-col>
							</el-form-item>
						</el-form>
						
						<el-row>
							<el-col :span=12 class='text_a_c'>
								{{$t('getPassword')}}	
							</el-col>
							<el-col :span=12 class='text_a_c'>
								<router-link to="register">{{$t('registerTitle')}}</router-link>
								
							</el-col>
						</el-row>
					</div>
				</div>
			</el-col>
			<!--news-->
			
		
		
		
		
		</el-row>
		<el-row :span=24 class='index_news' :gutter="20">
				<el-col :span=6>
					<div class="">
						<img src="../assets/images/aboutUs.jpg"/>
					</div>
				</el-col>
				<el-col :span=9>
					<div id="newsBox" class="index_bottom">
						<div class="title">
							<div class="float_l">
								{{$t('news')}}
							</div>
							<div class="float_r">
								<router-link to="register">{{$t('more')}}》</router-link>
							</div>
						</div>
						<ul class="news_list" v-for="item of 5">
							<li>最近新闻{{item}}</li>
						</ul>
					</div>
				</el-col>
				<el-col :span=9>
					<div id="noteBox" class="index_bottom">
						<div class="title">
							<div class="float_l">
								{{$t('notice')}}
							</div>
							<div class="float_r">
								<router-link to="register">{{$t('more')}}》</router-link>
							</div>
						</div>
						<ul class="news_list" v-for="item of 5">
							<li>最近公告{{item}}</li>
						</ul>
					</div>
				</el-col>
				
			</el-row>
			<footers></footers>
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
	      msg: 'Welcome to Your Vue.js App',
	      images:[
	      	{name:'page1',urlName:'home_Page_1.jpg'}
	      ],
	      loginInfo:{
	      	name:'',
	      	password:''
	      },
	      rules:{
	      	name:{required: true, message: this.$t('tips.inputName'), trigger: 'blur' },
	      	password:{required: true, message: this.$t('tips.inputPassword'), trigger: 'blur'}
	      }
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