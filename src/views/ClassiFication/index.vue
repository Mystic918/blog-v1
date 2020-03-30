<template>
    <div class="ClassiFication">
        <div class="main">
            <HomeLeft/>
            <div class="list">
                 <!-- <keep-alive>
                     <router-view :list="list"  :count="count" />
                 </keep-alive> -->
                         <List :list="list" :count="count" :classes="classes" />
            </div>
            <HomeRight/>
        </div>
    </div>
</template>

<script>
    import HomeLeft from '@/components/Home/left' 
    import HomeRight from '@/components/Home/right'
    import HttpUtils from '@/utils/HttpUtils'
    import  List from '@/components/list'
    export default {
        name: "ClassiFication",
        data(){
            return{
                list:[],count:0,itemNumber:5,page : 1,classes:''
            }
        },
        components:{
            HomeLeft,HomeRight,List
        },
        mounted(){
            const _this = this  
            this.loadding(_this.page,_this.itemNumber)
            window.addEventListener('scroll', function(){
                let scrollTop = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop
                let offsetHeight = document.documentElement.offsetHeight || document.body.offsetHeight
                let  Height = document.documentElement.clientHeight || document.body.clientHeight
                if(scrollTop+Height >= offsetHeight){
                    _this.page=_this.page+1
                _this.loadding(_this.page,_this.itemNumber)
                }
            })
        },
        methods: {
               async loadding(page,number){
                    const that =this
                    let classes  = that.$route.params.classes; 
                    let params = {"page":page,"number":number}
                    switch (classes){
                        case "hot":
                            that.classes="近期热门"
                            break;
                        case "news":
                            that.classes="最新内容"
                            break;
                        case "css":
                            that.classes="css专题"
                            break;
                        case "html":
                            that.classes="html专题"
                            break;
                        case "javascript":
                            that.classes="javascript专题"
                            break;
                        case "vue":
                            that.classes="vue专题"
                            break;
                        case "node":
                            that.classes="node专题"
                            break;
                        case "webpack":
                            that.classes="webpack专题"
                            break;
                            
                    } 
                    if(classes.toString()=="hot"){
                       await HttpUtils.get('/api/public/gethot',params).then(result=>{
                                 if(page<=result.data.page){
                                        that.count=result.data.count 
                                            if( result.data.code===200){
                                            const data = result.data.data
                                            data.forEach(function(value){
                                                that.list.push(value)
                                            })
                                            }
                                        }
                            })
                    }else if(classes.toString()=="news"){
                        await    HttpUtils.get('/api/public/getdocument',params).then(result=>{
                                
                                       if(page<=result.data.page){
                                        that.count=result.data.count 
                                            if( result.data.code===200){
                                            const data = result.data.data
                                            data.forEach(function(value){
                                                that.list.push(value)
                                            })
                                            }
                                        }



                            })
                    }else{
                        params = {"page":page,"number":number,"classes":classes}
                         await   HttpUtils.get('/api/public/getchan',params).then(result=>{
                                 if(page<=result.data.page){
                                        that.count=result.data.count 
                                            if( result.data.code===200){
                                            const data = result.data.data
                                            data.forEach(function(value){
                                                that.list.push(value)
                                            })
                                            }
                                        } 
                            }) 
                    }
            }
            },watch: {
                    $route() {   
                        this.page=1 
                         this.list = []
                        this.$route.query.classes; //获取传来的参数 
                         this.loadding(this.page,this.itemNumber); //路由变化时就重新执行这个方法 更新传来的参数
                    }
                    ,
                    list:function(value){
                        return value
                    },
                    count:function(value){
                        return value
                    }
        }
    }
</script>

<style scoped lang="scss">
    .ClassiFication{
        .main{
            .list{
                width: 760px;
                min-height: 600px;
            }
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
