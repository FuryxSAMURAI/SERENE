<template>
  <section class="page reviews container__main-reviews">
    <div class="container container__main-wrapper">
      <app-comments-block />
    </div>
  </section>
</template>

<script>
import AppCommentsBlock from '@/components/comments/AppCommentsBlock.vue'
export default{
components:{
    AppCommentsBlock
}
}
</script>

<style scoped lang="scss">
.container__main-reviews {
  margin: 100px 0;

  .container__main-wrapper {
    margin: 0 auto;
  }

}
</style>
