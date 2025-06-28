<template>
  <div class="layout">
    <header class="layout__header">
      <AppHeader />
      <AppBaner />
    </header>

    <main class="layout__main">
      <AppSlideBaner />
      <AppPreloader />
      <nuxt />
    </main>

    <footer class="layout__footer">
      <AppLoyaltyBonusBaner />
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppBaner from '@/components/baners/AppBaner.vue';
import AppLoyaltyBonusBaner from '../components/baners/AppLoyaltyBonusBaner.vue';
import AppSlideBaner from '../components/baners/AppSlideBaner.vue';
import AppPreloader from '../components/preloader/AppPreloader.vue';

export default {
  components: {
    AppHeader,
    AppBaner,
    AppFooter,
    AppSlideBaner,
    AppLoyaltyBonusBaner,
    AppPreloader,
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout__header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  background: #fff;
}

.layout__main {
  flex: 1;
}

.layout__footer {
  background: #111;
}

@media (max-width: 1024px) {
  .layout__main {}
}

@media (max-width: 768px) {
  .layout__main {
    padding: 0;
  }

  .layout__footer {
    padding: 16px;
  }
}
</style>
