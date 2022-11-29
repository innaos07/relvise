<template>
  <main>
    <PromoApp />
    <ServicesApp />
    <AdvantagesApp />
    <PracticeApp />
    <AboutUs />
  </main>
</template>

<script>
import PromoApp from './main/PromoApp.vue';
import ServicesApp from './main/ServicesApp.vue';
import AdvantagesApp from './main/AdvantagesApp.vue';
import PracticeApp from './main/PracticeApp.vue';
import AboutUs from './main/AboutUs.vue';

export default {
    components: { 
      PromoApp, 
      ServicesApp,
      AdvantagesApp,
      PracticeApp,
      AboutUs
    },
}
</script>

<style lang="scss">
@import 'bootstrap/dist/css/bootstrap.css';
@import '@/assets/css/main.scss';

</style>