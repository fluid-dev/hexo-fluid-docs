export default ({ Vue }) => {
  import('vue-google-adsense')
    .then(module => {
      const Ads = module.default
      Vue.use(require('vue-script2'))
      Vue.use(Ads.Adsense)
      Vue.use(Ads.InArticleAdsense)
      Vue.use(Ads.InFeedAdsense)
    })
    .catch(err => {
      console.error(err)
    })
}
