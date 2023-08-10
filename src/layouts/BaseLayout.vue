<script setup>
import SpriteComponent from "@/components/SpriteComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <SpriteComponent />

  <div class="wrap">
    <HeaderComponent />

    <main class="main">
      <div class="center">
        <slot />
      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1 0 auto;
}

.center {
  max-width: 646px;
  margin: 0 auto;
  padding: 30px 15px 136px 15px;
}
</style>
