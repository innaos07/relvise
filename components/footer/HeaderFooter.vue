<template>
  <section class="header-footer">
    <div class="container">
      <div
        class="
          header-footer__body
          d-flex
          flex-column flex-md-row
          align-items-md-center
        "
      >
        <div class="header-footer__left">
          <h3 class="header-footer__title">Consulting Agency For Your Business</h3>
          <p class="header-footer__description">the quick fox jumps over the lazy dog</p>
        </div>
        <a href="#" class="header-footer__btn">Contact Us</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.css";
@import "@/assets/css/main.scss";
.header-footer {
  padding: 40px 0;

  .header-footer__title {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 24px;
    line-height: 133%;
    letter-spacing: 0.1px;
    color: #252b42;
  }

  .header-footer__description {
    margin-bottom: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.2px;
  }

  .header-footer__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    min-height: 58px;
    padding: 15px 40px;
    border: 1px solid #ff7b47;
    background: #ff7b47;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 200%;
    text-align: center;
    letter-spacing: 0.2px;
    color: #ffffff;
    text-decoration: none;
    transition: all 0.5s;

    &:hover,
    &:active {
      border: 1px solid #ff7b47;
      background-color: #fff;
      color: #ff7b47;
    }
  }

  @media (max-width: $md-width) {
    .header-footer__description {
      margin-bottom: 20px;
    }

    .header-footer__btn {
      margin: 0;
    }
  }

  @media (max-width: $sm-width) {
    padding: 30px 0;
  }
}
</style>