<template>
  <main>
    <PromoApp />
    <ServicesApp />
    <AdvantagesApp />
    <PracticeApp />
    <AboutApp />
    |<ClientsApp />
    <SubscribeApp />
    <ContactsApp />
  </main>
</template>

<script>
import PromoApp from './main/PromoApp.vue';
import ServicesApp from './main/ServicesApp.vue';
import AdvantagesApp from './main/AdvantagesApp.vue';
import PracticeApp from './main/PracticeApp.vue';
import AboutApp from './main/AboutApp.vue';
import ClientsApp from './main/ClientsApp.vue';
import SubscribeApp from './main/SubscribeApp.vue';
import ContactsApp from './main/ContactsApp.vue';

export default {
    components: { 
      PromoApp, 
      ServicesApp,
      AdvantagesApp,
      PracticeApp,
      AboutApp,
      ClientsApp,
      SubscribeApp,
      ContactsApp
    },
}
</script>

<style lang="scss">
@import 'bootstrap/dist/css/bootstrap.css';
@import '@/assets/css/main.scss';

</style>