<template>
    <div class="home-left">
        <div class="home-title iconfont icon-wenben"><span>为你推荐</span></div>
        <div class="left-list">
            <ul>
                <li class="iconfont icon-dianzan left-body"><router-link to="/classification/hot"><span>近期热门</span></router-link> </li>
                <li class="iconfont icon-diqiu left-body"><router-link to="/classification/news"><span>最新内容</span></router-link> </li>
            </ul>

            <ul>
                <li class="left-title"><a href="#"><span>前端技术</span></a> </li>
                <li class="iconfont icon-html left-body"><router-link to="/classification/html"><span>html</span></router-link> </li>
                <li class="iconfont icon-css left-body"><router-link to="/classification/css"><span>css</span></router-link> </li>
                <li class="iconfont icon-js left-body"><router-link to="/classification/javascript"><span>javascrit</span></router-link> </li>
                <li class="iconfont icon-vue left-body"><router-link to="/classification/vue"><span>vue</span></router-link> </li>
            </ul>

            <ul>
                <li class="left-title"><a href="#"><span>后端技术</span></a> </li>
                <li class="iconfont icon-node left-body"><router-link to="/classification/node"><span>node</span></router-link> </li>
            </ul>

            <ul>
                <li class="left-title"><a href="#"><span>打包技术</span></a> </li>
                <li class="iconfont icon-webpack left-body"><router-link to="/classification/webpack"><span>webpack</span></router-link> </li>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name: "home-left"
    }
</script>

<style scoped lang="scss">
    .home-left{
        width: 170px;
        .home-title{
            background-color:#2075c9 ;
            height: 36px;
            line-height: 36px;
            padding-left: 10px;
            border-radius: 5px;
            color: #fff;
            margin-bottom: 10px;
            span{
               margin-left: 10px;
                letter-spacing: 10px;
            }
        }
        .left-list{
            ul{
                li{
                    padding: 8px 0px;
                }
                margin-bottom: 10px;
                li.left-body{
                    &:hover{
                        color: #2075c9;
                        text-decoration: underline ;
                    }
                    text-indent: 10px;
                    a{
                        span{
                            color:#7d7d7d ;
                            padding-left:10px;
                            /*letter-spacing: 5px;*/
                        }
                    }
                }
                li.left-title{
                    text-indent: 10px;
                    position:relative;
                    &::after{
                        content: '';
                        position: absolute;
                        bottom: 15px;
                        background-color: #eee;
                        height: 1px;
                        width: 90px;
                    }
                    a{
                        span{
                            color: #757575;
                        }
                    }
                }
                .icon-html{color:#E44D26 !important;}
                .icon-css{color:#264DE4 !important;}
                .icon-js{color:#40BBF1 !important;}
                .icon-vue{color:#41B883 !important;}
                .icon-node{color:#1C78C0 !important;}
                .icon-webpack{color:#8ED6FB !important;}
            }
        }
    }
</style>
