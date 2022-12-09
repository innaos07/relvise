export { default as FooterComponent } from '../../components/FooterComponent.vue'
export { default as HeaderComponent } from '../../components/HeaderComponent.vue'
export { default as MainComponent } from '../../components/MainComponent.vue'
export { default as FooterBlock } from '../../components/footer/FooterBlock.vue'
export { default as FooterHeaderFooter } from '../../components/footer/HeaderFooter.vue'
export { default as UIButtonLink } from '../../components/UI/ButtonLink.vue'
export { default as MainAboutBlock } from '../../components/main/AboutBlock.vue'
export { default as MainAdvantagesBlock } from '../../components/main/AdvantagesBlock.vue'
export { default as MainClientsBlock } from '../../components/main/ClientsBlock.vue'
export { default as MainContactsBlock } from '../../components/main/ContactsBlock.vue'
export { default as MainPracticeBlock } from '../../components/main/PracticeBlock.vue'
export { default as MainPromoBlock } from '../../components/main/PromoBlock.vue'
export { default as MainServicesBlock } from '../../components/main/ServicesBlock.vue'
export { default as MainSubscribeBlock } from '../../components/main/SubscribeBlock.vue'

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
