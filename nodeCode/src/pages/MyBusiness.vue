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
				    <el-select v-model="typefChoose"
				    	@change="firstSelect"
				    	>
				    	<el-option 
				    		v-for="item in typeflist"
				    		:key="item.categoryid"
					      	:label="item.name"
					      	:value="item.categoryid">
				    		
				    	</el-option>
				    	
				    	
				    </el-select>
				    <el-select v-model="typesChoose" 
				    	@change="secondSelect"
				    	>
				    		<el-option 
					    		v-for="item in typeslist"
					    		:key="item.categoryid"
						      	:label="item.name"
						      	:value="item.categoryid">
				    		
				    		</el-option>
			    	</el-select>
				    <el-select v-model="order.details" 
				    	@change="threedSelect"
				    	>
				    		<el-option 
					    		v-for="item in typetlist"
					    		:key="item.categoryid"
						      	:label="item.name"
						      	:value="item.categoryid">
				    		
				    		</el-option>
				    </el-select>
				    
				    
				    
				  </el-form-item>
				   <el-form-item :label="$t('chiefengineer')">
				   	<el-row>
				   		<el-col :span=10>
				   			{{chief.name}}&nbsp;
				   		</el-col>
				   		<el-col :span=14>
				   			{{$t('tel')}}  
				   			<span v-if="this.chief.tel ? true : false">
				   				{{chief.tel}}
				   			</span>
				   			
				   		</el-col>
				   		
				   	</el-row>
				   		
				   		<span>
				   			
				   		</span>
				   </el-form-item>
				  	
				  	
				  
				   <el-form-item>
				   	<el-row type="flex" :gutter="30" justify="start">
				   		
				   	
					  	<el-col :span="5">
					 		<el-button class="registeBtn" @click="onSubmit(order)" >{{$t('btn.submit')}}</el-button>
					  		
					  	</el-col>
					    <el-col :span="5" style="float: right;">
					    	<el-button class="registeBtn">{{$t('btn.cancel')}}</el-button>
					    </el-col>
				    </el-row>
				  </el-form-item>
				</el-form>
				
				<h2>{{$t('orderList')}}</h2>
				<el-row class="orderList">
					<el-col class="searchDiv">
						<el-col :span=4 class="text_r">
							<span>{{$t('search')}}</span>
						</el-col>
						<el-col :span=16>
							<el-input v-model="searchVal" :placeholder="$t('searchplh')"></el-input>
							
						</el-col>	
						<el-col :span=4>
							<el-button type="primary">
								{{$t('serachs')}}
							</el-button>
						</el-col>
					</el-col>
					<el-col :span=24>
						<el-table
			    :data='tableInfo'
			    border
			   	align="center"
			   
			   	
			   	ref="tableM"
			    >
			    <el-table-column
					      prop="date"
					      :label="$t('orderNo')"
					      type='expand'
					    	align="center"
					      >
					    </el-table-column>
			     <el-table-column
					      prop="date"
					      :label="$t('orderNo')"
					      align="center"
					      >
					    </el-table-column>
					    <el-table-column
					      prop="date"
					      :label="$t('creatDate')"
					      
					      align="center"
					      >
					    </el-table-column>	
						<el-table-column
					      prop="date"
					       :label="$t('lastDate')"
					      
					      align="center"
					      >
					    </el-table-column>
					    <el-table-column
					      prop="date"
					      :label="$t('lastStatus')"
					    	align="center"
					      >
					    </el-table-column>
					    <el-table-column
					      prop="date"
					      :label="$t('remark')"
					      
					      
					      align="center"
					      >
					    </el-table-column>
					    <el-table-column
					      prop="date"
					      :label="$t('operating')"
					      
					    	align="center"
					      >
					    </el-table-column>
			  </el-table>
						
					</el-col>
					
				
				
				
				
				
				
				</el-row>
				
				
				
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
	    	searchVal:'',
	    	typelist:[],
	    	typeflist:[],
	    	typeslist:[],
	    	typetlist:[],
	    	typefChoose:'',
	    	typesChoose:'',
	    	
	    	chief:{
	    		name:'',
	    		tel:'',
	    	},
	      order:{
	      	orderNo:'',
	      	details:'',
	      	
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
	      tableInfo:[]
	    }
	  },
	  components:{
	      headers,
	      footers
	    },
	  created(){
		this.getList()
		
		
	  },
	  mounted(){
	  	
	  	
	  	
	  },
	  methods:{
	  	firstSelect(val){
	  		
	  		let slist = this.typelist.second
	  		let temp = [];
	  		for(let k in slist){
	  			if(slist[k].parentid == val){
	  				temp.push(slist[k])
	  			}
	  		}
	  		
	  		this.typeslist = temp;
	  		this.typesChoose = temp[0].categoryid
	  	},
	  	secondSelect(val){
	  		
	  		let tlist = this.typelist.threed
	  		let temp = [];
	  		for(let k in tlist){
	  			if(tlist[k].parentid == val){
	  				temp.push(tlist[k])
	  			}
	  		}
	  		
	  		this.typetlist = temp;
	  		this.order.details = temp[0].categoryid
	  	},
	  	threedSelect(val){
	  		
	  		let tlist = this.typelist.threed
	  		let temp = [];
	  		for(let k in tlist){
	  			if(tlist[k].categoryid == val){
	  				this.chief.name = tlist[k].chiefengineer
	  				this.chief.tel = tlist[k].tel
	  				
	  			}
	  		}
	  		
//	  		this.typetlist = temp;
	  		
	  	},
	  	getList(){
	  		let list=[]
	  		getRank().then(res => {
	  			this.typelist = res.data;
	  			let first = res.data.first;
//	  			second = res.data.second,
//	  					threed  = res.data.threed;
	  			list = res.data
	  			this.typeflist = first;
//	  			this.typeslist = second;
//	  			console.log(second)
//	  			console.log(list)
	  			
	  			
	  			
	  		})
	  	},
//	  	resetArray(first,second,threed){
//	  		let finallyData = [];
//	  		console.log(first)
//	  		console.log(second)
//	  		console.log(threed)
//	  		
//	  		console.log(this.typeflist)
//	  		for(let k in second){
//	  			second[k].children = [];
//	  			for(let i in threed){
//	  				if(threed[i].parentid == second[k].categoryid){
////	  					console.log(second[k].children)
//	  					second[k].children.push(threed[i])
//	  				}
//	  			}
//	  			console.log(second)
//	  		}
//	  		
//	  		
//	  		
//	  	},
	  	onSubmit(val){
	  		console.log(val)
	  	}
	  }
	}
</script>

<style>
</style>