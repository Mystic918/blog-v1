<template>
    <div class="MyHeader">
        <div class="mynav">
            <div class="mylogo">
                <router-link to="/"><img src="@/assets/images/logo.png"/></router-link>
            </div>
            <div class="mynav-bar">
                <ul>
                    <li><router-link to="/home">首页</router-link> </li>
                    <li><router-link to="/edit">发文</router-link> </li>
                    <li><router-link to="/classification/hot">专题</router-link> </li>
                    <li><a href="#">圈子</a></li>
                    <li><a href="#">发现</a></li>
                    <li><a href="#">补充</a></li>
                </ul>
            </div>
            <div  class="search" :class=" animate1===true ? 'search1':'search2' ">
                <input name="search" placeholder="请输入" @click.stop.prevent="addsearch($event,true)"  @blur.stop.prevent="addsearch($event,false)"   :class=" animate2===true ? 'input1':'input2' "/>
                <div class="iconfont icon-search"></div>
            </div>
            <div class="btn">
                <div class="init"  v-show="!username">
                    <span><router-link to="/InformationLogin">立即登录</router-link></span>
                    <span> <router-link to="/InformationReset">免费注册</router-link></span>
                </div>

                <div class="head" v-show="username">
                   <span>
                       <!--<img src="@/assets/images/logo.png" alt="">-->
                      <router-link to="/personal">{{username}}</router-link> ，欢迎登录
                   </span>
                    <span><a @click="ResetLogin">注销</a></span>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "MyHeader",
        data(){
            return{
                // username:this.$store.state.username,
                animate1:false,
                animate2:false
            }
        },
        methods:{
            addsearch:function(event,boolean){
                const ev = window.event || event;
                ev.cancelBubble=true
                // window.console.log(ev)
                if(boolean){
                    this.animate1=true
                    this.animate2=true
                    ev.currentTarget.parentElement.style.left="180px"
                    ev.currentTarget.parentElement.style.border="1px solid #2075c9"
                    ev.target.style.width="700px"
                }else{
                    this.animate1=false
                    this.animate2=false
                    ev.currentTarget.parentElement.style.left="680px"
                    ev.currentTarget.parentElement.style.border="1px solid #ccc"
                    ev.target.style.width="200px"
                }

        },
            ResetLogin:function(){
                this.$store.commit('CLEAR_SESSION')
                this.$router.push("/")
            }
        },
        computed:{
            ...mapState(['username'])
        }
    }
</script>

<style scoped lang="scss">
    @-webkit-keyframes search1  {
        0% {
            left: 680px;
        }
        100%{
            left: 180px;
        }
    }
    @-webkit-keyframes search2 {
        0% {
            left: 180px;
        }
        100%{
            left: 680px;
        }
    }
    @-webkit-keyframes input1 {
        0% {
            width: 200px;
        }
        100%{
            width: 700px;
        }
    }
    @-webkit-keyframes input2 {
        0% {
            width: 700px;
        }
        100%{
            width: 200px;
        }
    }
.search1{
    left:180px ;
    animation: search1 1s ease;
}
.search2{
    animation: search2 1s ease;
}
.input1{
        animation: input1 1s ease;
}
.input2{
    width: 200px;
        animation: input2 1s ease;
}
.MyHeader{
    width: 100%;
    border-top: 3px solid #2075c9;
    height: 70px;
    background-color: #fafafa;
    .mynav{
        >div{
            float: left;
        }
        width: 1200px;
        margin: 0 auto;
        position: relative;
        .mylogo{
            width: 200px;
            img{
               margin-top: 17px;
            }
        }
        .mynav-bar{
            li{
                padding: 0 20px;
                float: left;
                line-height: 70px;

                &:hover{
                    color: #2075c9;
                    text-decoration: underline ;
                }
                a{
                    color: #757575;
                    font-weight: bold;
                }
            }
        }
        .search{
            overflow: hidden;
            position: absolute;
            z-index: 2;
            top: 15px;
            left: 680px;
            /*width: 200px;*/
            height: 40px;
            border: 1px solid #ccc;
            background-color: #fff;
            border-radius: 10px;
            input{
                float: left;
                height: 40px;
                padding: 0 10px;
                width: 200px;
            }
            .icon-search{
                color: #ccc;
                width: 20px;
                height: 20px;
                float: right;
                line-height: 40px;
                padding-right: 10px;
            }
        }
        .btn{
            float: right;
            line-height: 70px;
            .init{
                span{
                    padding: 10px 20px;
                }
                span:first-child{
                    font-weight: bold;
                    a{
                        color:#2075c9;
                    }
                    &:hover{
                        color: #2075c9;
                        text-decoration: underline ;
                    }
                }
                span:nth-child(2){
                    font-weight: bold;
                    background-color: #2075c9;
                    border-radius: 10px;
                    a{
                        color:#fff;
                    }
                    &:hover{
                        color: #2075c9;
                        text-decoration: underline ;
                    }
                }
            }

            .head{
                span{
                    float: left;
                    line-height: 70px;

                }
                span:first-child{
                    font-weight: bold;
                    color: #787878;
                    a{
                        color: #787878;
                        text-decoration:underline;
                    }
                    /*overflow: hidden;*/
                    /*width: 50px;*/
                    /*height: 50px;*/
                    /*border-radius: 20px;*/
                    /*margin: 10px 30px;*/
                   /*img{*/
                       /*width: 60px;*/
                       /*height: 60px;*/
                   /*}*/
               }
                span:nth-child(2){
                    margin-left: 20px;
                    font-weight: bold;
                    border-radius: 10px;
                    a{
                        color:#2075c9;
                    }
                    &:hover{
                        color: #2075c9;
                        text-decoration: underline ;
                    }
                }
            }
        }
    }
}
</style>
