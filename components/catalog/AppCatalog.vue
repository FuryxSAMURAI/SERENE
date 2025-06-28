<template>
    <section class="container__main-catalog">
        <div class="container__main-catalog-sort">
            <div class="container__main-catalog-sort-all-products">{{ getProducts.length }} товарів </div>
            <AppSortByPrice />
        </div>
        <div class="container__main-catalog-blocks">
            <div class="container__main-catalog-blocks-block" v-if="getProducts.length"
                v-for="(product, index) in getProducts" :key="index">
                <div class="container__main-catalog-blocks-block-img" @click="setReviewed(product)">
                    <nuxt-link :to="`/product/${product.id}`">
                        <img :src="product.images[0]" :alt="product.title" loading="lazy">
                        <span>-10%</span>
                    </nuxt-link>
                </div>
                <div class="container__main-catalog-blocks-block-title">{{ product.title }}</div>
                <div class="container__main-catalog-blocks-block-desc">
                    <div class="container__main-catalog-blocks-block-desc-aside">
                        <div class="container__main-catalog-blocks-block-desc-aside-discount">{{ product.price -
                            ((product.price * 10) / 100) }} $</div>
                        <div class="container__main-catalog-blocks-block-desc-aside-price">{{ product.price }} $</div>
                    </div>
                    <div class="container__main-catalog-blocks-block-desc-option">
                        <div class="container__main-catalog-blocks-block-desc-favorite">
                            <AppAddFavorite :setFavorites="product" />
                        </div>
                        <div class="container__main-catalog-blocks-block-desc-buy">
                            <AppAddCart :setCart="product" />
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <p>Нажаль продукти не змогли завантажитися належним чином</p>
            </div>
        </div>
        <div class="container__main-catalog-pagination">
            <div class="container__main-catalog-pagination-block">
                <button @click="prevPage" :disabled="currentPage === 1"><- </button>
                        <button v-for="(page, index) in totalPages" :key="index" @click="goToPage(page)"
                            :class="{ active: page === currentPage }">{{ page }}</button>
                        <button @click="nextPage" :disabled="currentPage === totalPages">-></button>
            </div>
            <div class="container__main-catalog-pagination-more">
                <button @click="showMore" class="load-more">
                    Показати ще
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import AppAddCart from '../buttons/AppAddCart.vue';
import AppAddFavorite from '../buttons/AppAddFavorite.vue';
import AppSortByPrice from './filters/AppSortByPrice.vue';
export default {
    components: {
        AppAddCart,
        AppAddFavorite,
        AppSortByPrice,
    },
    computed: {
        ...mapState('catalog', ['currentPage', 'loading']),
        ...mapGetters('catalog', ['totalPages', 'getProducts'])
    },
    mounted() {
        this.initPagination()
    },
    methods: {
        ...mapActions('catalog', ['initPagination', 'fetchPage', 'fetchMore']),
        goToPage(page) {
            this.fetchPage(page)
        },
        prevPage() {
            if (this.currentPage > 1) this.fetchPage(this.currentPage - 1)
        },
        nextPage() {
            if (this.currentPage < this.totalPages) this.fetchPage(this.currentPage + 1)
        },
        showMore() {
            this.fetchMore()
        },
        setReviewed(val) {
            this.$store.commit('reviewed/setReviewed', val)
        },
    },
}
</script>

<style scoped lang="scss">
.container__main-catalog {
    display: flex;
    flex-direction: column;
    gap: 40px;

    &-sort {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-all-products {
            color: #898686;
        }
    }

    &-blocks {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;

        &-block {
            width: 100%;
            background: #fff;
            max-width: 400px;
            margin: 0 auto;

            &-img {
                position: relative;
                height: 450px;
                width: 100%;

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }

                span {
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: #fff;
                    // color: #fff;
                    height: 45px;
                    width: 45px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 300;
                    border-bottom-right-radius: 3px;

                    color: #f94942;
                }
            }

            &-title {
                height: 40px;
                margin: 10px 0;
                font-size: 18px;
            }

            &-desc {
                display: flex;
                justify-content: space-between;
                align-items: center;

                &-aside {
                    display: flex;
                    align-items: flex-end;
                    font-size: 22px;
                    gap: 10px;

                    &-price {
                        font-size: 16px;
                        color: #898686;
                        text-decoration: line-through;

                    }

                    &-discount {
                        font-weight: 500;
                        color: #f94942;

                    }
                }

                &-option {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 5px;
                }
            }
        }
    }

    &-pagination {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        &-block {
            button {
                margin: 0 5px;
                border: none;
                padding: 10px;
                background-color: #fff;
            }
        }

        &-more {
            button {
                background-color: #333;
                color: #fff;
                height: 50px;
                border: none;
                font-size: 12px;
                border-radius: 3px;
                width: 160px;
                transition: all 1s ease;

                &:hover {
                    cursor: pointer;
                    border-radius: 0;
                    color: #898686;
                }
            }
        }
    }
}

@media (max-width:768px) {
    .container__main-catalog {
        &-blocks {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
    }
}
</style>