<template>
  <main>
    <PromoApp />
    <ServicesApp />
    <AdvantagesApp />
    <PracticeApp/>
  </main>
</template>

<script>
import PromoApp from './main/PromoApp.vue';
import ServicesApp from './main/ServicesApp.vue';
import AdvantagesApp from './main/AdvantagesApp.vue';
import PracticeApp from './main/PracticeApp.vue';

export default {
    components: { 
      PromoApp, 
      ServicesApp,
      AdvantagesApp,
      PracticeApp
    },
}
</script>

<style lang="scss">
@import 'bootstrap/dist/css/bootstrap.css';
@import '@/assets/css/main.scss';

</style>