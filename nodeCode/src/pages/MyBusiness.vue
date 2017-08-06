<template>
	<div class="MyBusiness">
		
		<el-row :span=24>
			<el-col :span=24>
				<h1>{{$t('MyBusiness')}}</h1>
			</el-col>
			<el-col :span=24 class="rightMain">
				<h2>
					{{$t('newOrder')}}
				</h2>
				<el-form  label-position="right" :rules='rules' ref="order" :model="order" label-width="140px"
				class='clearBoth'
				>
				  <el-form-item :label="$t('input.orderNo')" prop='orderNo'>
				    <el-input v-model="order.orderNo" :placeholder="$t('input.phOrderNo')"></el-input>
				   
				  </el-form-item>
				  <el-form-item :label="$t('input.orderType')" prop='type'>
				    <el-input v-model="order.type"></el-input>
				  </el-form-item>
				   <el-form-item>
				  	<el-col :span="11">
				 		<el-button class="registeBtn" @click="onSubmit('order')" >{{$t('btn.submit')}}</el-button>
				  		
				  	</el-col>
				    <el-col :span="11" style="float: right;">
				    	<el-button class="registeBtn">{{$t('btn.cancel')}}</el-button>
				    </el-col>
				    
				  </el-form-item>
				</el-form>
				
				<h2>{{$t('orderList')}}</h2>
				
				
				
				
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
	  	onSubmit(val){
	  		console.log(val)
	  	}
	  }
	}
</script>

<style>
</style>