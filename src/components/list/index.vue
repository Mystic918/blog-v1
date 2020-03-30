<template>
    <div class="content-list">
        <div class="content-title">{{classes}}</div>
<div class="infinite-list-wrapper" >
        <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
        <li v-for="item in list" :key="item.doc_id">
                    <div :class="item.pic?'list-left list-650w':'list-left'">
                        <router-link  :to="item.create_time|time(item.doc_id) "  >  <div class="title">{{item.title}}</div></router-link>
                        <div class="content" v-html="item.content"></div>
                        <div class="bottom">
                            <span>
                                <span class="iconfont icon-zan"></span>
                                <span>x{{item.hot}} 赞</span></span>
                            <span>{{item.author}}</span>
                            <span>{{item.create_time}}</span>
                        </div>
                    </div>
                    <div :class="item.pic?'list-right':'hide-pic'" v-show="item.pic"><img :src="item.pic" alt="swiper2" ></div>

            </li>
    </ul>
     <loadding v-if="loading" >加载中...</loadding>
     <loadding v-if="noMore">没有更多了</loadding>
    </div>
</div>
</template>

<script>
import  loadding from '@/components/loadding'
    export default {
        name: "list",
        components: {
          loadding  
        },
        data(){
            return {
                
            }
        },
        props:['list','count','classes'],
        mounted(){ 
            
              this.classes = this.$route.params.classes
        },
        computed: {
                loading () {
                    return this.list.length < this.count
                },
                noMore () {
                    return this.list.length >= this.count
                },
                disabled () {
                    return this.loading || this.noMore
                }
    },
    methods: {
      load () {
        setTimeout(() => {
          this.list.length
          this.loading = false
        }, 20000)
      }
    }
        ,
        filters:{
            time:function(data,docid){
                return "/content/"+data.split(" ")[0].split('-').join("")+"/"+docid
            }
        }
    }
</script>

<style scoped lang="scss">

    .content-list{
    .content-title{
        font-size: 18px;
        position: relative;
        margin-bottom: 10px;
    &::before{
         bottom: 0px;
         content: '';
         position: absolute;
         height:1px;
         width: 100%;
         background-color: #ccc;
     }
        height: 30px;
        line-height: 25px;
    }
    width: 760px;
    li{

    &::after{
         content: '';
         display: table;
         clear: both;
     }
    padding: 10px 0px 5px 0px;
    .hide-pic{
        display: none;
    }
    .list-650w{
        width: 605px;
    }
    .list-left{
 
        float: left;
        line-height: 18px;
    .title{
        font-weight: bold;
    &:hover{
         color: #2075c9;
         text-decoration: underline ;
     }
    color: #212121;
    font-size: 18px;
    height: 24px;
    overflow: hidden;
    padding-bottom: 5px;
    }
    .content {
        margin-bottom: 5px;
        color: #888888;
        font-size: 13px;
        height: 60px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

    }
    .bottom{
        height: 22px;
        overflow: hidden;
        font-size: 14px;
    >span{
        margin-right: 15px;
        font-size: 12px;
        color: #9e9e9e;
        cursor: pointer;
    }
    span:first-child{
        text-indent: 5px;
        color: #2075c9;
    span:first-child{
        padding: 3px;
        border-radius: 20px;
        background-color: #ccc;
        font-size: 12px;
    }
    span:nth-child(2){
        font-size: 14px;
        padding-left: 5px;
    }
    }
    span:nth-child(2){
        /*padding-left: 8px;*/
    }
    }
    }
    .list-right{
        margin: 20px 30px 20px 0px;
        width: 120px;
        // height: 60px;
        float: right;
    img{
        width: 100%;
        height: 100%;
    }
    }
    }

    }
</style>
