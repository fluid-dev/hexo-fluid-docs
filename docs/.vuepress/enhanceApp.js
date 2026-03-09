import config from './config'

export default ({ Vue }) => {
  if (typeof document !== 'undefined') {
    const Ads = require('vue-google-adsense')
    Vue.use(require('vue-script2'))
    Vue.use(Ads.Adsense)
    Vue.use(Ads.InArticleAdsense)
    Vue.use(Ads.InFeedAdsense)
    Vue.use(Ads.AutoAdsense, { adClient: config.themeConfig.ads.client, isNewAdsCode: true })
  }
}
