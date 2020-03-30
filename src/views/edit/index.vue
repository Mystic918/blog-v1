<template>
    <div>
        <div class="edit-main">
            <div class="edit-title">
                <div>
                    <el-form ref="form" label-position="left" label-width="80px" :model="form">
                        <div class="block-wrap">
                                
                        <el-form-item label="标题：" prop="ext_title" :rules="[{required:true,message:'请输入标题'},{pattern:/\S/g,message:'请输入标题'}]">
                           <el-input v-model="form.ext_title" placeholder="请输入标题" prefix-icon="el-icon-edit"></el-input>
                       </el-form-item>
                        <el-form-item label="作者：" prop="ext_author" :rules="[{required:true,message:'请输入作者'},{pattern:/\S/g,message:'请输入作者'}]">
                           <el-input v-model="form.ext_author" placeholder="请输入来源" prefix-icon="el-icon-edit"></el-input>
                       </el-form-item>
                       

                        <el-form-item label="类型：" prop="ext_classes" :rules="[{required:true,message:'请选择类型'},{pattern:/\S/g,message:'请选择类型'}]">

                             <el-select 
                             v-model="form.ext_classes"   
                             placeholder="请选择" 
                             :popper-append-to-body="false"
                             >
                            <el-option
                            v-for="item in selects"
                            :key="item.classes_id"
                            :label="item.name"
                            :value="item.classes_id">
                            </el-option>
                        </el-select>
                       </el-form-item>


                        <el-form-item label="时间：" prop="ext_create_time" :rules="[{required:true,message:'请选择发文时间'},{pattern:/\S/g,message:'请选择发文时间'}]">
                            <el-date-picker
                            value-format="yyyy-MM-dd"
                                v-model="form.ext_create_time"
                                type="date"
                                placeholder="选择日期"
                                >
                            </el-date-picker>
                            
                       </el-form-item>

                        </div>



                        <el-form-item label="封面图：" prop="ext_img">
                                <el-upload
                                :limit="1" 
                                ref="upload"
                                class="upload-demo"
                                action
                                :http-request="uploadImg" 
                                list-type="picture">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <span slot="tip" class="el-upload__tip"> 只能上传jpg/png文件，且不超过500kb</span>
                                </el-upload>
                       </el-form-item>


            <div id="editor" style="z-index:100 !important;">

            </div>
  <div id="btn-sned" @click="send">提交</div>
                        </el-form>
            </div>
          
        </div>
    </div> 
</div>
</template>

<script>

import HttpUtils from '@/utils/HttpUtils'
import PageUtils from '@/utils/PageUtils'
// import store from '@/store'
import { mapState } from 'vuex'

    export default {
        name: "index",
        data(){
            return{
                form:{},
                obj:'',
                selects:[],
                editor: null,
                token:''
            }
        },
        computed: {
            ...mapState(['token','usernameId'])
        }
        ,
        mounted(){
            const that = this
            that.token = that.$store.state.token
            let id = that.$store.state.usernameId
            if(id){
               that.form.ext_user_id = id
            }else{
                return
            }
            this.seteditor()
            this.getClasses()
},
        methods:{
            getClasses(){
            const that = this
                    HttpUtils.get('/public/getclasses').then(result=>{
                        that.selects = result.data.data
                    }
                )
            },
            uploadImg() {
               const formData = new FormData();
                    const file = this.$refs.upload.uploadFiles[0];
                    const headerConfig = { headers: { 'Content-Type': 'multipart/form-data'} };
                    if((file.raw.type!="image/jpeg")&&(file.raw.type!="image/png")) { // 若未选择文件
                    // PageUtils.message("warning","请规范选择文件")
                    alert('请规范选择文件');
                    this.$refs.upload.uploadFiles=[]
                    return false;
                    }
                    formData.append('file', file.raw);
                    HttpUtils.post('/information/uploadimg2', formData, headerConfig).then(res => {
                    this.form.ext_pic = res.data.url
                    })
        },
            send:async function (){
                const that = this 
                let valid = await PageUtils.validate(that.$refs['form'])
                if(valid){
                    HttpUtils.post('/information/PublishContent',that.form).then(rs=>{
                        window.console.log(rs)
                        if(rs.data.code===200){
                            alert(rs.data.data)
                            
                        }
                    })
                }
        },
            seteditor() {
                const that = this
                var E = require('wangeditor')  // 使用 npm 安装
                this.editor = new E('#editor')
                this.editor.customConfig.zIndex = 100
                this.editor.customConfig.uploadImgShowBase64 = false // base 64 存储图片
                this.editor.customConfig.uploadImgServer = '/api/information/uploadimg'// 配置服务器端地址
                this.editor.customConfig.uploadImgHeaders={}
               
                // alert(token)
                this.editor.customConfig.uploadImgHeaders = {
                    'authorization': 'Bearer '+that.token
                }// 自定义 header
                this.editor.customConfig.uploadFileName = 'mypic' // 后端接受上传文件的参数名
                this.editor.customConfig.uploadImgMaxSize = 1 * 1024 * 1024 // 将图片大小限制为 1M
                this.editor.customConfig.uploadImgMaxLength = 6 // 限制一次最多上传 6 张图片
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
                        let url = "/api/images/"+result.filename
                        insertImg(url)

                    }
                }
                this.editor.customConfig.onchange = (html) => {
                    this.form.ext_content = html // 绑定当前逐渐地值
                    this.$emit('change', this.form.ext_content) // 将内容同步到父组件中
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
    min-height: 600px;
    .edit-title{
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        .block-wrap{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            .el-form-item{
                margin-right: 20px;
            }
        }
    }
    #editor{
        // min-height: 600px;
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
