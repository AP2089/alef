<script setup>
import useUserFormStore from "./userFormStore";

const userFormStore = useUserFormStore();
</script>

<template>
  <form class="user-form" @submit.prevent="userFormStore.saveForm">
    <div class="user-form__section">
      <h6 class="heading-base">Персональные данные</h6>
      <div class="user-form__panel">
        <div class="user-form__panel-row">
          <InputUI
            placeholder="Имя"
            v-model="userFormStore.form.name"
            :error="userFormStore.v$.name"
          />
        </div>

        <div class="user-form__panel-row">
          <InputUI
            placeholder="Возраст"
            v-model="userFormStore.form.age"
            :error="userFormStore.v$.age"
          />
        </div>
      </div>
    </div>

    <div class="user-form__section">
      <div class="user-form__head">
        <h6 class="user-form__head-heading heading-base">
          Дети (макс. {{ userFormStore.maxChildren }})
        </h6>

        <ButtonUI
          variant="base"
          class="user-form__head-btn"
          @click="userFormStore.addChild"
          :disabled="userFormStore.childrenLen >= userFormStore.maxChildren"
        >
          <svg><use xlink:href="#plus"></use></svg>
          Добавить ребенка
        </ButtonUI>
      </div>

      <div
        class="user-form__panel user-form__panel_base"
        v-if="userFormStore.childrenLen > 0"
      >
        <div
          class="user-form__panel-row"
          v-for="(child, index) in userFormStore.form.children"
          :key="child.id"
        >
          <InputUI
            placeholder="Имя"
            v-model="child.name"
            :error="userFormStore.v$.children[index]?.name"
          />
          <InputUI
            placeholder="Возраст"
            v-model="child.age"
            :error="userFormStore.v$.children[index]?.age"
          />
          <ButtonUI
            variant="extra"
            @click="userFormStore.removeChild(child.id)"
          >
            Удалить
          </ButtonUI>
        </div>
      </div>
    </div>

    <div class="user-form__section">
      <ButtonUI type="submit">Сохранить</ButtonUI>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.user-form {
  $rs: &;

  &__section {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    &-heading {
      margin-bottom: 0;
    }

    &-btn {
      margin-left: 15px;
    }
  }

  &__panel {
    $panel: &;

    &-row {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &_base {
      #{$panel}-row {
        display: grid;
        grid-template-columns: 1fr 1fr 100px;
        column-gap: 18px;
      }
    }
  }
}
</style>
