<template>
<div class="information">
    <div class="main">
      <div class="information-bg"><img src="@/assets/images/information.png"/></div>
        <div class="information-plant">
            <div class="title-plant">不会以任何理由要求您转账汇款，谨防诈骗。</div>
            <div class="login-title">账号注册</div>
            <div class="login-content">
                <div><input type="text" name="username" placeholder="请输入用户名" v-model="username"  /></div>
                <div><input type="password" name="password" placeholder="请输入密码" v-model="password"   /></div>
                <div><input type="password" name="password" placeholder="请再次输入密码" v-model="password2" /></div>
                <input type="button" class="btn-send"  @click="send_Register"  @keyup.enter="send_Register" value="确定">
                <div class="btn-reset"><router-link to="/InformationLogin">已有账号？去登录</router-link></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import Qs from 'qs'
    export default {
        name: "information",
        data(){
            return{
                username:'',
                password:'',
                password2:''
            }
        },
        methods:{
            send_Register:function(){
                let isopen = 'yes'
                if(isopen){
                alert("权限不对外开放，有兴趣联系作者")
                return false
                }

                

                if(this.username===""){
                    alert("请输入用户名")
                    return
                }
                if(this.password===""){
                    alert("请输入密码")
                    return
                }
                if(this.password2===""){
                    alert("请输入确认密码")
                    return
                }
                if(this.password!==this.password2){
                    alert("两次密码不一致")
                    return
                }

                this.axios.post('/api/PersonalCenter/register',
                    Qs.stringify(  {"username":this.username, "password": this.password})
                ).then((result)=>{
                    if(result.data.code==200){
                        if(!window.confirm("注册成功，是否去登录？"))return
                        this.$router.push("/InformationLogin")
                        // window.console.log(result)
                        
                    }else{
                         alert("用户已存在！")
                    }
                }).catch(error=>{
                    alert(error)
                })
            }
        },
        //自定义指令
        // directives: {
            // focus: {
            //     inserted: function (el, {value}) {
            //         if (value) {
            //             el.focus();
            //         }
            //     }
            // },
            // blur: {
            //     inserted: function (el, {value}) {
            //         if (value) {
            //             el.blur
            //         }
            //     }
            // }
        // }
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
                >div:first-child,div:nth-child(2),div:nth-child(3){
                    input{
                        height: 40px;
                        width: 100%;
                    }
                    margin-bottom: 15px;
                    padding: 0px 10px ;
                    border: 1px solid #2075c9;
                }
                >input{
                    padding: 10px 0px;
                    font-size: 18px;
                    color: #fff;
                    width: 100%;
                    background-color: #2075c9;
                    text-align: center;
                    cursor: pointer;
                }
                >div:nth-child(5){
                    a{
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
</style>
