export { default as FooterPage } from '../../components/FooterPage.vue'
export { default as HeaderPage } from '../../components/HeaderPage.vue'
export { default as MainPage } from '../../components/MainPage.vue'
export { default as FooterApp } from '../../components/footer/FooterApp.vue'
export { default as FooterHeaderFooter } from '../../components/footer/HeaderFooter.vue'
export { default as UIButtonApp } from '../../components/UI/ButtonApp.vue'
export { default as MainAboutApp } from '../../components/main/AboutApp.vue'
export { default as MainAdvantagesApp } from '../../components/main/AdvantagesApp.vue'
export { default as MainClientsApp } from '../../components/main/ClientsApp.vue'
export { default as MainContactsApp } from '../../components/main/ContactsApp.vue'
export { default as MainPracticeApp } from '../../components/main/PracticeApp.vue'
export { default as MainPromoApp } from '../../components/main/PromoApp.vue'
export { default as MainServicesApp } from '../../components/main/ServicesApp.vue'
export { default as MainSubscribeApp } from '../../components/main/SubscribeApp.vue'

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
