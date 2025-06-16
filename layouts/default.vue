<template>
  <div class="layout">
    <header class="layout__header">
      <AppHeader />
      <AppBaner />
    </header>

    <main class="layout__main">
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

export default {
  components: {
    AppHeader,
    AppBaner,
    AppFooter,
    AppLoyaltyBonusBaner,
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.layout__main {
  flex: 1;
  padding: 20px 100px 40px;
}

.layout__footer {
  background: #111;
}

@media (max-width: 1024px) {
  .layout__main {
    padding: 20px 40px 40px;
  }
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
