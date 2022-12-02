<template>
  <section class="footer">
    <div class="container">
      <div class="footer__body row">
        <div class="col-12 col-lg-8">
          <div class="footer__content row">
            <div
              class="footer__list col-6 col-lg-3"
              v-for="elem in FooterList"
              :key="elem.title"
            >
              <h4 class="footer__title">{{ elem.title }}</h4>
              <nav>
                <div
                  class="footer__item item-footer"
                  v-for="item in elem.LinkList"
                  :key="item.link"
                >
                  <a href="item.link" class="item-footer__link">{{item.link}}</a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="footer__contact contact">
            <h4 class="contact__title footer__title">Get In Touch</h4>
            <div
              class="contact__item item-contact d-flex align-items-center"
              v-for="item in ContactList"
              :key="item.link"
            >
              <div class="item-contact__img">
                <img
                  :src="require(`@/assets/img/${item.icon}.svg`)"
                  :alt="item.link"
                />
              </div>
              <a class="item-contact__link" href="item.link">{{ item.link }}</a>
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
      FooterList: [
        {
          title: "Company Info",
          LinkList: [
            { link: "About Us" },
            { link: "Carrier" },
            { link: "We are hiring" },
            { link: "Blog" },
          ],
        },
        {
          title: "Legal",
          LinkList: [
            { link: "About Us" },
            { link: "Carrier" },
            { link: "We are hiring" },
            { link: "Blog" },
          ],
        },
        {
          title: "Features",
          LinkList: [
            { link: "About Us" },
            { link: "Carrier" },
            { link: "We are hiring" },
            { link: "Blog" },
          ],
        },
        {
          title: "Resources",
          LinkList: [
            { link: "IOS & Android" },
            { link: "Watch" },
            { link: "Customers" },
            { link: "API" },
          ],
        },
      ],

      ContactList: [
        {
          link: "(480) 555-0103",
          icon: "footer-01",
        },
        {
          link: "4517 Washington Ave. Manchester, Kentucky 39495",
          icon: "footer-02",
        },
        {
          link: "debra.holt@example.com",
          icon: "footer-03",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.css";
@import "@/assets/css/main.scss";

.footer {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #17213c;
  color: #ffffff;

  .footer__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.1px;
  }

  .footer__item:not(:last-child) {
    margin-bottom: 10px;
  }

  .item-footer__link,
  .item-contact__link {
    display: block;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 171%;
    letter-spacing: 0.2px;
    color: inherit;
    transition: all 0.5s;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &:hover {
      opacity: 0.8;
    }

    &:active {
      text-decoration: underline;
    }
  }

  .contact {
    margin-left: auto;
  }

  .item-contact__img {
    margin-right: 10px;
  }

  @media (max-width: $lg-width) {
    .footer__content {
      margin-bottom: 30px;
    }

    .footer__list {
      &:not(:nth-last-child(-n + 2)) {
        margin-bottom: 30px;
      }
    }
  }
  
  @media (max-width: $sm-width) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
</style>