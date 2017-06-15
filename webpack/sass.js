
module.exports = function(paths) {
    return  { 
        module: {
            rules: [
                {
                test: /\.scss$/, 
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: paths
                }
            ]
        }
    }

}