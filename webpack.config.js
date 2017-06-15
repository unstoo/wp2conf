var path = require('path')


// sass-loader --   transpile sass => css
// css-loader --    require(.css) files from wtithin js modules (adds .css modules to the webpack graph)
// style-loader --  inject .css modules into DOM tree via <style></style>

// extract-text-webpack-plugin --
// .module.rules.push(
// { test: /\.css$/, use: ExtractTextPlugin({ 
//   publicPath:'../' fallback: 'style-loader', use: ['css-loader'] })   }
// )
// .plugin.push(  new ExtractTextPlugin('./css/[name].css')   )


// html-webpack-plugin --
// The plugin will generate an HTML5 file for you 
// that includes all your webpack bundles in the body using script tags.
const HtmlWebpackPlugin = require('html-webpack-plugin')


const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
}


module.exports = {

    entry: {
        index: PATHS.source + '/pages/index/index',
        blog: PATHS.source  + '/pages/blog/blog',
    },
    output: {        
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.source + '/pages/index/index.pug'
         }),
        new HtmlWebpackPlugin({ 
            filename: 'blog.html',
            chunks: ['blog'],
            template: PATHS.source + '/pages/blog/blog.pug'
         })
    ],

    module: {
        rules: [
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            },
            {
                test: /\.pug$/, loader: 'pug-loader', options: { pretty: true }
            }
        ]
    }


}