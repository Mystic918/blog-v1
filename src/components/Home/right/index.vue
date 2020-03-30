<template>
    <div class="home-right">
        <div class="message">
            个人的笔记·<br>
            一些个人的工作笔记·<br>
            工作的难题分析·<br>
            待完善·<br>
        </div>
        <div class="swiper-plant">
            <div class="plant-title">热门推荐<span><router-link to="/classification/hot">进入</router-link> </span></div>
            <el-carousel :interval="5000" arrow="hover" indicator-position="none" :autoplay=true  >
                <el-carousel-item v-for="item in hots" :key="item.id">
                    <router-link :to="item.create_time|time(item.doc_id)" >
                        <img :src="item.pic" alt="swiper4">
                    <div class="plant-content">
                        <div>{{item.title}}</div>
                        <div>
                            <el-rate
                                :value="item.hot | FilterHot"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                                </el-rate>
                        </div>
                        <div>参与人数：{{item.hot}}</div>
                    </div>
                    </router-link>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="popular-plant">
            <div class="plant-title">近期话题 <span><router-link to="/classification/news">更多</router-link></span></div>
            <ul>
                <li v-for="item in docs" :key="item.id">
                    
                        <router-link :to="item.create_time|time(item.doc_id)" >
                    <div class="plant-data">
                        <div>{{item.create_time|filtertimey}}</div>
                        <div>{{item.create_time|filtertimer}}</div>
                    </div>
                    <div class="plant-content">
                        <div>{{item.title}}</div>
                        <div><span>{{item.author}}</span>•<span>{{item.create_time|filtertimeyr}} • 周二</span></div>
                    </div>
                </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import HttpUtils from '@/utils/HttpUtils'
    export default {
        name: "index",
        data () {
            return {
                munber:5,
                docs:[],
                hots:[],
                value:4.5
            }
        },
        mounted () {
            this.getDocument(1,this.munber)
            this.gethot(1,this.munber)
        },
        methods: {
            getDocument(page,number){
                         const _this = this
                const params = {"page":page,"number":number}
                    HttpUtils.get('/public/getDocument',params).then(rs=>{
                if(page<=rs.data.page){
                            _this.count=rs.data.count
                                if( rs.data.code===200){
                                let data = rs.data.data 
                                   this.docs = data.filter((index)=>{ 
                                        return index.pic!=''
                                   }) 
                                }
                      }

                    })

            },
            gethot(page,number){
                                         const _this = this
                const params = {"page":page,"number":number}
                    HttpUtils.get('/public/gethot',params).then(rs=>{ 
                if(page<=rs.data.page){
                            _this.count=rs.data.count
                                if( rs.data.code===200){
                                let data = rs.data.data 
                                   this.hots = data.filter((index)=>{ 
                                        return index.hot>0  && index.pic!==''
                                   }) 
                                }
                      }

                    })
            } 
        },
        filters: {
            FilterHot(msg){
                    if(msg>999){
                        alert(1)
                      return    5
                    }else if(999>=msg&&msg>99){
                        return 4

                    }else if(99>=msg&&msg>50){
                        return 3
                    }else if(50>=msg&&msg>30){
                        return 2
                    }else if(30>=msg&&msg>0){
                         return 1
                    }
                }, 
            time:function(data,docid){
                return "/content/"+data.split(" ")[0].split('-').join("")+"/"+docid
            },
            filtertimeyr:function(time){
               return  time.split('-')[1]+'-'+time.split('-')[2]
            },
            filtertimey:function(time){
                let y = time.split('-')[1]
                switch(y){
                    case  '01':
                        y="Jan"
                        break;
                    case  '02':
                        y="Feb"
                        break;
                    case  '03':
                        y="Mar"
                        break;
                    case  '04':
                        y="Apr"
                        break;
                    case  '05':
                        y="May"
                        break;
                    case  '06':
                        y="Jun"
                        break;
                    case  '07':
                        y="Jul"
                        break;
                    case  '08':
                        y="Aug"
                        break;
                    case  '09':
                        y="Sep"
                        break;
                    case  '10':
                        y="Oct"
                        break;
                    case  '11':
                        y="Nov"
                        break;
                    case  '12':
                        y="Dec"
                        break;
                }
               return  y
            },
            filtertimer:function(time){
               return  time.split('-')[2]
            }
       
        }
    }
</script>

<style scoped lang="scss">
    .home-right{
        width: 200px;
        .message{
            font-size: 13px;
            padding: 15px;
            background-color: #faebcc;
            border-color: #faebcc;
            color: #8a6d3b;
            border-radius: 5px;
            line-height: 22px;
        }
        .swiper-plant{
            margin-top:20px;
            background-color: #fafafa;
            height: 300px;
            padding: 10px;
            .plant-title{
                height: 30px;
                color: #2075c9;
                font-weight: bold;
                a{
                    float: right;
                    color: #2075c9;
                    &:hover{
                        color: #2075c9;
                        text-decoration: underline ;
                    }
                }
            }

            .el-carousel__container{
                .el-carousel__arrow{
                    top: 27% !important;
                }
                .el-carousel__item  {
                    color: #475669;
                    font-size: 18px;
                    // opacity: 0.75;
                    margin: 0;
                    a{

                        color: #787878;
                        img{
                            width: 180px;
                            height: 150px;
                        }
                        .plant-content{
                            div:first-child{
                                margin-top: 10px;
                                font-weight: bold;
                                line-height: 20px;
                                height: 40px;
                                overflow: hidden;
                            }
                            div:nth-child(2) {
                                font-weight: bold;
                                line-height: 20px;
                                height: 40px;
                                overflow: hidden;
                            }
                            div:nth-child(3){
                                line-height: 20px;
                                height: 40px;
                                overflow: hidden;
                                color: #787878;
                            }
                        }
                    }
                }
            }



        }
        .popular-plant{
            margin-top: 20px;
            .plant-title{
                height: 30px;
                line-height: 30px;
                font-weight: bold;
                color:#2075c9 ;
                span{
                    float: right;
                    a{
                        color:#2075c9 ;
                    }
                    &:hover{
                        color: #2075c9;
                        text-decoration: underline ;
                    }
                }
            }
            ul{
                li{
                    &::after{
                        content: '';
                        display: table;
                        clear: both;
                    }
                    a{
                        .plant-data{
                            padding: 20px 0px;
                            float: left;
                            width: 35px;
                            height: 40px;
                            color: #2075c9;
                            >div:first-child{
                                background-color: #82c1ff;
                                text-align: center;
                                font-size: 14px;
                                height: 20px;
                                line-height: 20px;
                            }
                            >div:nth-child(2){
                                background-color: #b5daff;
                                text-align: center;
                                font-size: 14px;
                                height: 20px;
                                line-height: 20px;
                            }
                        }
                        .plant-content{
                            width: 150px;
                            float: right;
                            >div:first-child{
                                &:hover{
                                    color: #2075c9;
                                    text-decoration: underline ;
                                }
                                padding: 10px 0px 2px;
                                color: #333333;
                                font-weight: bold;
                                line-height: 20px;
                                max-height: 60px;
                            }
                            >div:nth-child(2){
                                font-size: 12px;
                                padding:4px 0px;
                                color: #787878;
                                max-height: 20px;
                                span{
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
