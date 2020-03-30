<template>
  <div id="app">
      <MyHeader class="app-header"/>
      <router-view class="app-content" />
        <Footer/>
  </div>
</template>
<script>
  import MyHeader from '@/components/MyHeader'
  import Footer from '@/components/footer'
    export default {
        name: "app",
        data(){
            return{

            }
        },
        components:{
            MyHeader,Footer
        }
    }
</script>
<style lang="scss">
#app {
    .app-header{
        position: fixed;
        z-index: 99999;
        /*border-bottom: 2px solid #2075c9 ;*/
    }
    .app-content{
        padding:73px 0px;
        overflow: hidden;
    }
  margin: 0 auto;
}

</style>
