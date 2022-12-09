<template>
  <main>
    <PromoBlock />
    <ServicesBlock />
    <AdvantagesBlock />
    <PracticeBlock />
    <AboutBlock />
    <ClientsBlock />
    <SubscribeBlock />
    <ContactsBlock />
  </main>
</template>

<script>
import PromoBlock from './main/PromoBlock.vue';
import ServicesBlock from './main/ServicesBlock.vue';
import AdvantagesBlock from './main/AdvantagesBlock.vue';
import PracticeBlock from './main/PracticeBlock.vue';
import AboutBlock from './main/AboutBlock.vue';
import ClientsBlock from './main/ClientsBlock.vue';
import SubscribeBlock from './main/SubscribeBlock.vue';
import ContactsBlock from './main/ContactsBlock.vue';

export default {
    components: { 
      PromoBlock, 
      ServicesBlock,
      AdvantagesBlock,
      PracticeBlock,
      AboutBlock,
      ClientsBlock,
      SubscribeBlock,
      ContactsBlock
    },
}
</script>

<style>

</style>