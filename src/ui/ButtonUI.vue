<script>
export default {
  name: "ButtonUI",
};
</script>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  variant: {
    type: String,
    default: "primary", // base | extra
  },
});

const classes = computed(() => `button button_${props.variant}`);
</script>

<template>
  <button :class="classes" :type="type">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  text-decoration: none !important;
  border-radius: 100px;
  transition: all 0.5s ease 0s;

  &:disabled {
    cursor: default;
  }

  :deep(svg) {
    width: 24px;
    min-width: 24px;
    height: 24px;
    color: inherit;
    margin-right: 4px;
  }

  &_primary {
    border-color: $color-primary;
    background-color: $color-primary;
    color: $color-white;

    &:hover {
      background-color: $color-factory;
      border-color: $color-factory;
    }

    &:focus {
      background-color: $color-primary;
      border-color: $color-factory;
    }

    &:active {
      background-color: $color-success;
      border-color: $color-success;
    }

    &:disabled {
      background-color: $color-secondary;
      border-color: $color-secondary;
    }
  }

  &_base {
    border-color: $color-primary;
    background-color: $color-white;
    color: $color-primary;

    &:hover {
      background-color: $color-special;
    }

    &:focus {
      border-color: $color-other;
    }

    &:active {
      background-color: $color-additional;
    }

    &:disabled {
      border-color: $color-normal;
      background-color: $color-white;
      color: $color-normal;
    }
  }

  &_extra {
    border-color: $color-white;
    background-color: $color-white;
    color: $color-primary;

    &:hover {
      border-color: $color-special;
      background-color: $color-special;
    }

    &:focus {
      border-color: $color-other;
    }

    &:active {
      border-color: $color-additional;
      background-color: $color-additional;
    }

    &:disabled {
      border-color: $color-normal;
      background-color: $color-white;
      color: $color-normal;
    }
  }
}
</style>
