import base64 from 'js-base64'
export class Message {
    constructor(msg){
        if(msg){
            this.msg = JSON.parse(base64.Base64.decode(msg))
        }
        else{
            // alert(msg)
            this.msg=''
        }
    }
    getUsername(){
        return this.msg.username
    }
    getIsadmin(){
        return this.msg.isadmin
    }
    getId(){
        return this.msg.id
    }
    getToken(){
        return   this.msg.token
    
    }
}