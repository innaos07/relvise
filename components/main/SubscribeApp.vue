<template>
  <section class="subscribe">
    <div class="container">
      <div class="subscribe__body row">
        <div class="col-12 col-md-6">
          <h3 class="subscribe__title">
            Subscribe For Latest <br class="d-none d-md-block" />
            Newsletter
          </h3>
        </div>
        <div class="col-12 col-md-6">
          <form action="#" class="subscribe__form d-flex align-items-center">
            <input
              type="email"
              required
              name="subscribe"
              placeholder="Your email"
              class="subscribe__input"
            />
            <button type="submit" class="subscribe__btn">Subscribe</button>
          </form>
        </div>
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
.subscribe {
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 77px;
    bottom: 0;
    left: 0;
    background-color: #252b42;
    z-index: 1;
  }

  .subscribe__body {
    position: relative;
    padding: 30px 50px;
    background-color: #17213c;
    z-index: 10000;

    .subscribe__title {
      margin: 0;
      font-weight: 700;
      font-size: 24px;
      line-height: 133%;
      letter-spacing: 0.1px;
      color: #ffffff;
    }

    .subscribe__form {
      .subscribe__input {
        width: 100%;
        height: 58px;
        padding: 15px 20px;
        background: #f9f9f9;
        border: 1px solid #e6e6e6;
        border-radius: 5px 0 0 5px;
        outline: none;

        &:hover,
        &:focus {
          background-color: #eae8e8;
        }
      }

      .subscribe__btn {
        height: 58px;
        padding: 15px 22px;
        font-weight: 400;
        font-size: 14px;
        line-height: 200%;
        text-align: center;
        letter-spacing: 0.2px;
        background: #ff7b47;
        border: 1px solid #e6e6e6;
        border-radius: 0px 5px 5px 0px;
        color: #fafafa;
        transition: all 0.5s;

        &:hover {
          background: #e86734;
        }

        &:active {
          background: #f18357;
        }
      }
    }
  }

  @media (max-width: $md-width) {
    .subscribe__body {
      .subscribe__title {
        margin-bottom: 20px;
      }
    }
  }

  @media (max-width: $sm-width) {
    padding-top: 0;
    padding-bottom: 0;
    
    &::before {
      width: 0;
      height: 0;
    }
    .subscribe__body {
      padding: 30px 0;
      padding-bottom: 50px;
    }
  }
}
</style>