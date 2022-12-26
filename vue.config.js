module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: "@import '~@/styles/mixins.scss';"
            }
        }
    },
    chainWebpack: config =>{
        config.plugin('html')
          .tap(args => {
            args[0].title = "pgs-nav";
            return args
        })
    }
}