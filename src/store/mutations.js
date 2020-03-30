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
        window.sessionStorage.removeItem('username')
        window.sessionStorage.removeItem('blog_info')
    }
}
export  default mutations
