<template>
  <section class="contacts">
    <div class="container">
      <div class="contacts__header d-flex flex-column justify-content-center">
        <h2 class="header__title">Get In Touch</h2>
        <p class="header__description">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div
        class="
          contacts__body
          d-flex
          flex-column flex-lg-row
          align-items-lg-center
        "
      >
        <div
          class="
            contacts__item
            item__contacts
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
          v-for="item in ContactsList"
          :key="item.icon"
          :class="{ 'item__contacts--active': item.isActive }"
        >
          <div class="item__icon">
            <img
              :src="require(`@/assets/img/${item.icon}.svg`)"
              :alt="item.title"
            />
          </div>
          <div class="item__emails">
            <a :href="item.emailOne" class="item__email">{{ item?.emailOne }}</a>
            <a :href="item.emailTwo" class="item__email">{{ item?.emailTwo }}</a>
          </div>
          <h3 class="item__title">{{ item.title }}</h3>
          <a :href="item.link" class="item__btn">
            {{ item.buttonText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ContactsList: [
        {
          icon: "contacts-01",
          emailOne: "georgia.young@example.com",
          emailTwo: "georgia.young@ple.com",
          title: "Get Support",
          link: "#",
          buttonText: "Submit Request",
          isActive: false,
        },
        {
          icon: "contacts-02",
          emailOne: "georgia.young@example.com",
          emailTwo: "georgia.young@ple.com",
          title: "Get Support",
          link: "#",
          buttonText: "Submit Request",
          isActive: true,
        },
        {
          icon: "contacts-03",
          emailOne: "georgia.young@example.com",
          emailTwo: "georgia.young@ple.com",
          title: "Get Support",
          link: "#",
          buttonText: "Submit Request",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.css";
@import "@/assets/css/main.scss";

.contacts {
  padding-top: 80px;
  padding-bottom: 150px;
  background-color: #f3f3f3;
  color: #252b42;

  .contacts__header {
    margin-bottom: 80px;
  }

  .item__contacts {
    padding: 50px 40px;
    background-color: #fff;
    color: #252b42;

    .item__icon {
      width: 72px;
      height: 72px;
    }

    .item__emails {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .item__email {
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      line-height: 171%;
      text-align: center;
      letter-spacing: 0.2px;
      color: inherit;
    }

    .item__title {
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      letter-spacing: 0.1px;
    }

    .item__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      min-height: 44px;
      border: 1px solid #ff7b47;
      border-radius: 5px;
      font-weight: 600;
      font-size: 14px;
      line-height: 171%;
      text-align: center;
      letter-spacing: 0.2px;
      color: #ff7b47;
      text-decoration: none;
      transition: all 0.5s;

      &:hover,
      &:active {
        border: 1px solid #ff7b47;
        background-color: #ff7b47;
        color: #fff;
      }
    }
  }

  .item__contacts--active {
    padding: 80px 40px;
    background-color: #252b42;
    color: #ffffff;

    .item__btn {
      border: 1px solid #ffffff;
      color: #ffffff;
    }
  }

  .contacts__item > *:not(:last-child) {
    margin-bottom: 15px;
  }

  @media (max-width: $lg-width) {
    padding-top: 50px;
    padding-bottom: 100px;

    .contacts__header {
      margin-bottom: 50px;
    }
  }
}
</style>