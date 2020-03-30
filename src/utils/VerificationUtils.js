// import PageUtils from './PageUtils'
import store from '../store'
import base from 'js-base64'
export default {
    Verification:function(){
       let blog_info =  store.state.blog_info || sessionStorage.getItem('blog_info')
       if(blog_info){
       let  token = JSON.parse(base.Base64.decode(blog_info)).token 
        return token
    }else{
        this.$router.push('/login')
    }
   
    }
}