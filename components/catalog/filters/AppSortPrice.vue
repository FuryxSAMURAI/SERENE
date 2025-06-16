<template>
    <section class="container__main-sort-block">
        <p class="container__main-sort-block-title">Сортування ціни:</p>
        <div class="container__main-sort-block-sort">
            <div class="container__main-sort-block-sort-from">
                <label for="priceFrom">Від:</label>
                <input type="text" id="priceFrom" placeholder="Від ..." v-model.number="priceMin" />
            </div>
            <span>-</span>
            <div class="container__main-sort-block-sort-to">
                <label for="priceTo">До:</label>
                <input type="text" id="priceTo" placeholder="До ..." v-model.number="priceMax" />
            </div>
            <span> USD.</span>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            priceMin: 0,
            priceMax: 0,
        }
    },
    watch: {
        priceMin() {
            this.emitPrice()
        },
        priceMax() {
            this.emitPrice()
        },
    },
    methods: {
        emitPrice() {
            this.$emit('getPriceRange', this.priceMin, this.priceMax)
        }
    }
}
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
    }

    &-sort {
        margin: 20px 0;
        display: flex;
        align-items: center;
        gap: 10px;

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
                text-transform: uppercase;
                border: 1px solid #e9e9e9;
                border-radius: 3px;
                height: 30px;
                width: 90px;
                padding: 0 10px;
                font-size: 12px;
                transition: all .3s ease;

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