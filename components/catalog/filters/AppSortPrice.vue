<template>
    <section class="container__main-sort-block">
        <div class="container__main-sort-block-title" @click="toggleDropdown">
            Сортування ціни: <span :class="{ rotated: isOpen }">▲</span>
        </div>

        <div class="container__main-sort-block-sort" v-show="isOpen">
            <div class="container__main-sort-block-sort-from">
                <label for="priceFrom">Від:</label>
                <input type="number" id="priceFrom" placeholder="Від ..." v-model.number="priceMin" />
            </div>
            <span>-</span>
            <div class="container__main-sort-block-sort-to">
                <label for="priceTo">До:</label>
                <input type="number" id="priceTo" placeholder="До ..." v-model.number="priceMax" />
            </div>
            <span>USD</span>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            priceMin: null,
            priceMax: null,
            isOpen: false,
        };
    },
    watch: {
        priceMin: 'emitPrice',
        priceMax: 'emitPrice',
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        emitPrice() {
            this.$emit('getPriceRange', { min: this.priceMin, max: this.priceMax });
        },
    },
};
</script>

<style scoped lang="scss">
.container__main-sort-block {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;

    &-title {
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        user-select: none;

        span {
            margin-left: 10px;
            transition: transform 0.5s ease;
        }

        .rotated {
            transform: rotate(180deg);
        }
    }

    &-sort {
        margin: 10px 0;
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;

        &-from,
        &-to {
            position: relative;

            label {
                position: absolute;
                top: -5px;
                left: 5px;
                padding: 0 5px;
                font-size: 8px;
                color: #333;
                background-color: #fff;
                font-weight: 600;
            }

            input {
                user-select: none;
                border: 1px solid #e9e9e9;
                border-radius: 3px;
                height: 30px;
                width: 90px;
                padding: 0 10px;
                font-size: 12px;
                transition: all 0.3s ease;

                &:focus,
                &:active,
                &:not(:placeholder-shown) {
                    outline: none;
                    border: 1px solid #000;
                }
            }
        }
    }
}
</style>
