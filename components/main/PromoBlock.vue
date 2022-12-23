<template>
  <section class="promo">
    <div class="container">
      <div class="promo__body row">
        <div class="col-12 col-md-7 col-lg-6">
          <h1 class="promo__title">Finance and Consultancy Solution</h1>
          <p class="promo__description">
            We know how large objects will act, but things on a small scale.
          </p>
          <div class="promo__btns d-flex flex-column flex-sm-row">
            <ButtonLink class="promo__btn promo__btn--orange">Get Quote Now </ButtonLink>
            <ButtonLink class="promo__btn promo__btn--white">Learn More </ButtonLink>
          </div>
        </div>
      </div>
    </div>
    <div class="promo__image d-none d-sm-block">
      <img src="@/assets/img/promo.jpg" alt="promo" class="" />
    </div>
  </section>
</template>

<script>
import ButtonLink from "../UI/ButtonLink.vue";
export default {
  components: { ButtonLink },
};
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";

.promo {
  position: relative;
  background: #c3eaee;

  .promo__body {
    position: relative;
    padding-top: 80px;
    padding-bottom: 180px;
    z-index: 1000;
  }

  .promo__title {
    margin-bottom: 35px;
    font-weight: 800;
    font-size: 58px;
    line-height: 138%;
    letter-spacing: 0.2px;
    color: #252B42;
  }

  .promo__description {
    margin-bottom: 35px;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.2px;
    color: #252B42;
  }

  .promo__btns {
    margin-bottom: 20px;
  }

  .promo__btn {
    transition: all 0.5s;
  }

  .promo__btn:not(:last-child) {
    margin-right: 10px;
  }

  .promo__btn--orange {
    background-color: #ff7b47;
    color: #fff;

    &:hover,
    &:focus {
      background-color: #ec6a36;
      outline: none;
    }

    &:active {
      opacity: 0.8;
    }
  }

  .promo__btn--white {
    border: 2px solid #0d5c63;
    color: #0d5c63;

    &:hover,
    &:focus {
      color: #fff;
      background-color:#0d5c63;
      outline: none;
    }

    &:active {
      opacity: 0.8;
    }
  }

  .promo__image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .promo__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: $lg-width) {
    .promo__image img {
      object-position: right;
      opacity: 0.5;
    }
  }

  @media (max-width: $sm-width) {
    .promo__body {
      margin-top: 80px;
      padding-bottom: 140px;
    }

    .promo__title {
      margin-bottom: 15px;
      font-size: 36px;
    }

    .promo__description {
      font-size: 18px;
      margin-bottom: 40px;
    }

    .promo__btn:not(:last-child) {
      margin-bottom: 20px;
      margin-right: 0;
    }
  }
}
</style>