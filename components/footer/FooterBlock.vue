<template>
  <section class="footer">
    <div class="container">
      <div class="footer__body row">
        <div class="col-12 col-lg-8">
          <div class="footer__content row">
            <div
              class="footer__list col-6 col-lg-3"
              v-for="elem in footerList"
              :key="elem.id"
            >
              <h4 class="footer__title">{{ elem.title }}</h4>
              <nav>
                <div
                  class="footer__item item-footer"
                  v-for="item in elem.linkList"
                  :key="item.id"
                >
                  <a :href="item.link" class="item-footer__link">{{item.name}}</a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="footer__contact contact-footer">
            <h4 class="contact-footer__title footer__title">Get In Touch</h4>
            <div
              class="contact-footer__item d-flex align-items-center"
              v-for="item in contactList"
              :key="item.id"
            >
              <div class="contact-footer__img">
                <img
                  :src="require(`@/assets/img/${item.icon}.svg`)"
                  :alt="item.id"
                />
              </div>
              <a class="contact-footer__link" :href="item.link">{{ item.link }}</a>
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
      footerList: [
        {
          id: 1,
          title: "Company Info",
          linkList: [
            { name: "About Us", link: "#", id: 14 },
            { name: "Carrier",  link: '#', id: 25 },
            { name: "We are hiring", link: '#', id: 33 },
            { name: "Blog",  link: '#', id: 46 },
          ],
        },
        {
          id: 2,
          title: "Legal",
          linkList: [
            { name: "About Us", link: '#', id: 12 },
            { name: "Carrier", link: '#', id: 21 },
            { name: "We are hiring", link: '#', id: 41 },
            { name: "Blog", link: '#', id: 51 },
          ],
        },
        {
          id: 3,
          title: "Features",
          linkList: [
            { name: "About Us", link: '#', id: 15 },
            { name: "Carrier", link: '#', id: 34 },
            { name: "We are hiring", link: '#', id: 54 },
            { name: "Blog", link: '#', id: 64 },
          ],
        },
        {
          id: 4,
          title: "Resources",
          linkList: [
            { name: "IOS & Android", link: '#', id: 57 },
            { name: "Watch", link: '#', id: 47 },
            { name: "Customers", link: '#', id: 77 },
            { name: "API", link: '#', id: 97 },
          ],
        },
      ],

      contactList: [
        {
          id: 1,
          link: "(480) 555-0103",
          icon: "footer-01",
        },
        {
          id: 2,
          link: "4517 Washington Ave. Manchester, Kentucky 39495",
          icon: "footer-02",
        },
        {
          id: 3,
          link: "debra.holt@example.com",
          icon: "footer-03",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";

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
  .contact-footer__link {
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

    &:hover,
    &:focus {
      opacity: 0.8;
      outline: none;
    }

    &:active {
      text-decoration: underline;
    }
  }

  .contact-footer {
    margin-left: auto;
  }

  .contact-footer__img {
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