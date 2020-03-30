<template>
    <div class="personal">
        <div class="main">
            <div class="information">
                    <div class="mainpic">
                        <img src="@/assets/images/logo.png" alt="">
                        <div class="photo">
                            <span>我的名字</span>
                            <span>修改头像</span>
                        </div>
                        <div class="journal">
                            <span>最近一次敏感操作：</span>
                            <span>2019-04-09 11:25:03设置头像61446676357</span>
                            <span><a href="#">查看更多</a></span>
                        </div>

                    </div>

            </div>

            <div class="list">
                <List :list="list" />
            </div>

        </div>
    </div>
</template>

<script>
    // import Qs from 'qs'
    import List from '@/components/list'
    import HttpUtils from '@/utils/HttpUtils'
    export default {
        name: "index",
        data(){
            return{
                list:[]
            }
        },
        components:{
            List
        },
        mounted(){

            HttpUtils.post('/information/getpersonalList',
                {"username":this.$store.state.username,"token":this.$store.state.Token}
            ).then((result)=>{
                window.console.log(result)
                this.list = result.data.data
            }).catch(error=>{
                alert(error)
            })
        }
    }
</script>

<style scoped lang="scss">
.personal{
    .main{
        width: 1200px;
        margin: 30px auto;
        >div{
            float: left;
        }
        .list{
            margin-left: 30px;
        }
        .information{
            padding: 15px;
            width: 220px;
            background-color: #fafafa;
            .mainpic{
                position: relative;
                height: 600px;
                img{
                    position: absolute;
                    left: 10px;
                    top: 0px;
                    width: 80px;
                    height: 80px;
                    background-color: greenyellow;
                }
                .photo{
                    float: right;
                    width: 120px;
                    height: 80px;
                    span{
                        display: block;
                    }
                    span:first-child{
                        color: #333;
                        height: 40px;
                        line-height: 40px;
                        margin-top: 10px;
                        font-size: 20px;
                    }
                    span:nth-child(2){
                        margin-top: 5px;
                        color:#2075c9 ;
                        font-size: 14px;
                        cursor: pointer;
                    }
                    &:after{
                        clear: both;
                        display: table;
                        content: '';
                    }
                }
                .journal{
                    margin-top: 15px;
                    float: left;
                    span{
                        display: block;
                        font-size: 12px;
                        color: #666;
                    }
                    span:first-child{
                        height: 20px;
                        font-weight: 700;
                    }
                    span:nth-child(2){
                        line-height: 18px;
                    }
                    span:nth-child(3){
                        margin-top: 10px;
                        a{
                            font-size: 12px;
                            color: #2075c9;
                        }
                    }
                }
            }
        }
    }

}
</style>
