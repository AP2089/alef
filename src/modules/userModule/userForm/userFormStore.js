import { reactive, ref, computed } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";
import router from "@/router";
import { useVuelidate } from "@vuelidate/core";
import { required, numeric, minLength, maxLength } from "@vuelidate/validators";
import cloneObject from "@/utils/cloneObject";
import { LOCAL_STORE } from "@/config";

const useUserFormStore = defineStore("userFormStore", () => {
  const maxChildren = ref(5);

  const initialData = JSON.parse(localStorage.getItem(LOCAL_STORE)) || {
    name: "",
    age: "",
    children: [],
  };

  const data = ref(cloneObject(initialData));
  const form = reactive(cloneObject(initialData));
  const childrenLen = computed(() => form.children.length);

  const rules = computed(() => {
    const initialRules = {
      name: { required, minLength: minLength(3) },
      age: { required, numeric, maxLength: maxLength(2) },
    };

    const localRules = {
      ...initialRules,
      children: [],
    };

    if (childrenLen.value > 0) {
      for (let key in form.children) {
        localRules.children.push({
          ...initialRules,
        });
      }
    }

    return localRules;
  });

  const v$ = useVuelidate(rules, form);

  const addChild = () => {
    if (childrenLen.value < maxChildren.value) {
      form.children.push({
        id: Date.now(),
        name: "",
        age: "",
      });
    }
  };

  const removeChild = (id) => {
    form.children = form.children.filter((item) => item.id !== id);
  };

  const saveForm = async () => {
    const isFormCorrect = await v$.value.$validate();

    if (isFormCorrect) {
      data.value = cloneObject(form);
      localStorage.setItem(LOCAL_STORE, JSON.stringify(data.value));
      router.push("/preview");
    }
  };

  return {
    v$,
    form,
    data,
    maxChildren,
    childrenLen,
    addChild,
    removeChild,
    saveForm,
  };
});

export default useUserFormStore;

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserFormStore, import.meta.hot));
}
