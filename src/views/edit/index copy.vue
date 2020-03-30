<template>
    <div>
        <div class="edit-main">
            <div class="edit-title">
                <div style="float: left">
                    标题：<input type="text" value="标题" v-model="title">
                </div>
                <div style="float: left">来源：<input type="text" value="标题" v-model="title"></div>
                <div style="float: left">封面图片：<input type="file"   ></div>
                <div style="float: left">
                    <span>文档所属类型选择：</span>
                    <select>
                        <option  v-for="item in select" :key="item.id" value="item.id">{{item.name}}</option>
                     </select>
                </div>
            </div>
            <div id="editor">

            </div>
            <div id="btn-sned" @click="send">提交</div>
        </div>
    </div>


</template>

<script>



    export default {
        name: "index",
        data(){
            return{
                obj:'',
                title:'',
                select:[],
                editor: null,
                info_: null

            }
        },
        mounted(){
            this.seteditor()
            this.axios.get('/api/information/getclasses',{}).then(result=>{
                this.select = result.data.data
                 window.console.log("12321"+result)
            })

        },
        methods:{
            send:function(){
                alert(this.obj.txt.html())
         },
            seteditor() {
                // http://192.168.2.125:8080/admin/storage/create
                var E = require('wangeditor')  // 使用 npm 安装
                this.editor = new E('#editor')
                this.editor.customConfig.uploadImgShowBase64 = false // base 64 存储图片
                this.editor.customConfig.uploadImgServer = '/api/information/uploadimg'// 配置服务器端地址
                this.editor.customConfig.uploadImgHeaders={}
                // this.editor.customConfig.uploadImgHeaders = {
                //     'authorization': 'Bearer '+localStorage.token,
                //     'enctype':'multipart/form-data'
                // }// 自定义 header
                this.editor.customConfig.uploadFileName = 'mypic' // 后端接受上传文件的参数名
                this.editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024 // 将图片大小限制为 2M
                this.editor.customConfig.uploadImgMaxLength = 6 // 限制一次最多上传 3 张图片
                this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000 // 设置超时时间

                // 配置菜单
                this.editor.customConfig.menus = [
                    'head', // 标题
                    'bold', // 粗体
                    'fontSize', // 字号
                    'fontName', // 字体
                    'italic', // 斜体
                    'underline', // 下划线
                    'strikeThrough', // 删除线
                    'foreColor', // 文字颜色
                    'backColor', // 背景颜色
                    'link', // 插入链接
                    'list', // 列表
                    'justify', // 对齐方式
                    'quote', // 引用
                    'emoticon', // 表情
                    'image', // 插入图片
                    'table', // 表格
                    'video', // 插入视频
                    'code', // 插入代码
                    'undo', // 撤销
                    'redo', // 重复
                    'fullscreen' // 全屏
                ]

                this.editor.customConfig.uploadImgHooks = {
                    fail: (xhr, editor, result) => {
                        window.console.log('插入图片失败回调:'+result)
                        // 插入图片失败回调
                    },
                    success: (xhr, editor, result) => {
                        window.console.log('图片上传成功回调:'+result)
                        // 图片上传成功回调
                        window.console.log(result)
                    },
                    timeout: (xhr, editor) => {
                        window.console.log(' 网络超时的回调:'+editor)
                        // 网络超时的回调
                    },
                    error: (xhr, editor) => {
                        window.console.log('图片上传错误的回调:'+editor)
                        // 图片上传错误的回调
                    },
                    customInsert: (insertImg, result, editor) => {
                        window.console.log('图片上传并返回结果,图片插入成功:'+editor)
                        window.console.log(result)
                        // 图片上传成功，插入图片的回调
                        //result为上传图片成功的时候返回的数据，这里我打印了一下发现后台返回的是data：[{url:"路径的形式"},...]
                        // console.log(result.data[0].url)
                        //insertImg()为插入图片的函数
                        //循环插入图片
                        // for (let i = 0; i < 1; i++) {
                        // console.log(result)
                        let url = "/api/"+result.filename
                        insertImg(url)
                        // }
                    }
                }
                this.editor.customConfig.onchange = (html) => {
                    this.info_ = html // 绑定当前逐渐地值
                    this.$emit('change', this.info_) // 将内容同步到父组件中
                }
                // 创建富文本编辑器
                this.editor.create()
            }
        }
    }

</script>

<style scoped lang="scss">
.edit-main{
    margin: 30px auto;
    width: 1200px;
    .edit-title{
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        input{
            /*font-weight: bold;*/
            /*font-size: 18px;*/
            border-bottom: 1px solid #000;
        }
    }
    #btn-sned{
        margin: 30px auto;
        text-align: center;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
        padding: 10px;
        width: 120px;
        background-color: #2075c9;
    }
}
</style>
