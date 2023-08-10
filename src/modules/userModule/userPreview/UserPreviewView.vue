<script setup>
import useUserPreviewStore from "./userPreviewStore";

const userPreviewStore = useUserPreviewStore();
</script>

<template>
  <div class="user-preview">
    <div class="user-preview__section">
      <h6 class="heading-base">Персональные данные</h6>
      <div class="user-preview__name" v-if="userPreviewStore.personal">
        {{ userPreviewStore.personal }}
      </div>
      <div class="user-preview__empty" v-else>Нет данных</div>
    </div>
    <div class="user-preview__section">
      <h6 class="heading-base">Дети</h6>
      {{ childrenLen }}
      <ul class="user-preview__list" v-if="userPreviewStore.childrenLen > 0">
        <li
          class="user-preview__item"
          v-for="item in userPreviewStore.children"
        >
          {{ item }}
        </li>
      </ul>
      <div class="user-preview__empty" v-else>Нет данных</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-preview {
  &__section {
    margin-bottom: 60px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__name {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: $color-base;
  }

  &__list {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 20px;
    margin: 0 0 20px 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    background-color: $color-general;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__empty {
    font-style: italic;
  }
}
</style>
