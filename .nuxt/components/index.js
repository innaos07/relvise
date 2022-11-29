export { default as HeaderPage } from '../../components/HeaderPage.vue'
export { default as MainPage } from '../../components/MainPage.vue'
export { default as UIButtonApp } from '../../components/UI/ButtonApp.vue'
export { default as MainAboutUs } from '../../components/main/AboutUs.vue'
export { default as MainAdvantagesApp } from '../../components/main/AdvantagesApp.vue'
export { default as MainPracticeApp } from '../../components/main/PracticeApp.vue'
export { default as MainPromoApp } from '../../components/main/PromoApp.vue'
export { default as MainServicesApp } from '../../components/main/ServicesApp.vue'

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
