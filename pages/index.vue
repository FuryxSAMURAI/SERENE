<template>
  <div class="container__main">
      <app-promo-baner />
      <app-product-category />
      <app-about-store />
      <app-comments-block />
  </div>
</template>


<script>
import AppPromoBaner from '../components/baners/AppPromoBaner.vue';
import AppProductCategory from '../components/category/AppProductCategory.vue';
import AppAboutStore from '../components/about/AppAboutStore.vue';
import AppCommentsBlock from '../components/comments/AppCommentsBlock.vue';

export default {
  components: {
    AppPromoBaner,
    AppProductCategory,
    AppAboutStore,
    AppCommentsBlock,
  },
}
</script>

<style scoped lang="scss">
.container__main {
 
}
</style>
