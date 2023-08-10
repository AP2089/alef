<script>
export default {
  name: "InputUI",
};
</script>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  error: {
    type: [String, Object],
  },
});

const emits = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (val) => emits("update:modelValue", val),
});

const errorMessage = computed(() => {
  if (typeof props.error === "string") {
    return props.error;
  } else {
    if (props.error?.$errors.length > 0) {
      return props.error.$errors[0].$message;
    }
  }

  return false;
});

const classes = computed(() => [
  "input",
  { active: value.value.length > 0 },
  { error: errorMessage.value },
]);
</script>

<template>
  <div :class="classes">
    <div class="input__wrap">
      <input type="text" class="input__field" v-model="value" />
      <div class="input__placeholder">{{ placeholder }}</div>
    </div>
    <div class="input__error" v-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<style lang="scss" scoped>
.input {
  $rs: &;
  display: block;
  width: 100%;

  &__wrap {
    position: relative;
    background-color: $color-white;
    border-radius: 4px;
    transition: all 0.5s ease 0s;
  }

  &__field {
    display: block;
    width: 100%;
    height: 56px;
    background-color: transparent;
    border: 1px solid $color-general;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    color: $color-base;
    outline: none;
    padding: 17px 16px 0 16px;
    position: relative;
    box-shadow: 0px 4px 4px transparent, 0px 4px 56px transparent;
    z-index: 1;
    transition: all 0.5s ease 0s;

    &:hover,
    &:focus {
      box-shadow: 0px 4px 4px $color-basic, 0px 4px 56px $color-info;
    }
  }

  &__placeholder {
    display: block;
    width: 100%;
    font-weight: 400;
    font-size: 14px;
    color: $color-other;
    white-space: nowrap;
    overflow: hidden;
    padding: 0 16px;
    text-overflow: ellipsis;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 0;
    transform: translateY(-50%);
    transition: all 0.1s ease 0s;
  }

  &__error {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: $color-danger;
    padding: 8px 0 0 0;
  }

  &.active &__placeholder,
  &__field:focus ~ &__placeholder {
    font-size: 13px;
    transform: translateY(calc(-50% - 11px));
  }

  &.error {
    #{$rs}__wrap {
      background-color: $color-menace;
    }

    #{$rs}__field {
      border-color: $color-menace;
    }
  }
}
</style>
