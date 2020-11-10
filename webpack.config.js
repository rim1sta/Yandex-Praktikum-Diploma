const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const path = require('path');
const webpack = require('webpack');


  

module.exports = {
    entry: {
        index: './src/js/index.js' ,
        about: './src/js/about.js',
        paper: './src/js/paper.js',
    },  
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[chunkhash].js',
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                use: { loader: "babel-loader" }, 
                exclude: /node_modules/ 
            },
            {
                test: /\.css$/,
                use: [
                  isDev ? "style-loader" : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: "../",
                        },
                      },
                  {
                    loader: "css-loader",
                    options: {
                      importLoaders: 2,
                    },
                  },
                  "postcss-loader",
                ],
              },
              {
                test: /\.(gif|png|jpe?g|svg|webp)$/,
                use: "file-loader?name=./images/[name].[ext]&esModule=false",
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]'
            },

        ]
    },
    plugins: [
      new HtmlWebpackPlugin({ 
        chunks: ["index"],
        template: './src/index.html',
        filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
        chunks: ["about"],
        template: "./src/about.html",
        filename: "about.html",
      }),
      new HtmlWebpackPlugin({
        chunks: ["paper"],
        template: "./src/paper.html",
        filename: "paper.html",
      }),
        new MiniCssExtractPlugin({
            filename: './pages/[name].[contenthash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
        }),
        new CleanWebpackPlugin(),
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
     
}