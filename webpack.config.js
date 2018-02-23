//Konfiguracja Webpack
//Konfiguracja Webpack//Konfiguracja Webpack

module.exports = {

  entry: "./js/app.jsx",

  output: {

    filename: "./js/out.js"

  },

  devtool:'#eval-source-map',

  watch: true,

  module: {

    loaders: [

      {

        test: /\.jsx$/,

        exclude: /node_modules/,

        loader: 'babel-loader',

        query: {

          presets: ['es2015', 'stage-2', 'react']

        }

      },
      { test: /\.scss$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]

        }

    ]

  },

  devServer: {

    inline: true,

    contentBase: './',

    port: 3001

  }

}
