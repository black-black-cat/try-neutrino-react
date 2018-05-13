module.exports = {
  use: [
    ['@neutrinojs/standardjs', {
      eslint: {
        rules: {
          "jsx-quotes": ["error", "prefer-double"]
        }
      }
    }],
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'try-neutrino-react'
        },
        devServer: {
          proxy: 'http://gank.io/api'
        }
      }
    ],
    '@neutrinojs/jest',
    ['@neutrinojs/style-loader', {
      style: {},
      css: {},
      loaders: [
        'sass-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: [require('autoprefixer')]
          }
        }
      ],
      test: /\.css$/,
      ruleId: 'style',
      styleUseId: 'style',
      cssUseId: 'css',
      hotUseId: 'hot',
      hot: true,
      modules: true,
      modulesSuffix: '-modules',
      modulesTest: /\.module.+css$/,
      extractId: 'extract',
      extract: {
        plugin: {},
        loader: {}
      }
    }],
    ['@neutrinojs/html-template', {
      title: '你好，我的老伙计',
      lang: 'zh-CN',
      meta: [
        {
          name: 'description',
          content: 'A better default template for html-webpack-plugin.'
        }
      ]
    }]
  ]
};
