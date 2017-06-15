const path = require('path')

const merge = require('webpack-merge')

// webpack bits
const pug       = require('./webpack/pug')
const devserver = require('./webpack/devserver')
const sass      = require('./webpack/sass')
const css       = require('./webpack/css')
const extractCSS= require('./webpack/css.extract')

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


const webpack = require('webpack')


const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
}


const common = merge([
  {
    entry: {
        index: PATHS.source + '/pages/index/index',
        blog:  PATHS.source + '/pages/blog/blog',
    },
    output: {        
        path: PATHS.build,
        filename: 'js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            filename: 'index.html',
            chunks: ['index', 'common'],
            template: PATHS.source + '/pages/index/index.pug'
         }),
        new HtmlWebpackPlugin({ 
            filename: 'blog.html',
            chunks: ['blog', 'common'],
            template: PATHS.source + '/pages/blog/blog.pug'
         }),
         new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
         })
      ]
    },
    pug()
])


module.exports = function(env){
    if(env === 'production'){
        return merge([
            common,
            extractCSS()
        ]);
    }
    if(env === 'development'){
        return merge([
                common,
                devserver(),
                sass(),
                css()
            ]
        );
    }
}