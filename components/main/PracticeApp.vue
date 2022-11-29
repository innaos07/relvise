<template>
  <section class="practice">
    <div class="container">
      <div class="practice__header d-flex flex-column justify-content-center">
        <h2 class="header__title">Practice Advice</h2>
        <p class="header__description">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div class="practice__list row">
        <div 
          class="practice__column col-sm-6 col-lg-3 d-flex justify-content-center"
          v-for="item in PracticeList"
          :key="item.title">
          <div class="practice__item item__practice d-flex flex-column">
            <div class="item__info">
              <h3 class="item__title">{{item.title}}</h3>
              <p class="item__description">{{item.description}}</p>
            </div>
            <a href="#" class="item__image">
              <img 
                :src="require(`@/assets/img/${item.img}.jpg`)"
                :alt="item.title"
              />
            </a>
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
      PracticeList: [
        {
          title: "A single source of truth",
          description: "Newton thought that light was made up of particles, but then it was discovered ",
          img: "practice-01",
        },
        {
          title: "Fastest way to organize",
          description: "“Quantum mechanics” is the description of the behaviour of matter",
          img: "practice-02",
        },
        {
          title: "Fastest way to take action",
          description: "They describe a universe consisting of bodies moving",
          img: "practice-03",
        },
        {
          title: "Work better together",
          description: "They finally obtained a consistent description of the behaviour ",
          img: "practice-04",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.css";
@import "@/assets/css/main.scss";

.practice {
  padding-top: 125px;
  padding-bottom: 80px;
  background: #fafafa;
  
  .practice__list {
    margin-top: 45px;
  }

  .item__practice {
    background-color: #fff;
    .item__info {
      flex: 1; 
      padding: 30px;
      height: 100%;

      .item__title {
        margin: 0;
        margin-bottom: 15px;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.1px;
        color: #252B42;
      }

      .item__description {
        margin: 0;
        font-weight: 500;
        font-size: 14px;
        line-height: 143%;
        letter-spacing: 0.2px;
        color: #737373;
      }
    }

    .item__image {
      position: relative;
      display: block; 
      padding-bottom: 60%;
    }

    .item__image img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }

  @media (max-width: $lg-width) {
    padding-top: 50px;
    .practice__column:not(:nth-last-child(-n+2))  {
      margin-bottom: 30px;
    }
  }

  @media (max-width: $sm-width) {
    padding-top: 0;
    .practice__column:not(:last-child)  {
      margin-bottom: 30px;
    }

    .item__practice {
      // width: 100%;
      max-width: 320px;
    }
  }
}
</style>