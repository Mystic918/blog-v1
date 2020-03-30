<template>
    <div class="MyHome">
        <div class="bannerBar">
            <div class="banner">
                <div class="bannerTitle">
                    <p>专题学习 问题总结</p>
                    <p>放学别走，拿上你的书，后山森林等你</p>
                </div>
                <div class="bannerBtn"></div>
            </div>
        </div>
        <div class="main">
            <HomeLeft/>
            <HomeCenter/>
            <HomeRight/>
        </div>
    </div>
</template>

<script>
    import HomeLeft from '@/components/Home/left'
    import HomeCenter from '@/components/Home/center'
    import HomeRight from '@/components/Home/right'
    export default {
        name: "MyHome",
        components:{
            HomeLeft,HomeCenter,HomeRight,
        },
    }
</script>

<style scoped  lang="scss">
    .MyHome{
        .bannerBar{
            background-color: #2075c9;
            .banner{
                width: 1200px;
                margin: 0 auto;
                background: url(../../assets/images/banner.jpg) no-repeat;
                height: 190px;
                .bannerTitle{
                    margin-top: 20px;
                    float: left;
                    p{
                        color: #fff;
                        margin: 30px 0px;
                        margin-left: 30px;
                    }
                    p:first-child{
                        font-size: 32px;
                    }
                    p:nth-child(2){
                        font-size: 24px;
                    }
                }
                // .bannerBtn{
                // }
            }
        }

        .main{
            width: 1200px;
            margin: 30px auto;
            >div{
                float: left;
            }
            >div:nth-child(2){
                margin-left:30px;
            }
            >div:nth-child(3){
                margin-left:30px;
            }
        }
    }
</style>
