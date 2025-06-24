    <template>
        <section class="container__main-reviewed">
            <div class="container__main-reviewed-title">Рекомендовані товари</div>
            <div class="container__main-reviewed-blocks">
                <div v-if="getRecommended.length === 0" class="container__main-reviewed-blocks-null">
                    <p>Нажаль рекомендовані товари відстуні.</p>
                </div>
                <div v-else class="container__main-reviewed-blocks-block" v-for="recommended in getRecommended"
                    :key="recommended.id">
                    <div class="container__main-reviewed-blocks-block-img">
                        <nuxt-link :to="`/product/${recommended.id}`" @click.native="saveToReviewed(recommended)">
                            <img :src="recommended.images[0]" :alt="recommended.slug">
                        </nuxt-link>
                    </div>
                    <div class="container__main-reviewed-blocks-block-title">{{ recommended.title }}</div>
                    <div class="container__main-reviewed-blocks-block-option">
                        <div class="container__main-reviewed-blocks-block-option-price">{{ recommended.price }} $</div>
                        <div class="container__main-reviewed-blocks-block-option-buttons">
                            <AppAddFavorite />
                            <AppAddCart />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </template>

<script>
import AppAddCart from '~/components/buttons/AppAddCart'
import AppAddFavorite from '../buttons/AppAddFavorite.vue'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {

        }
    },
    components: {
        AppAddCart,
        AppAddFavorite,
    },
    computed: {
        ...mapGetters('recommended', ['getRecommended'])
    },
    mounted() {
        this.$store.dispatch('recommended/getRecommendedFromLocal')
    },
    methods: {
        saveToReviewed(product) {
            this.$store.commit('reviewed/setReviewed', product)
        }
    }
}
</script>

<style scoped lang="scss">
.container__main-reviewed {
    &-title {
        font-size: 24px;
        line-height: 28px;
        font-weight: 600;
        margin: 20px 0;
    }

    &-blocks {
        display: flex;
        gap: 20px;

        &-block {
            width: 100%;
            max-width: 250px;

            &-img {
                height: 270px;
                width: 100%;

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }

            &-title {
                height: 50px;
                margin: 10px 0;
                font-size: 18px;
                line-height: 22px;
                font-weight: 500;
            }

            &-option {
                margin: 10px 0;
                display: flex;
                align-items: center;
                justify-content: space-between;

                &-price {
                    font-size: 18px;
                    line-height: 24px;
                    font-weight: 500;
                }

                &-buttons {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
            }
        }

        &-null {
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
        }
    }
}
</style>