const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './src/index.js',
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "scss-loader"],
            },
            // {
            //     test: /\.css$/i,
            //     use: ["style-loader", "css-loader"],
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new MiniCssExtractPlugin(
        // {
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        // filename: "[name].css",
        // chunkFilename: "[id].css",}
        ),],
    devServer: {
        port: 4567,
        open: true,
        stats: 'errors-only',
    },
};