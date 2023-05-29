const path = require('path');

module.exports = {
    entry: './assets/js/index.js',
    output: {
        path: path.resolve(__dirname, 'assets/built'),
        filename: 'darkfox.js',
        assetModuleFilename: '[file][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.otf/,
                type: 'asset/resource'
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
};