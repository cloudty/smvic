<template>
	<div class="main ">
		<headers></headers>
		<div class="contanteBack">
			<el-row :span=24 class="mainDiv" >
				<el-col :span=5 class="nav" >
					<el-menu :default-active="$route.path" 
						router
						unique-opened
						class="nav_ul" 
						@open="handleOpen" 
						@close="handleClose" 
						collapse="true"
						>
						<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
							<el-submenu :index="index+''" v-if="!item.leaf">
								<template slot="title"><i :class="item.iconCls"></i>{{$t(item.name)}}</template>
								<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{$t(child.name)}}</el-menu-item>
							</el-submenu>
							<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{$t(item.children[0].name)}}</el-menu-item>
						</template>
						
						
					  <!--<el-submenu index="1">
					    <template slot="title">
					      <i class="el-icon-message"></i>
					      <span slot="title">导航一</span>
					    </template>
					    <el-menu-item-group>
					      <span slot="title">分组一</span>
					      <el-menu-item index="1-1">选项1</el-menu-item>
					      <el-menu-item index="1-2">选项2</el-menu-item>
					    </el-menu-item-group>
					    <el-menu-item-group title="分组2">
					      <el-menu-item index="1-3">选项3</el-menu-item>
					    </el-menu-item-group>
					    <el-submenu index="1-4">
					      <span slot="title">选项4</span>
					      <el-menu-item index="1-4-1">选项1</el-menu-item>
					    </el-submenu>
					  </el-submenu>
					  <el-menu-item index="2">
					    <i class="el-icon-menu"></i>
					    <span slot="title">导航二</span>
					  </el-menu-item>
					  <el-menu-item index="3">
					    <i class="el-icon-setting"></i>
					    <span slot="title">导航三</span>
					  </el-menu-item>-->
					</el-menu>

				</el-col>
				<el-col :span=19 class="mainright">
					<router-view></router-view>
				</el-col>
				
				
			</el-row>
		</div>
			
			
			
		
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
	      
	    }
	  },
	  components:{
	      headers,
	      footers
	    },
	  created(){
		console.log(this.$router)
		
		
	  },
	  mouted(){
	  	console.log(this.loginInfo)
	  },
	  methods:{
	  	handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	  }
	  	
	}
</script>

<style>
</style>