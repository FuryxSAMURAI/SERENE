<template>
    <section class="container__main">
        <div class="container__main-block">
            <div class="container__main-block-category">
                <div class="container__main-block-category-blocks" v-if="getCategories.length">
                    <div class="container__main-block-category-blocks-wrapper"
                        v-for="(category, index) in getCategories" :key="index">
                        <div class="container__main-block-category-blocks-wrapper-img">
                            <img :src="category.image" :alt="category.name" />
                        </div>
                        <div class="container__main-block-category-blocks-wrapper-title">
                            {{ category.name }}
                        </div>
                    </div>
                </div>
                <p v-else>Завантаження або порожньо...</p>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    mounted() {
        this.$store.dispatch('category/fetchCategories');
    },
    computed: {
        ...mapGetters('category', ['getCategories']),
    },
}
</script>

<style scoped lang="scss">
.container__main {
    margin: 100px 50px;

    &-block {
        &-category {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;

            &-blocks {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                ;
                gap: 32px;

                &-wrapper {
                    transition: box-shadow .3s ease-in-out;

                    &:hover {
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                    }

                    &-img {
                        height: 250px;
                        width: 100%;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                    &-title {
                        padding: 20px;
                        font-size: 18px;
                        font-weight: 600;
                        color: #333;
                        text-transform: capitalize;
                    }
                }
            }
        }
    }
}
</style>