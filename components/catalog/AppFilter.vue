<template>
    <section class="container__main-filter-block">
        <AppSortPrice @getPriceRange="setPriceRange" />
        <AppSortTitle @getTitle="setTitle" />
        <AppSortCategory @getCategorySlug="setCategorySlug" />
        <div class="container__main-filter-block-buttons">
            <button @click="applyFilter">Застосувати</button>
            <button @click="clearFilter">Очистити</button>
        </div>
    </section>
</template>

<script>
import AppSortPrice from './filters/AppSortPrice.vue'
import AppSortTitle from './filters/AppSortTitle.vue'
import AppSortCategory from './filters/AppSortCategory.vue'

export default {
    components: { AppSortPrice, AppSortTitle, AppSortCategory },
    data() {
        return {
            priceMin: null,
            priceMax: null,
            title: null,
            categorySlug: null,
        }
    },
    methods: {
        setPriceRange(min, max) {
            this.priceMin = min
            this.priceMax = max
        },
        setTitle(val) {
            this.title = val
        },
        setCategorySlug(val) {
            this.categorySlug = val
        },
        applyFilter() {
            this.$store.commit('catalog/SET_PRICE_MIN', this.priceMin)
            this.$store.commit('catalog/SET_PRICE_MAX', this.priceMax)
            this.$store.commit('catalog/SET_TITLE', this.title)
            this.$store.commit('catalog/SET_CATEGORY_SLUG', this.categorySlug)
            this.$store.dispatch('catalog/fetchPage', 1)
        },
        clearFilter() {
            this.$store.commit('catalog/SET_PRICE_MIN', null)
            this.$store.commit('catalog/SET_PRICE_MAX', null)
            this.$store.commit('catalog/SET_TITLE', null)
            this.$store.commit('catalog/SET_CATEGORY_SLUG', null)
            this.$store.commit('catalog/SET_SORT_BY', 'new')
            this.$store.dispatch('catalog/fetchPage', 1)
        }
    }
}
</script>


<style scoped lang="scss">
.container__main-filter-block {
    position: sticky;
    top: 100px;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: #fff;

    &-buttons {
        display: flex;
        flex-direction: column;
        gap: 10px;

        button {
            background-color: #333;
            color: #fff;
            height: 50px;
            border: none;
            border-radius: 3px;
            width: 100%;
            transition: all 1s ease;

            &:hover {
                cursor: pointer;
                border-radius: 0;
                color: #898686;
            }
        }
    }
}
</style>