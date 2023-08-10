import { createRouter, createWebHistory } from "vue-router";
import FormView from "@/views/FormView.vue";
import PreviewView from "@/views/PreviewView.vue";

const routes = [
  {
    path: "/",
    name: "form",
    component: FormView,
  },
  {
    path: "/preview",
    name: "preview",
    component: PreviewView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    };
  },
  routes,
});

export default router;
