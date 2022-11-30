<template>
    <section class="about">
        <div class="container">
            <div class="about__header d-flex flex-column justify-content-center">
              <h2 class="header__title">Who We Are</h2>
              <p class="header__description">
                Problems trying to resolve the conflict between the two major realms <br class="d-none d-sm-block">
                of Classical physics: Newtonian mechanics 
              </p>
            </div>
            <div class="about__body row">
              <div class="about__video col-12 col-lg-6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bNpx7gpSqbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="about__content col-12 col-lg-6">
                <div class="about__top">
                  <h2 class="about__title">Most trusted in our field</h2>
                  <p class="about__description">Most calendars are designed for teams. Slate 
                  is designed for freelancers who want a 
                  simple way to plan their schedule.
                  </p>
                </div>
                <div 
                  class="about__item item__about d-flex align-items-start"
                  v-for="item in AboutList"
                  :key="item.title"
                >
                  <div class="item__icon ">
                    <img 
                      :src="require(`@/assets/img/${item.icon}.svg`)"
                      :alt="item.title"
                    />
                  </div>
                  <div>
                    <h3 class="item__title">{{item.title}}</h3>
                    <p class="item__text">{{item.text}}</p>
                  </div>
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
      AboutList: [
        {
          icon: 'about-01',
          title: 'the quick fox jumps over the lazy dog',
          text: 'Things on a very small scale very small scale very small scale ...',
        },
        {
          icon: 'about-02',
          title: 'the quick fox jumps over the lazy dog',
          text: 'Things on a very small scale very small scale very small scale ...',
        }
      ],
    }
  }

}
</script>

<style lang="scss">
@import 'bootstrap/dist/css/bootstrap.css';
@import '@/assets/css/main.scss';

.about {
  padding-top: 100px;
  padding-bottom: 100px;

  .about__body {
    height: 100%;
    margin-top: 100px;
  }

  .about__video {
    position: relative;
    padding-bottom: 35%;
  }

  .about__video iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .about__content {
    padding-left: 80px;

    .about__title {
      margin-bottom: 10px;
      font-size: 40px;
      font-weight: 700;
      line-height: 142%;
      letter-spacing: 0.2px;
      color: #252B42;
    }
    
    .about__description {
      font-weight: 500;
      font-size: 14px;
      line-height: 143%;
      letter-spacing: 0.2px;
      margin-bottom: 30px;
    }

    .item__about {
      cursor: pointer;

      .item__icon {
        margin-right: 20px;
      }

      .item__title {
        font-size: 16px;
        font-weight: 700;
        line-height: 150%;
        letter-spacing: 0.1px;
        color: #252B42;
      }

      .item__text {
        margin-bottom: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 250px;
        font-weight: 600;
        font-size: 14px;
        line-height: 171x;
        letter-spacing: 0.2px;
      }
    }

    .item__about:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  @media (max-width: $lg-width) {
    padding-top: 50px;
    padding-bottom: 50px;

    .about__body {
      margin-top: 50px;
    }

    .about__video {
      padding-bottom: 50%;
      margin-bottom: 30px;
    }

    .about__content {
      padding-left: 15px;

      .about__title {
        font-size: 32px;
      }
    }
  }

  @media (max-width: $sm-width) {
    padding-top: 30px;
    padding-bottom: 50px;

    .about__video {
      padding-bottom: 60%;
      margin-bottom: 30px;
    }

    .about__video iframe {
      padding-left: 15px;
      padding-right: 15px;
    }

    .about__body {
      margin-top: 30px;
    }

    .about__content {
      .about__title {
        font-size: 24px;
      }
    }
  }
}
</style>