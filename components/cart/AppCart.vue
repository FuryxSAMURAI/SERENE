<template>
    <section class="container__main-cart-block">
        <div class="container__main-cart-block-header">
            <div class="container__main-cart-block-header-title">Кошик товарів:</div>
            <div>{{ getCart.length }} <span v-if="getCart.length == 1">товар</span><span v-else>товарів</span>
            </div>
        </div>
        <span class="container__main-cart-block-content-block-hr" v-if="getCart.length != 1"></span>
        <div class="container__main-cart-block-content">
            <div class="container__main-cart-block-content-block" v-for="cart in getCart" :key="cart.id">
                <div class="container__main-cart-block-content-block-wrapper">
                    <div class="container__main-cart-block-content-block-wrapper-images">
                        <img :src="cart.images" :alt="cart.title">
                    </div>
                    <div class="container__main-cart-block-content-block-wrapper-description">
                        <div class="container__main-cart-block-content-block-wrapper-description-product">
                            <div class="container__main-cart-block-content-block-wrapper-description-product-slug">
                                {{ cart.slug }}</div>
                            <div class="container__main-cart-block-content-block-wrapper-description-product-title">
                                {{ cart.title }}</div>

                        </div>
                        <div class="container__main-cart-block-content-block-wrapper-description-option">
                            <div class="container__main-cart-block-content-block-wrapper-description-option-block">
                                <div
                                    class="container__main-cart-block-content-block-wrapper-description-option-block-price">
                                    {{ cart.price }} $
                                </div>
                                <div
                                    class="container__main-cart-block-content-block-wrapper-description-option-block-quantity">
                                    {{ cart.qty }}
                                    <span v-if="cart.qty == 1">товар</span><span v-else>товарів</span>
                                </div>
                            </div>
                            <div class="container__main-cart-block-content-block-wrapper-description-option-buttons">
                                <button @click="setToFavorites(cart)">Перемістити в обране</button><span></span>
                                <button @click="deleteItem(cart)">Видалити</button>
                            </div>
                        </div>
                    </div>
                </div>
                <span class="container__main-cart-block-content-block-hr" v-if="getCart.length != 1"></span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        getCart: {
            type: Array,
            required: true
        }
    },
    mounted() {
        this.$store.dispatch('cart/loadCartFromLocalStorage')
        this.$store.dispatch('cart/loadCartCount')
    },
    methods: {
        deleteItem(val) {
            this.$store.commit('cart/deleteItem', val)
            this.$store.dispatch('cart/loadCartCount')
        },
        setToFavorites(val) {
            this.$store.commit('favorites/setFavorites', val)
            this.$store.dispatch('favorites/loadFavoritesCount')
        }
    }
}
</script>

<style scoped lang="scss">
.container__main-cart-block {
    width: calc(100vw/1.5);
    margin: 40px 0;
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

                                &:hover {
                                    cursor: pointer;
                                    color: #444;
                                }
                            }

                            span {
                                content: "";
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
    .container__main-cart-block {
        width: 100%;
    }
    .container__main-cart-block-content-block-wrapper-description{
        display: block;
    }
}

@media (max-width: 768px) {
    .layout__main{
        padding: 0;
    }
    .container__main-cart-block-header {
        &-title {
            font-size: 18px;
        }

        &-counter {
            font-size: 12px;
        }
    }

    .container__main-cart-block-content-block-wrapper-description {
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