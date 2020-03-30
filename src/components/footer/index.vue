<template>
    <div class="footer">
        <div class="copyright">
            
        <div class="footer-pic"><img src="./images/qq-pic.jpg"><span>我的QQ</span></div>
        <div class="footer-pic"><img src="./images/wechat-pic.jpg"><span>我的微信</span></div>
        <div>
            <p>站点声明：</p>
            <p>1、本站个人博客网站模板，均为杨青青本人设计，个人可以使用，但是未经许可不得用于任何商业目的。</p>
            <p>2、所有文章、个人博客模板未经授权禁止转载、摘编、复制或建立镜像，如有违反，追究法律责任。</p>
            <p>Copyright ©  个人博客模板 All Rights Reserved. </p>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
.footer{
    background: #373D41;
    width: 100%;
    border-top: #2075c9 10px solid;
    padding: 30px 0;
    color: #73777a;
    font-size: 14px;
    .copyright{
        width: 1200px;
        margin: 0px auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        div{
            margin-right: 40px;
        }
    .footer-pic{
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        img{
            width: 100px;
            margin-bottom: 10px;
        }
    }
        p:first-child{
            font-size: 16px;
            color: #2075c9;
            margin: 10px 0px;
        }
        p{
            margin-bottom: 10px;
        }
    }
}
</style>
