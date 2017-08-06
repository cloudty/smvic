// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import router from './router'

import 'element-ui/lib/theme-default/index.css'

import ElementUI from 'element-ui'
import vuexI18n from 'vuex-i18n'

import { zh_cn, us_en } from './i18n/i18n'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false //关闭生产模式下给出的提示
//设置语言
const store = new Vuex.Store();
Vue.use(vuexI18n.plugin, store)

Vue.i18n.add('zh', zh_cn)
Vue.i18n.add('en', us_en)
Vue.i18n.set('zh')

Vue.config.productionTip = false



//获取session内用户信息,如果为空则跳转至首页
//router.beforeEach((to, from, next) => {
////NProgress.start();
//if (to.path == '/index') {
//  sessionStorage.removeItem('user');
//}
//let user = JSON.parse(sessionStorage.getItem('user'));
//if (!user && to.path != '/index' || to.path != '/registe') {
//  next({ path: '/index' })
//} else {
//  next()
//}
//})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
