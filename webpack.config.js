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
        index: PATHS.source + '/index.js',
    },
    output: {        
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'YKWebpack2' })
    ],

    module: {
        rules: [
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            }
        ]
    }


}