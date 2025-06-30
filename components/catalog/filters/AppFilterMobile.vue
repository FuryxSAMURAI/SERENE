<template>
    <section class="container__main-filter">
        <button class="container__main-filter-open-btn" @click="isOpen = true">Фільтр</button>
        <div class="container__main-filter-content" :class="{ open: isOpen }">
            <div class="container__main-filter-header">
                <span>Фільтр</span>
                <div class="close-btn" @click="isOpen = false">
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="container__main-filter-scroll">
                <AppSortPrice @getPriceRange="setPriceRange" />
                <AppSortTitle @getTitle="setTitle" />
                <AppSortCategory @getCategorySlug="setCategorySlug" />
                <AppSortByPrice />
            </div>

            <div class="container__main-filter-content-buttons">
                <button @click="applyFilter">Застосувати</button>
                <button @click="clearFilter">Очистити</button>
            </div>
        </div>
        <div class="container__main-filter-backdrop" v-if="isOpen" @click="isOpen = false"></div>
    </section>
</template>
<script>
import AppSortByPrice from './AppSortByPrice.vue';
import AppSortCategory from './AppSortCategory.vue';
import AppSortPrice from './AppSortPrice.vue';
import AppSortTitle from './AppSortTitle.vue';

export default {
    components: { AppSortPrice, AppSortTitle, AppSortCategory, AppSortByPrice, },
    data() {
        return {
            isOpen: false,
            priceMin: null,
            priceMax: null,
            title: null,
            categorySlug: null,
        };
    },
    methods: {
        setPriceRange(min, max) {
            this.priceMin = min;
            this.priceMax = max;
        },
        setTitle(val) {
            this.title = val;
        },
        setCategorySlug(val) {
            this.categorySlug = val;
        },
        applyFilter() {
            this.$store.commit('catalog/SET_PRICE_MIN', this.priceMin);
            this.$store.commit('catalog/SET_PRICE_MAX', this.priceMax);
            this.$store.commit('catalog/SET_TITLE', this.title);
            this.$store.commit('catalog/SET_CATEGORY_SLUG', this.categorySlug);
            this.$store.dispatch('catalog/fetchPage', 1);
            this.isOpen = false;
        },
        clearFilter() {
            this.$store.commit('catalog/SET_PRICE_MIN', null);
            this.$store.commit('catalog/SET_PRICE_MAX', null);
            this.$store.commit('catalog/SET_TITLE', null);
            this.$store.commit('catalog/SET_CATEGORY_SLUG', null);
            this.$store.commit('catalog/SET_SORT_BY', 'new');
            this.$store.dispatch('catalog/fetchPage', 1);
            this.isOpen = false;
        },
    },
};
</script>
<style scoped lang="scss">
.container__main-filter {
    position: relative;

    &-open-btn {
        color: #333;
        padding: 15px 20px;
        background: #fff;
        font-size: 14px;
        border: 1px solid #333;
        cursor: pointer;
    }

    &-content {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100%;
        max-height: none;
        width: 80%;
        padding: 20px;
        max-width: 350px;
        background: #fff;
        z-index: 1000;
        transition: right 0.3s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &.open {
            right: 0;
        }
    }

    &-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 0 20px;

        span {
            color: #333;
            font-size: 32px;
            font-weight: 600;
        }

        .close-btn {
            position: relative;
            width: 24px;
            height: 24px;
            cursor: pointer;

            span {
                position: absolute;
                top: 50%;
                left: 0;
                width: 100%;
                height: 2px;
                background: #333;
                border-radius: 5px;
                transform-origin: center;
            }

            span:first-child {
                transform: rotate(45deg);
            }

            span:last-child {
                transform: rotate(-45deg);
            }
        }
    }

    &-scroll {
        flex: 1;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &-content-buttons {
        display: flex;
        flex-direction: column;
        gap: 10px;

        button {
            padding: 10px;
            height: 60px;
            width: 100%;
            background: #333;
            color: #fff;
            border: none;
            cursor: pointer;
            border-radius: 4px;
            transition: background 0.3s;

            &:hover {
                background: #222;
            }

            &:last-child {
                background: #333;
                color: #fff;

                &:hover {
                    background: #222;
                }
            }
        }
    }

    &-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        min-height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }
}
</style>
