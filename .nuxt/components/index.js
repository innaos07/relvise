export const FooterPage = () => import('../../components/FooterPage.vue' /* webpackChunkName: "components/footer-page" */).then(c => wrapFunctional(c.default || c))
export const HeaderPage = () => import('../../components/HeaderPage.vue' /* webpackChunkName: "components/header-page" */).then(c => wrapFunctional(c.default || c))
export const MainPage = () => import('../../components/MainPage.vue' /* webpackChunkName: "components/main-page" */).then(c => wrapFunctional(c.default || c))
export const UIButtonApp = () => import('../../components/UI/ButtonApp.vue' /* webpackChunkName: "components/u-i-button-app" */).then(c => wrapFunctional(c.default || c))
export const FooterApp = () => import('../../components/footer/FooterApp.vue' /* webpackChunkName: "components/footer-app" */).then(c => wrapFunctional(c.default || c))
export const FooterHeaderFooter = () => import('../../components/footer/HeaderFooter.vue' /* webpackChunkName: "components/footer-header-footer" */).then(c => wrapFunctional(c.default || c))
export const MainAboutApp = () => import('../../components/main/AboutApp.vue' /* webpackChunkName: "components/main-about-app" */).then(c => wrapFunctional(c.default || c))
export const MainAdvantagesApp = () => import('../../components/main/AdvantagesApp.vue' /* webpackChunkName: "components/main-advantages-app" */).then(c => wrapFunctional(c.default || c))
export const MainClientsApp = () => import('../../components/main/ClientsApp.vue' /* webpackChunkName: "components/main-clients-app" */).then(c => wrapFunctional(c.default || c))
export const MainContactsApp = () => import('../../components/main/ContactsApp.vue' /* webpackChunkName: "components/main-contacts-app" */).then(c => wrapFunctional(c.default || c))
export const MainPracticeApp = () => import('../../components/main/PracticeApp.vue' /* webpackChunkName: "components/main-practice-app" */).then(c => wrapFunctional(c.default || c))
export const MainPromoApp = () => import('../../components/main/PromoApp.vue' /* webpackChunkName: "components/main-promo-app" */).then(c => wrapFunctional(c.default || c))
export const MainServicesApp = () => import('../../components/main/ServicesApp.vue' /* webpackChunkName: "components/main-services-app" */).then(c => wrapFunctional(c.default || c))
export const MainSubscribeApp = () => import('../../components/main/SubscribeApp.vue' /* webpackChunkName: "components/main-subscribe-app" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
