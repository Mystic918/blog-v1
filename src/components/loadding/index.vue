<template>
    <div class="uploading">

        <!-- <span v-if="loadding" class="iconfont icon-loadding"></span> -->

        <span  class="el-icon-refresh"></span>
        
        <span><slot></slot></span> 
        </div>
</template>

<script>
    export default {
        name: "index",
        // props: ["load"],
        computed: {
           
        }
    }
</script>

<style scoped lang="scss">
    // @-webkit-keyframes animal {
    //     0%{
    //         transform: rotate(0deg);
    //         -ms-transform: rotate(0deg);
    //         -webkit-transform: rotate(0deg);
    //     }
    //     100%{
    //         transform: rotate(-360deg);
    //         -ms-transform: rotate(-360deg);
    //         -webkit-transform: rotate(-360deg);
    //     }
    // }
    .uploading{
        cursor: pointer;
        padding: 10px;
        margin: 0px auto;
        width: 120px;
        border-radius: 20px;
        text-align: center;
        color: #2075c9;
        border: 1px solid #2075c9;
    // span:first-child{
    //     animation: animal 1s infinite linear ;
    //     -webkit-animation: animal 1s infinite linear ;
    //     -webkit-transform-origin: center center;
    //     -ms-transform-origin: center center;
    //     transform-origin: center center;
    //     display: inline-block
    // }
    span:nth-child(2){
        margin-left: 10px;
    }
    }
</style>
