import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/pages/Index'
import Register from '@/pages/Register'
import RegisterDone from '@/pages/RegisterDone'
import Main from '@/pages/Main'
import MyBusiness from '@/pages/myBusiness'
import NewOrder from '@/pages/newOrder'



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
	        name: 'newOrder',
	        component: MyBusiness
	      }
	    ]
    },{
    	path: '/newOrder',
    	name: 'FAQ',
    	component: Main,
    	leaf: true,
    	iconCls: 'el-icon-message',
    	children: [
	      {
	        path: '/newOrder',
	        name: 'FAQ',
	        component: NewOrder
	      }
	    ]
    },{
    	path: '/main',
    	name: 'MyBusiness',
    	component: Main,
    	leaf: true,
    	iconCls: 'el-icon-message',
    	children: [
	      {
	        path: '/myBusiness',
	        name: 'onlineService',
	        component: MyBusiness
	      }
	    ]
    },{
    	path: '/main',
    	name: 'MyBusiness',
    	component: Main,
    	leaf: true,
    	iconCls: 'el-icon-message',
    	children: [
	      {
	        path: '/myBusiness',
	        name: 'IDInfo',
	        component: MyBusiness
	      }
	    ]
    }
  ]
})
