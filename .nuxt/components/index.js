export const FooterComponent = () => import('../../components/FooterComponent.vue' /* webpackChunkName: "components/footer-component" */).then(c => wrapFunctional(c.default || c))
export const HeaderComponent = () => import('../../components/HeaderComponent.vue' /* webpackChunkName: "components/header-component" */).then(c => wrapFunctional(c.default || c))
export const MainComponent = () => import('../../components/MainComponent.vue' /* webpackChunkName: "components/main-component" */).then(c => wrapFunctional(c.default || c))
export const FooterBlock = () => import('../../components/footer/FooterBlock.vue' /* webpackChunkName: "components/footer-block" */).then(c => wrapFunctional(c.default || c))
export const FooterHeaderFooter = () => import('../../components/footer/HeaderFooter.vue' /* webpackChunkName: "components/footer-header-footer" */).then(c => wrapFunctional(c.default || c))
export const UIButtonLink = () => import('../../components/UI/ButtonLink.vue' /* webpackChunkName: "components/u-i-button-link" */).then(c => wrapFunctional(c.default || c))
export const MainAboutBlock = () => import('../../components/main/AboutBlock.vue' /* webpackChunkName: "components/main-about-block" */).then(c => wrapFunctional(c.default || c))
export const MainAdvantagesBlock = () => import('../../components/main/AdvantagesBlock.vue' /* webpackChunkName: "components/main-advantages-block" */).then(c => wrapFunctional(c.default || c))
export const MainClientsBlock = () => import('../../components/main/ClientsBlock.vue' /* webpackChunkName: "components/main-clients-block" */).then(c => wrapFunctional(c.default || c))
export const MainContactsBlock = () => import('../../components/main/ContactsBlock.vue' /* webpackChunkName: "components/main-contacts-block" */).then(c => wrapFunctional(c.default || c))
export const MainPracticeBlock = () => import('../../components/main/PracticeBlock.vue' /* webpackChunkName: "components/main-practice-block" */).then(c => wrapFunctional(c.default || c))
export const MainPromoBlock = () => import('../../components/main/PromoBlock.vue' /* webpackChunkName: "components/main-promo-block" */).then(c => wrapFunctional(c.default || c))
export const MainServicesBlock = () => import('../../components/main/ServicesBlock.vue' /* webpackChunkName: "components/main-services-block" */).then(c => wrapFunctional(c.default || c))
export const MainSubscribeBlock = () => import('../../components/main/SubscribeBlock.vue' /* webpackChunkName: "components/main-subscribe-block" */).then(c => wrapFunctional(c.default || c))

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
