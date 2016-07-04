module.exports = {
    entry: "./js/ElapsedTimeCounter.js",
    output: {
        path: './dist/',
        filename: "ElapsedTimeCounter.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            }
        ]
    }
}