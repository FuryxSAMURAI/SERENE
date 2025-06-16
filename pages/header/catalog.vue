<template>
    <section class="container__main-wrapper">
        <div class="container__main-wrapper-block">
            <aside class="container__main-wrapper-block-filter">
                <AppFilter />
            </aside>
            <article class="container__main-wrapper-block-catalog">
                <AppCatalog />
            </article>
        </div>
        <article class="container__main-wrapper-featurers">
            <AppFeaturersBaner />
        </article>
        <article class="container__main-wrapper-about-store">
            <AppAboutStore />
        </article>
    </section>
</template>

<script>
import AppCatalog from '@/components/catalog/AppCatalog.vue';
import AppFilter from '@/components/catalog/AppFilter.vue';
import AppAboutStore from '../../components/about/AppAboutStore.vue';
import AppFeaturersBaner from '../../components/baners/AppFeaturersBaner.vue';
export default {
    components: {
        AppFilter,
        AppCatalog,
        AppFeaturersBaner,
        AppAboutStore,
    }
}
</script>

<style scoped lang="scss">
.container__main-wrapper {
    margin: 100px 0 0;
    display: flex;
    flex-direction: column;
    gap: 60px;
    &-block {

        display: flex;
        justify-content: center;
        gap: 20px;

        &-filter {
            width: 300px;
            flex-shrink: 0;
        }

        &-catalog {
            flex: 1;
        }
    }
}
</style>