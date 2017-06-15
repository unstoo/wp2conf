
module.exports = function(paths) {
    return  { 
        module: {
            rules: [
                {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'],
                include: paths
                }
            ]
        }
    }

}