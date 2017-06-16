const ExtractTextPlugin = require('extract-text-webpack-plugin');

// extract-text-webpack-plugin --
// .module.rules.push(
// { test: /\.css$/, use: ExtractTextPlugin({ 
//   publicPath:'../' fallback: 'style-loader', use: ['css-loader'] })   }
// )
// .plugin.push(  new ExtractTextPlugin('./css/[name].css')   )

module.exports = function(paths) {
    return  { 
        module: {
            rules: [
              {
                test: /\.scss$/, 
                include: paths,
                use: ExtractTextPlugin.extract({
                        publicPath: '../',
                        use: ['css-loader', 'sass-loader'],
                        fallback: 'style-loader'
                }),
                
              },
              {
                test: /\.css$/, 
                include: paths,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                }),
              }
            ]
        },
        plugins: [
            new ExtractTextPlugin('./css/[name].css')
        ]
    }

}