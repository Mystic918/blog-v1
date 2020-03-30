module.exports = {
    devServer:{
        open: false,
        // proxy:{
        //     // proxy:'http://39.97.33.178'
        //     '/api':{
        //         target:'http://39.97.33.178',
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite:{
        //             '^/api':''
        //         }
        //     }
        // }
    }
}


module.exports = {
    // publicPath: '/',//publicPath取代了baseUrl
    // outputDir: 'dist',
    // lintOnSave: true,
    // runtimeCompiler: true, //关键点在这  原来的 Compiler 换成了 runtimeCompiler
    // // 调整内部的 webpack 配置。
    // // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
    // chainWebpack: () => {},
    // configureWebpack: () => {},
    // // 配置 webpack-dev-server 行为。
    devServer: {

        // open: process.platform === 'darwin',
        // host: '0.0.0.0',
        // port: 8080,
        // https: false,
        // hotOnly: false,
        // // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
        proxy:{
            '/api':{
                target:'http://localhost:8087',
                changeOrigin: true,
                ws: true
                ,
                pathRewrite:{
                    '^/api':'/api'
                }
            }
        }
    }
}
