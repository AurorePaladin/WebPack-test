const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exprots = {
    // 单文件输入


    // entry: './src/js/main.js',                        // 入口文件
    // output: {                                         // 出口文件
    //     path: path.resolve(__dirname, 'dist/js'),     // 出口文件位置（必须绝对路径）
    //     filename: 'bundle.js'                         // 出口文件名
    // }


    // 多文件输入


    entry: {
        main: './src/js/main.js',                        // 入口文件
        a: './src/js/a.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),  // 出口文件位置
        filename: '[name].js'                      // 出口文件名：name就是entry的键名 
    },
    plugins: {
        new htmlWebpackPlugin({
            filename: '[name]-{hash}.html',         // 生成的HTML名，路径为上面output中的path
            template: './index.html',               // 会与根目录下的index.html相关联，把根目录下index里的内容都置入生成的HTML中
            inject: 'head'                          // 打包后的scri防盗head中
        })
    }
}