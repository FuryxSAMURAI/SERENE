<template>
    <section class="container__main-favorites-block">
        <div class="container__main-favorites-block-header">
            <div class="container__main-favorites-block-header-title">Улюблені:</div>
            <div class="container__main-favorites-block-header-counter">{{ getFavorites.length }} <span
                    v-if="getFavorites.length == 1">товар</span><span v-else>товарів</span>
            </div>
        </div>
        <span class="container__main-favorites-block-content-block-hr" v-if="getFavorites.length != 1"></span>
        <div class="container__main-favorites-block-content">
            <div class="container__main-favorites-block-content-block" v-for="(favorite, index) in getFavorites"
                :key="index">
                <div class="container__main-favorites-block-content-block-wrapper">
                    <div class="container__main-favorites-block-content-block-wrapper-images">
                        <nuxt-link :to="`/product/${favorite.id}`">
                            <img :src="favorite.images" :alt="favorite.title">
                        </nuxt-link>
                    </div>
                    <div class="container__main-favorites-block-content-block-wrapper-description">
                        <div class="container__main-favorites-block-content-block-wrapper-description-product">
                            <div class="container__main-favorites-block-content-block-wrapper-description-product-slug">
                                {{ favorite.slug }}</div>
                            <div
                                class="container__main-favorites-block-content-block-wrapper-description-product-title">
                                {{ favorite.title }}</div>

                        </div>
                        <div class="container__main-favorites-block-content-block-wrapper-description-option">
                            <div class="container__main-favorites-block-content-block-wrapper-description-option-block">
                                <div
                                    class="container__main-favorites-block-content-block-wrapper-description-option-block-price">
                                    {{ favorite.price }} $
                                </div>
                                <div
                                    class="container__main-favorites-block-content-block-wrapper-description-option-block-quantity">
                                    <!-- {{ cart.qty }} -->
                                    <!-- <span v-if="cart.qty == 1">товар</span><span v-else>товарів</span> -->
                                </div>
                            </div>
                            <div
                                class="container__main-favorites-block-content-block-wrapper-description-option-buttons">
                                <button @click="setToCart(favorite)">Перемістити в кошик</button><span></span>
                                <button @click="deleteItem(favorite)">Видалити</button>
                            </div>
                        </div>
                    </div>
                </div>
                <span class="container__main-favorites-block-content-block-hr" v-if="getFavorites.length != 1"></span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        getFavorites: {
            type: Array,
            required: true
        }
    },
    mounted() {
        this.$store.dispatch('favorites/loadFavoritesFromLocalStorage')
        this.$store.dispatch('favorites/loadFavoritesCount')
    },
    methods: {
        deleteItem(val) {
            this.$store.commit('favorites/deleteItem', val)
        },
        setToCart(val) {
            this.$store.commit('cart/setCart', val)
            this.$store.dispatch('cart/loadCartCount')
        }
    },
}
</script>

<style scoped lang="scss">
.container__main-favorites-block {
    width: 100%;
    margin: 80px auto;
    max-width: 1200px;
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);



    &-header {
        background-color: #fff;
        padding: 20px 40px 10px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-title {
            font-size: 32px;
        }
    }

    &-content {
        padding: 20px 40px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        gap: 5px;

        &-block {
            &-wrapper {
                display: flex;
                gap: 20px;

                &-images {
                    height: 120px;
                    width: 120px;

                    img {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                    }
                }

                &-description {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;

                    &-product {
                        display: flex;
                        flex-direction: column;

                        &-slug {
                            font-size: 12px;
                            line-height: 15px;
                            text-transform: uppercase;
                            font-weight: 600;
                            margin-bottom: 12px;
                        }

                        &-title {
                            font-size: 14px;
                            line-height: 18px;
                            text-transform: capitalize;
                            font-weight: 400;
                            margin-bottom: 12px;
                        }
                    }

                    &-option {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        justify-content: space-between;

                        &-block {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-end;

                            &-price {
                                font-size: 18px;
                                line-height: 22px;
                                text-transform: uppercase;
                                font-weight: 600;
                                // margin-bottom: 12px;
                            }

                            &-quantity {
                                font-weight: 400;
                                margin-bottom: 12px;
                            }
                        }

                        &-buttons {
                            display: flex;
                            gap: 10px;

                            button {
                                border: none;
                                background-color: #fff;
                                color: #333;
                                border-bottom: 1px solid #333;
                                transition: all .3s ease;
                                font-size: 14px;

                                &:hover {
                                    cursor: pointer;
                                    color: #444;
                                }
                            }

                            span {
                                content: "";
                                display: block;
                                height: 100%;
                                width: 1px;
                                background-color: #333;
                            }
                        }
                    }
                }
            }

            &-hr {
                &::before {
                    content: "";
                    display: block;
                    height: 1px;
                    width: 100%;
                    margin: 10px 0;
                    background-color: #e6e6e6;
                }
            }
        }
    }
}

@media (max-width: 1024px) {
    .container__main-favorites-block-content-block-wrapper-description {
        display: block;
    }
}

@media (max-width: 768px) {
    .layout__main{
        padding: 0;
    }
    .container__main-favorites-block-header {
        &-title {
            font-size: 18px;
        }

        &-counter {
            font-size: 12px;
        }
    }

    .container__main-favorites-block-content-block-wrapper-description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;

        &-product {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            &-slug {
                font-size: 8px;
                line-height: 12px;
                margin-bottom: 0;
            }

            &-title {
                font-size: 12px;
                line-height: 16px;
            }
        }

        &-option {
            display: block;

            &-block {
                display: block;

                &-price {
                    font-size: 14px;
                }
            }

            &-buttons {
                display: block;
                gap: 10px;
                button {
                    font-size: 12px;
                }
            }
        }
    }
}

@media (max-width: 575px) {}
</style>