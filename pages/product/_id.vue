<template>
    <section class="container__main-product">
        <div class="container__main-product-wrapper">
            <div class="container__main-product-images">
                <div v-if="!isMobile" class="container__main-product-images-grid">
                    <img v-for="(image, index) in product.images" :key="index" :src="image" :alt="product.slug" />
                </div>

                <div v-else class="container__main-product-images-slider">
                    <button @click="prevSlide" class="container__main-product-slider-btn left">‹</button>
                    <img :src="product.images[currentSlide]" :alt="product.slug" />
                    <button @click="nextSlide" class="container__main-product-slider-btn right">›</button>
                </div>
            </div>

            <div class="container__main-product-info">
                <h1 class="container__main-product-title">{{ product.title }}</h1>
                <p class="container__main-product-slug">{{ product.slug }}</p>
                <p class="container__main-product-desc"><b>Опис:</b> {{ product.description }}</p>
                <div class="container__main-product-bottom">
                    <div class="container__main-product-price">{{ product.price }} $</div>
                    <div class="container__main-product-buttons">
                        <AppAddFavorite :setFavorites="product" />
                        <AppAddCart :setCart="product" />
                    </div>
                </div>
            </div>
        </div>
        <AppReviewedProducts />
        <AppRecomended />
    </section>
</template>

<script>
import AppAddCart from '~/components/buttons/AppAddCart.vue'
import AppAddFavorite from '~/components/buttons/AppAddFavorite.vue'
import AppReviewedProducts from '../../components/reviewed/AppReviewedProducts.vue'
import AppRecomended from '../../components/recomended/AppRecomended.vue'

export default {
    async asyncData({ params, $axios }) {
        const id = params.id
        const product = await $axios.$get(`https://api.escuelajs.co/api/v1/products/${id}`)
        return { product }
    },
    components: {
        AppAddCart,
        AppAddFavorite,
        AppReviewedProducts,
        AppRecomended,
    },
    data() {
        return {
            isMobile: false,
            currentSlide: 0
        }
    },
    mounted() {
        this.checkMobile()
        window.addEventListener('resize', this.checkMobile)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkMobile)
    },
    methods: {
        checkMobile() {
            if(window.innerHeight <= 768){this.isMobile = true}else{this.isMobile = false}
        },
        nextSlide() {
            const total = this.product.images.length
            this.currentSlide = (this.currentSlide + 1) % total
        },
        prevSlide() {
            const total = this.product.images.length
            this.currentSlide = (this.currentSlide - 1 + total) % total
        }
    }
}
</script>

<style scoped lang="scss">
.container__main-product {
    max-width: 1200px;
    margin: 0 auto;
    padding: 65px 20px;

    &-wrapper {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 40px;
        flex-wrap: nowrap;
    }

    &-images {
        flex: 1;
        max-width: 50%;

        &-grid {
            display: grid;
            grid-template-rows: repeat(2, auto);
            grid-gap: 20px;

            img {
                width: 100%;
                object-fit: cover;
            }
        }

        &-slider {
            position: relative;

            img {
                width: 100%;
                object-fit: cover;
            }
        }
    }

    &-slider-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 24px;
        padding: 8px 14px;
        border: none;
        cursor: pointer;
        border-radius: 4px;

        &.left {
            left: 10px;
        }

        &.right {
            right: 10px;
        }
    }

    &-info {
        position: sticky;
        top: 0;
        left: 0;
        flex: 1;
        min-width: 300px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &-title {
        font-size: 24px;
        font-weight: 600;
    }

    &-slug {
        font-size: 16px;
        color: #777;
    }

    &-desc {
        font-size: 16px;
        line-height: 1.6;
    }

    &-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    &-price {
        font-size: 18px;
        font-weight: 600;
    }

    &-buttons {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
    }
}

@media (max-width: 768px) {
    .container__main-product {
        &-wrapper {
            flex-direction: column;
        }

        &-images {
            max-width: 100%;

            &-grid {
                display: none;
            }

            &-slider {
                display: block;
            }
        }

        &-info {
            width: 100%;
        }

        &-title {
            font-size: 20px;
        }

        &-slug,
        &-desc {
            font-size: 14px;
        }

        &-bottom {
            flex-direction: column;
            align-items: flex-start;
        }

        &-price {
            font-size: 16px;
        }

        &-buttons {
            justify-content: flex-start;
            width: 100%;
        }
    }
}
</style>
