<template>
<div class="information">
    <div class="main">
      <div class="information-bg"><img src="@/assets/images/information.png"/></div>
        <div class="information-plant">
            <div class="title-plant">不会以任何理由要求您转账汇款，谨防诈骗。</div>
            <div class="login-title">账号登录</div>
            <div class="login-content">
                <form  action=""  method="post" enctype="multipart/form-data">
                <div><input type="text" name="username" placeholder="请输入用户名" v-model="username"/></div>
                <div><input type="password" name="password" placeholder="请输入密码" v-model="password" /></div>
                <div><a href="#">忘记密码</a></div>
                <div class="btn-send" @click="login">确定</div>
                <div class="btn-reset"> <router-link to="/InformationReset">没账号？立即注册</router-link></div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import HttpUtils from '@/utils/HttpUtils'
import {Message} from '@/utils/GetInfo'
import base64 from 'js-base64'
    // import Qs from 'qs'
    export default {
        name: "information",
        data(){
            return{
                username:'',
                password:''
            }
        },
        mounted(){

        },
        methods:{
            login:function(){
                if(this.username===''){alert('请输入账号');return;}
                if(this.password===''){alert('请输入密码');return;}
                const _this = this
                let params = {
                    username: this.username,
                    password: base64.Base64.encode(this.password)
                    }
                    HttpUtils.post('/api/PersonalCenter/login',params).then(result=>{
                        // window.console.log(result)
                        
                        if(result.data.code===200){
                            // params.token = result.data.Token 
                            // window.console.log(params)
                            let blog_info = JSON.parse(base64.Base64.decode(result.data.msg))
                            blog_info.token=result.data.Token
                            blog_info = base64.Base64.encode(JSON.stringify(blog_info))
                            _this.$store.commit('SET_BLOG_INFO',blog_info)
                            _this.$store.commit('SET_USERNAME',_this.username)
                            window.sessionStorage.setItem('blog_info',blog_info)
                            window.sessionStorage.setItem('username',_this.username)
                              history.go(-1)
                            let message = new Message(blog_info)
                            window.console.log(message.getToken())
                        }else if(result.data.code==404){
                            alert("账户或密码错误！！！")
                        }else{
                            alert("服务器异常！！！")
                        }
                        window.console.log(result)
                    })
                    .catch(err => {
                        window.console.log(err)
                    })

            
            }
        }
    }
</script>

<style scoped lang="scss">
.information{
    width: 100%;
    min-height: 500px;
    display: block;
    background-color: #63a5e6;
    .main{
        width: 1200px;
        margin: 0 auto;
        .information-bg{
            float: left;
            margin-top: 50px;
            img{
                width: 600px;

            }
        }
        .information-plant{
            background-color: #fff;
            margin-top: 50px;
            margin-right: 100px;
            float: right;
            border: 1px solid #2075c9 ;
            width: 400px;
            height:400px;
            .title-plant{
                padding: 15px;
                background-color: #bcdeff;
                font-size: 14px;
                color: #787878;
            }
            .login-title{
                height: 40px;
                font-size: 24px;
                color:#2075c9 ;
                text-align: center;
                height: 50px;
                line-height: 50px;
            }
            .login-content{
               padding: 20px;
                form {
                    > div:first-child, div:nth-child(2) {
                        input {
                            height: 40px;
                            width: 100%;
                        }
                        margin-bottom: 15px;
                        padding: 0px 10px;
                        border: 1px solid #2075c9;
                    }
                    > div:nth-child(3) {
                        &:after {
                            content: '';
                            display: table;
                            clear: both;
                        }
                        a {
                            float: right;
                            font-size: 14px;
                            color: #333;
                        }
                    }
                    > div:nth-child(4) {
                        padding: 10px 0px;
                        margin-top: 30px;
                        font-size: 18px;
                        color: #fff;
                        width: 100%;
                        background-color: #2075c9;
                        text-align: center;
                        cursor: pointer;
                    }
                    > div:nth-child(5) {
                        a {
                            color: #333;
                            font-size: 12px;
                        }
                        margin-top: 10px;
                        font-size: 18px;
                        width: 100%;
                        text-align: right;
                    }
                }
            }
        }
    }
}
</style>
