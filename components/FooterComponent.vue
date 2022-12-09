<template>
  <footer>
    <HeaderFooter />
    <FooterBlock/>
  </footer>
</template>

<script>
  import HeaderFooter from './footer/HeaderFooter.vue';
  import FooterBlock from './footer/FooterBlock.vue';
  export default {
    components: { HeaderFooter, FooterBlock },
  }
</script>

<style>

</style>