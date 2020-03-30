<template>
    <el-carousel indicator-position="outside" class="conter-swiper" height="180px">
            <el-carousel-item>
                   <a><img src="@/assets/images/swiper1.jpg" alt="swiper1"></a>
            </el-carousel-item>
            <el-carousel-item>
                <a><img src="@/assets/images/swiper2.jpg" alt="swiper2"></a>
            </el-carousel-item>
            <el-carousel-item>
                <a><img src="@/assets/images/swiper3.jpg" alt="swiper3"></a>
            </el-carousel-item>
            <el-carousel-item>
                <a><img src="@/assets/images/swiper4.jpg" alt="swiper4"></a>
            </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name: "index",
    data() {
        return {}
    }
}
</script>


<style lang="scss">
    .conter-swiper{
        width: 760px;
        height: 180px;
        position: relative;
        img{
            width: 760px;
            height: 180px;
			border-radius: 10px;
        }
        .el-carousel__indicators{
            position: absolute;
            z-index: 11;
            bottom: 11px;
            left: 0px;
            right: 0px;
        }
    }
    /*.el-carousel__item:nth-child(2n) {*/
        /*background-color: #99a9bf;*/
    /*}*/

    /*.el-carousel__item:nth-child(2n+1) {*/
        /*background-color: #d3dce6;*/
    /*}*/
</style>
