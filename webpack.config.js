module.exports = {
    entry: "./src/main.js",
    output: {
        path: './lib/',
        filename: "index.js"
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