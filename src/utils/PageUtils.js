import Element from 'element-ui'
export default{
    confirm:function(title){
        return new Promise(resolve=>{
            Element.MessageBox.confirm(title,'提示',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning',center:true}).then(()=>{ //点击确定返回 true
                    resolve(true)
                }).catch(()=>{//点击确定返回 false
                    resolve(false)
                })
            
        })
        
    },message:function(type,message){
        Element.Message({
            showClose:true,
            message:message,
            type:type
        })
    },
    validate:function(from){
        return new Promise(resolve=>{
            from.validate(valid=>{
                resolve(valid)
            })
        })
    }
}