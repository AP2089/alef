<script setup>
const navItems = [
  { id: 1, title: "Форма", link: "/" },
  { id: 2, title: "Превью", link: "/preview" },
];
</script>

<template>
  <header class="header">
    <div class="header__wrap">
      <router-link to="/" class="header__logo">
        <img
          src="@/assets/images/logo.svg"
          alt="Alef"
          loading="lazy"
          class="header__logo-img"
        />
      </router-link>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item" v-for="item in navItems" :key="item.id">
            <router-link :to="item.link" class="header__nav-link">{{
              item.title
            }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: $color-white;
  box-shadow: 0px 1px 0px $color-excess;

  &__wrap {
    width: 100%;
    min-height: 76px;
    max-width: 1212px;
    margin: 0 auto;
    padding: 15px 108px 15px 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__logo {
    margin-right: 15px;
    text-decoration: none;
    opacity: 1;
    transition: opacity 0.5s ease 0s;

    &:hover {
      opacity: 0.7;
    }

    &-img {
      display: block;
      width: 93px;
      height: 29px;
    }
  }

  &__nav {
    margin: 0 auto;

    &-list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &-item {
      margin: 0 24px 0 0;

      &:last-child {
        margin-right: 0;
      }
    }

    &-link {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: $color-other;
      text-decoration: none;
      transition: color 0.5s ease 0s;

      &:hover,
      &.active {
        text-decoration: none;
        color: $color-primary;
      }
    }
  }
}
</style>
