module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: "@import '~@/styles/mixins.scss';"
            }
        }
    }
}