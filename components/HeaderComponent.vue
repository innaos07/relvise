<!-- Please remove this file from your project -->
<template>
  <header class="header">
    <div class="header__container container">
      <div
        class="header__body d-flex flex-column flex-sm-row align-items-start align-items-sm-center"
        :class="{ 'header__body--active': isShowMenu }"
      >
        <a
          href="#"
          class="header__logo"
        >
          Relvise
        </a>
        <div
          class="header__menu-toggle menu-toggle d-sm-none"
          @click="isShowMenu = !isShowMenu"
        >
          <span class="menu-toggle__element"></span>
        </div>
        <nav class="header__menu menu d-sm-none" v-if="isShowMenu">
          <ul class="menu__list d-flex flex-column justify-content-start">
            <li class="menu__item" v-for="item in listMenu" :key="item.name">
              <a :href="item.link" class="menu__link">{{ item.name }}</a>
            </li>
          </ul>
        </nav>

        <nav class="header__menu menu d-none d-sm-block">
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
  position: relative;

  .header__body {
    padding: 25px 0;
    min-height: 105px;
  }

  .header__logo {
    display: block;
    font-weight: 700;
    font-size: 24px;
    line-height: 133.3%;
    letter-spacing: 0.1px;
    color: #252B42;
    text-decoration: none;
    transition: all 0.5s;
    cursor: pointer;

    &:hover,
    &:focus {
      color: #ff7b47;
      outline: none;
    }

    &:active {
      opacity: 0.5;
    }
  }

  .menu-toggle {
    position: absolute;
    top: 30px;
    right: 20px;
    width: 30px;
    height: 16px;
    cursor: pointer;

    .menu-toggle__element {
      display: block;
      position: relative;
      width: 100%;
      height: 2px;
      background-color: #000;
      transition: all 0.5s;

      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #000;
        transition: all 0.5s;
      }

      &::before {
        top: 8px;
      }

      &::after {
        top: 16px;
      }

      &:hover,
      &:hover::before,
      &:hover::after,
      &:focus,
      &:focus::before,
      &:focus::after {
        background-color: #ff7b47;
      }

      &:active,
      &:active::before,
      &:active::after {
        opacity: 0.5;
      }
    }
  }

  .header__menu {
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

    &:hover,
    &:focus {
      color: #252B42;
      outline: none;
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 80px;
    background-color: #fff;
    z-index: 5000;
    box-shadow: 0 0 14px -7px rgba(0, 0, 0, 0.3);

    .header__body {
      min-height: 80px;

      &--active {
        padding-bottom: 0;
      }
    }

    .header__menu-nav {
      margin-left: 0;
    }

    .menu__list {
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      z-index: 5000;
      background: #fff;
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
