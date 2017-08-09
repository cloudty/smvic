import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/pages/Index'
import Register from '@/pages/Register'
import RegisterDone from '@/pages/RegisterDone'
import Main from '@/pages/Main'
import MyBusiness from '@/pages/myBusiness'
import FAQ from '@/pages/FAQ'
import onlineService from '@/pages/OnlineService'
import IDInfo from '@/pages/IDInfo'


Vue.use(Router)





export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      hidden:true,
      
      component: Index
      
    },{
      path: '/',
      name: 'Index',
      hidden:true,
      component: Index,
      
    },{
    	path: '/register',
    	name: 'Register',
    	hidden:true,
    	component: Register
    },{
    	path: '/registerdone',
    	name: 'RegisterDone',
    	hidden:true,
    	component: RegisterDone
    },{
    	path: '/main',
    	name: 'MyBusiness',
    	component: Main,
    	leaf:true,
    	iconCls: 'el-icon-message',
    	children: [
	      {
	        path: '/myBusiness',
	        name: 'MyBusiness',
	        component: MyBusiness
	      }
	    ]
    },{
    	path: '/faq',
    	name: 'FAQ',
    	component: Main,
    	leaf: true,
    	iconCls: 'el-icon-message',
    	children: [
	      {
	        path: '/faq',
	        name: 'FAQ',
	        component: FAQ
	      }
	    ]
    },{
    	path: '/onlineService',
    	name: 'onlineService',
    	component: Main,
    	leaf: true,
    	iconCls: 'el-icon-message',
    	children: [
	      {
	        path: '/onlineService',
	        name: 'onlineService',
	        component: onlineService
	      }
	    ]
    },{
    	path: '/idInfo',
    	name: 'idInfo',
    	component: Main,
    	leaf: true,
    	iconCls: 'el-icon-message',
    	children: [
	      {
	        path: '/idInfo',
	        name: 'IDInfo',
	        component: IDInfo
	      }
	    ]
    }
  ]
})
