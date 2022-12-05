<template>
  <section class="services">
    <div class="container">
      <h2 class="visually-hidden">This is our services</h2>
      <div class="row">
        <div
          class="services__column col-12 col-lg-4"
          v-for="item in Serviceslist"
          :key="item.title"
        >
          <div class="services__item item-services">
            <div class="item-services__icon">
              <img
                :src="require(`@/assets/img/${item.icon}.svg`)"
                :alt="item.title"
              />
            </div>
            <h2 class="item-services__title">{{ item.title }}</h2>
            <p class="item-services__text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      Serviceslist: [
        {
          title: "Environmental Consulting",
          icon: "services-01",
          text: "We focus on ergonomics and meeting you where you work.",
        },
        {
          title: "Finance and consultancy",
          icon: "services-02",
          text: "Just type whats on your mind and well get you there.",
        },
        {
          title: "Financial Services Consulting",
          icon: "services-03",
          text: "the quick fox jumps over the lazy dog",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.css";
@import "@/assets/css/main.scss";

.services {
  margin-top: -125px;
  background: #FAFAFA;

  .services__column:nth-child(3) {
    .item-services {
      background-color: #0d5c63;

      .item-services__title {
        color: #fff;
      }

      .item-services__text {
        color: #fff;
      }
    }
  }

  .item-services {
    padding: 35px 40px;
    height: 100%;
    background-color: #fff;
    box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);

    .item-services__icon {
      width: 48px;
      height: 48px;
    }

    .item-services__icon img {
      vertical-align: top;
      width: 48px;
      height: 48px;
    }

    .item-services__title {
      font-weight: 700;
      font-size: 24px;
      line-height: 133%;
      letter-spacing: 0.1px;
      color: #252b42;
    }

    .item__text {
      font-weight: 500;
      font-size: 14px;
      line-height: 143%;
      letter-spacing: 0.2px;
      color: #737373;
    }
  }

  .services__item > *:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (max-width: $lg-width) {
    margin-top: -105px;
    .services__column:not(:last-child)  {
      margin-bottom: 30px;
    }
  }
}
</style>