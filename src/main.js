import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
//import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont/iconfont.css'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.transformRequest = [function (data) {
//     let ret = ''
//     for (let it in data) {
//         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//     }
//     return ret
// }]

//Vue.prototype.axios = axios

// import Axios from 'axios'

// import {Message} from '@/utils/GetInfo'
// import VueAxios from 'vue-axios'
// // 通过use方法加载axios插件
// Vue.use(VueAxios,axios);

// // 添加一个请求拦截器
// axios.interceptors.request.use(function (config) {
//   let url = config.url;
//   let arr = [/\/public\/[A-Za-z0-9]{1,}/,/\/PersonalCenter\/login/,/\/information\/uploadimg2/,/\/information\/uploadimg/]
 
//  var some = arr.some(function(index){   // some  一真即真
//   return   index.test(url)
// })
//   if ( some) {
//   // alert(url)
//   }
//   else{
//     let msg = new Message(window.localStorage.getItem('blog_info'))
//     let token = msg.getToken()
//      alert(token)
//     //  axios.defaults.headers.common['authorization'] = token;
//     config.headers.authorization = this.token;
//   } 
// return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// // 添加一个响应拦截器
// axios.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });


// //响应拦截器
// Axios.interceptors.response.use(function(response) {
//   //获取更新的token
//   const { authorization } = response.headers;
//   //如果token存在则存在localStorage
//   authorization && localStorage.setItem('tokenName', authorization);
//   return response;
//  },
//  function(error) {
//   if (error.response) {
//    const { status } = error.response;
//    //如果401或405则到登录页
//    if (status == 401 || status == 405) {
//     history.push('/InformationLogin/');
//    }
//   }
//   return Promise.reject(error);
//  }
// );




Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
