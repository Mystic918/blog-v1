import axios from 'axios'
// import PageUtils from './PageUtils'
import {Message} from './GetInfo'
let msg = new Message(window.sessionStorage.getItem('blog_info'))
let token = msg.getToken()
let headers = {}
window.console.log(msg)
if(token){
   
    headers =   {'authorization': 'Bearer '+token}
}
let Axios = axios.create({
    baseURL: '/',
    timeout: 1000,
    headers: headers
});



export default {
    get:function(){

        let url = arguments[0] || ''
        let params = arguments[1] || {}
        // let headers = arguments[2] || {}
        return new Promise(resolve=>{
            Axios({
                method:'get',
                url:url,
                params:params,
                headers:headers
            }).then(rs=>{
                resolve(rs)
            })
        })
    },
    post:function(){

        let url = arguments[0] || ''
        let params = arguments[1] || {}
        // let headers = arguments[2] || {}
        return new Promise(resolve=>{
            Axios({
                method:'post',
                url:url,
                data:params,
                headers:headers
            }).then(rs=>{
                resolve(rs)
            })
        })
    }
}