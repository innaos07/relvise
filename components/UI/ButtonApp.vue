<template>
  <a href="#" class="btn">
    <slot></slot>
  </a>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'bootstrap/dist/css/bootstrap.css';
@import '@/assets/css/main.scss';
 .btn {
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 37px;
    padding: 10px 36px;
    font-weight: 700;
    font-size: 14px;
    line-height: 200%;
    transition: all 0.5s;
 }

 @media(max-width: $md-width) {
    .btn {
        flex: 1 1 100%;
    }

}

</style>