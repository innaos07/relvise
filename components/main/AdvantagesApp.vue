<template>
  <section class="advantages">
    <div class="container">
      <div class="advantages__header d-flex flex-column justify-content-center">
        <h2 class="header__title">Designing Better Experience</h2>
        <p class="header__description">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div class="advantages__list row">
          <div 
              class="advantages__column col-12 col-sm-6 col-lg-3 d-flex justify-content-center"
              v-for="item in AdvantagesList"
              :key="item.text">
              <div class="advantages__item item-advantages d-flex flex-column align-items-center">
                <div class="item-advantages__icon d-flex justify-content-center align-items-center">
                  <img  
                    :src="require(`@/assets/img/${item.icon}.svg`)"
                    :alt="item.text"/>
                </div>
                <p class="item-advantages__indicator">{{item.indicator}}</p>
                <p class="item-advantages__text">{{item.text}}</p>
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
      AdvantagesList: [ 
        {
          icon: 'advantage-01',
          indicator: '972+',
          text: 'Consumer Products',
        },
        {
          icon: 'advantage-02',
          indicator: '181 +',
          text: 'Financial Services',
        },
        {
          icon: 'advantage-03',
          indicator: '98%',
          text: 'Environmental',
        },
        {
          icon: 'advantage-04',
          indicator: '746 +',
          text: 'Business & Finance',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import 'bootstrap/dist/css/bootstrap.css';
@import '@/assets/css/main.scss';

.advantages {
    padding-top: 80px;
    padding-bottom: 80px;
    background: #FAFAFA;

    .advantages__list {
      margin-top: 50px;
    }

    .item-advantages {
      width: 100%;
      height: 100%;
      padding: 30px 40px;
      background-color: #fff;

      .item-advantages__icon {
        height: 48px;
      }

      .item-advantages__icon img {
        width: 48px;
        height: 48px;
      }

      .item-advantages__indicator {
        margin: 0;
        font-weight: 700;
        font-size: 40px;
        line-height: 142%;
        letter-spacing: 0.2px;
        color: #252B42;
      }

      .item-advantages__text {
        margin: 0;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.1px;
        color: #737373;
      }
    }

    .advantages__item > *:not(:last-child) {
      margin-bottom: 10px;
    }

    @media (max-width: $lg-width) {
      padding-top: 50px;
      padding-bottom: 50px;

      .advantages__column:not(:nth-last-child(-n+2))  {
        margin-bottom: 30px;
      }
    }

    @media (max-width: $sm-width) {
      padding: 30px 0;

      .advantages__column:not(:last-child)  {
        margin-bottom: 30px;
      }

      .advantages__list {
        margin-top: 30px;
      }

      .item-advantages {
        max-width: 320px;

        .item-advantages__indicator {
          font-size: 32px;
        }
      }
    }
}

</style>