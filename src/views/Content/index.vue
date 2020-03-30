<template>
    <div class="Content">
        <div class="conetnt-main">
            <div class="pathAddress">  <router-link to="/">首页</router-link>  / <router-link :to="'/classification/'+classes">{{classes}}</router-link>  </div>
            <div class="title">{{content.title}}</div>
            <div class="author"><span>来源 : {{content.author}}</span> <span>时间 : {{content.create_time}}</span></div>
            <div class="main" v-html="content.content">

            </div>
        </div>
    </div>
</template>

<script>
import HttpUtils from '@/utils/HttpUtils'
    export default {
        name: "index",
        data(){
            return{
                content:[],
                classes:''
            }
        },
        mounted(){
            const that = this
            let docId = this.$route.params.docid
            window.console.log(docId)
            HttpUtils.get('/public/getcontent',{docid:docId}).then((result)=>{
               this.content = result.data.data[0]
               window.console.log(result)
               that.classes = result.data.data[0].name

            })
        }
    }
</script>

<style scoped lang="scss">
.Content{
    .conetnt-main{
        min-height: 600px;
        width: 1200px;
        margin: 20px auto;
        .pathAddress{
            font-size: 14px;
            height: 30px;
            a{
                color: #787878;
            }
        }
        .title{
            color: #333;
            font-size: 24px;
            height: 50px;
        }
        .author{
            color: #787878;
            height: 50px;
            span{
                margin-right: 20px;
            }
        }
        .main{
            font-size: 18px;
            line-height: 25px;
            letter-spacing: 3px;
            color: #333;
        }
    }
}
</style>
