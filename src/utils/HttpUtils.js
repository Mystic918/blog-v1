import axios from 'axios'
import store from '@/store'
let token = store.state.token
let headers = {}
// window.console.log(msg)
if(token){
   
    headers =   {'authorization': 'Bearer '+token}
}
let Axios = axios.create({
    baseURL: '/api',
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