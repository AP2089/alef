import { computed } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";
import { useUserFormStore } from "../index";

const userPreviewStore = defineStore("userPreviewStore", () => {
  const userFormStore = useUserFormStore();

  const personal = computed(() => {
    if (userFormStore.data.name && userFormStore.data.age) {
      return `${userFormStore.data.name}, ${userFormStore.data.age}`;
    }

    return false;
  });

  const children = computed(() => {
    return userFormStore.data.children.reduce((acc, item) => {
      acc.push(`${item.name}, ${item.age}`);

      return acc;
    }, []);
  });

  const childrenLen = computed(() => children.value.length);

  return {
    personal,
    children,
    childrenLen,
  };
});

export default userPreviewStore;

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(userPreviewStore, import.meta.hot));
}
