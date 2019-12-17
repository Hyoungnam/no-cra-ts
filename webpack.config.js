const path = require('path')
const webpack = require('webpack')
module.exports = {
  name: 'No-create-react-app-TS',
  mode: 'development',// 배포모드 hidden-source-map
  devtool: 'eval',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // entry: './index.tsx',
  entry: {
    app: ['./src/index.tsx'],
  },
  module: {
    rules: [
    {
      test: /\.tsx?$/,
      loader: [
          {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                experimentalWatchApi: true,
            },
          },
      ],
      exclude: /node_modules/,
  },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({debug: true}),
  ],
  output: {
    path: path.join(__dirname, 'dist'), 
    filename: 'app.js',
    publicPath: '/dist/', // 가상경로 - app.use('/dist', express,static(__dirname, 'dist')
  },
  devServer: {
    open: 'Google Chrome',
    writeToDisk: true
  }
}
