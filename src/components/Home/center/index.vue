<template>
    <div class="left-center">
        <div class="Swiper"><Swiper/></div>
        <List :list="list" :count="count" />
        <!-- <div ref="loadding"><loadding/></div> -->
    </div>
</template>

<script>
    import  Swiper from './swiper'
    import  List from '@/components/list'
    import HttpUtils from '@/utils/HttpUtils'
    // import  loadding from '@/components/loadding'
    export default {
        name: "index",
        data(){
            return{
                list:[],
                itemNumber:5,
                count:0
            }
        },
        components:{
            Swiper,List
            // ,loadding
        },
        mounted(){
            const _this = this
            let page = 1
            this.loadding(page,_this.itemNumber)
            window.addEventListener('scroll', function(){
                let scrollTop = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop
                let offsetHeight = document.documentElement.offsetHeight || document.body.offsetHeight
                let  Height = document.documentElement.clientHeight || document.body.clientHeight
                if(scrollTop+Height >= offsetHeight){
                    page=page+1
                _this.loadding(page,_this.itemNumber)
                }
            })

        },
        methods:{
            loadding:function(page,number){
                const _this = this
                const params = {"page":page,"number":number}
                    HttpUtils.get('/public/getDocument',params).then(rs=>{

                if(page<=rs.data.page){
                    _this.count=rs.data.count
                         if( rs.data.code===200){
                         const data = rs.data.data
                        data.forEach(function(value){
                            _this.list.push(value)
                        })
                         }
                      }

                    })

     

            }
        }
    }
</script>

<style scoped lang="scss">
    .left-center{
        .Swiper{
            margin-bottom: 20px;
        }
    }

</style>
