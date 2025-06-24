<template>
  <section class="container__main">
    <div class="container__main-wrapper">
      <div class="container__main-wrapper-profile">
        <AppUserProfile :isLogin="getLoginVal" />
      </div>
      <div class="container__main-wrapper-loyalty">
        <AppUserLoyalty :isLogin="getLoginVal" />
      </div>
    </div>
    <div class="container__main-featurers">
      <AppFeaturersBaner />
    </div>
  </section>
</template>

<script>
import AppFeaturersBaner from '../../components/baners/AppFeaturersBaner.vue'
import AppUserLoyalty from '../../components/profile/AppUserLoyalty.vue';
import AppUserProfile from '../../components/profile/AppUserProfile.vue';
import { mapGetters } from 'vuex'
export default {
  components: {
    AppUserProfile,
    AppUserLoyalty,
    AppFeaturersBaner,
  },
  mounted() {
    this.$store.dispatch('profile/localLoginVal')
  },
  computed: {
    ...mapGetters('profile', ['getLoginVal'])
  },
}
</script>

<style scoped lang="scss">
.container__main-wrapper {
  display: grid;
  grid-template-columns: minmax(400px, 1fr) 1fr;
  max-width: 1200px;
  margin: 0 auto;
}

.container__main-wrapper-profile {
  display: flex;
  justify-content: center;
}

.container__main-user {
  width: 100%;
  max-width: 400px;
  padding: 24px;
  background: #fff;
  box-sizing: border-box;
}

.container__main-wrapper-loyalty {
  width: 100%;
  max-width: 600px;
}

@media (max-width: 768px) {
  .container__main-wrapper {
    margin-top: 40px;
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .container__main-wrapper-profile,
  .container__main-wrapper-loyalty {
    width: 100%;
    max-width: 400px;
  }
}
</style>