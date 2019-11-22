module.exports = {
  chainWebpack: config => {
      config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(() => ({
              transformAssetUrls: {
                  audio: 'src'
              }
          })
        )
    }
}
