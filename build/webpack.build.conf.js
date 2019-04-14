const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  plugins: []
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: './'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: 'assets/img/index/[name].[ext]'
      }
    }, {
      test: /\.scss$/,
      use: [
        {
        loader: MiniCssExtractPlugin.loader,
          options: {publicPath: '../../'}
        },
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src}../postcss.config.js` } }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src}../postcss.config.js` } }
        }
      ]
    }, {
      test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name][hash].[ext]',
           publicPath: '../../'
        }
      }
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),
    // Copy HtmlWebpackPlugin and change index.html for another html page
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: './index.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/contacts.html`,
      filename: './contacts.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/goals.html`,
      filename: './goals.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/invalid-payment.html`,
      filename: './invalid-payment.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/success-payment.html`,
      filename: './success-payment.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/text-article.html`,
      filename: './text-article.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/user-agreement.html`,
      filename: './user-agreement.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/wellcome.html`,
      filename: './wellcome.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/profile.html`,
      filename: './profile.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/privacy-policy.html`,
      filename: './privacy-policy.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/payment.html`,
      filename: './payment.html'
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/static`, to: '' },
    ])
  ],
}