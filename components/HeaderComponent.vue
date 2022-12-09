<!-- Please remove this file from your project -->
<template>
  <header class="header">
    <div class="header__container container">
      <div
        class="header__body d-flex flex-column flex-sm-row align-items-sm-center"
        :class="{ 'header__body--active': isShowMenu }"
      >
        <a
          href="#"
          class="header__logo"
          :class="{ 'header__logo--active': isShowMenu }"
        >
          Relvise
        </a>
        <div
          class="header__menu-toggle menu-toggle d-sm-none"
          @click="isShowMenu = !isShowMenu"
        >
          <span class="menu-toggle__element"></span>
        </div>
        <nav class="header__menu-nav menu d-sm-none" v-if="isShowMenu">
          <ul class="menu__list d-flex flex-column justify-content-start">
            <li class="menu__item" v-for="item in listMenu" :key="item.name">
              <a :href="item.link" class="menu__link">{{ item.name }}</a>
            </li>
          </ul>
        </nav>

        <nav class="header__menu-nav mov menu d-none d-sm-block">
          <ul class="menu__list d-flex alight-items-center">
            <li class="menu__item" v-for="item in listMenu" :key="item.name">
              <a :href="item.link" class="menu__link">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isShowMenu: false,
      listMenu: [
        { name: "Home", link: '#'},
        { name: "Product",  link: '#' },
        { name: "Pricing",  link: '#' },
        { name: "Contact",  link: '#' },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";

.header {
  .header__body {
    position: relative;
    padding: 25px 0;
    min-height: 105px;
  }

  .header__logo {
    font-weight: 700;
    font-size: 24px;
    line-height: 133.3%;
    letter-spacing: 0.1px;
    color: #252B42;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 0.8;
    }
  }

  .menu-toggle {
    position: absolute;
    top: 30px;
    right: 20px;
    width: 30px;
    height: 16px;

    .menu-toggle__element {
      display: block;
      position: relative;
      width: 100%;
      height: 2px;
      background-color: #000;

      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #000;
      }

      &::before {
        top: 8px;
      }

      &::after {
        top: 16px;
      }
    }
  }

  .header__menu-nav {
    margin-left: 130px;
  }

  .menu__list {
    padding: 0;
    margin: 0;
  }

  .menu__item {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  .menu__link {
    display: block;
    font-weight: 600;
    font-size: 14px;
    line-height: 171.4%;
    letter-spacing: 0.2px;
    color: #737373;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #252B42;
    }

    &:active {
      opacity: 0.5;
    }
  }

  @media (max-width: $md-width) {
    .header__menu-nav {
      margin-left: 80px;
    }
  }

  @media (max-width: $sm-width) {
    .header__body {
      min-height: 80px;

      &--active {
        padding-bottom: 0;
      }
    }

    .header__menu-nav {
      margin-left: 0;
    }

    .header__logo {
      &--active {
        margin-bottom: 20px;
      }
    }

    .menu__list {
      margin: 0 -15px;
    }

    .menu__item {
      width: 100%;
      border-bottom: 1px solid #e0e0e0;

      &:first-child {
        border-top: 1px solid #e0e0e0;
      }
    }

    .menu__link {
      padding: 10px 20px;
     
    }
  }
}
</style>
