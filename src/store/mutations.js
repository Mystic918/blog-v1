const mutations = {
    SET_BLOG_INFO(state,data){
        state.Token = data
        window.sessionStorage.setItem('blog_info',data)
    },
    SET_USERNAME(state,data){
        state.username = data
        window.sessionStorage.setItem('username',data)
    },
    CLEAR_SESSION(state){
        state.username=null
        state.blog_info=null
        state.userId=null
        state.token=null
        window.sessionStorage.removeItem('username')
        window.sessionStorage.removeItem('blog_info')
    },
    SET_USERNAME_ID(state,data){
        state.usernameId=data
    },
    SET_TOKEN(state,data){
        state.token=data
    }
}
export  default mutations
