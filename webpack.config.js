const path = require('path')

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpg|jpeg|svg|gif)$/i,
          type: 'asset/resource'
        }
      ]
    }
}
