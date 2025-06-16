<template>
    <section class="container__main-checkout">
        <div class="container__main-checkout-title">Ваше замовлення</div>
        <div class="container__main-checkout-content">
            <div class="container__main-checkout-content-title">
                <div class="container__main-checkout-content-title-name">Сума замовлення</div>
                <div class="container__main-checkout-content-title-price">{{ getTotal }} $</div>
            </div>
            <div class="container__main-checkout-content-promo">
                <div class="container__main-checkout-content-promo-title">Маєте промокод?</div>
                <div class="container__main-checkout-content-promo-block">
                    <label for="promo">
                        <input type="text" id="promo" placeholder="Промокод"><button>Застосувати</button>
                    </label>
                </div>
            </div>
            <span class="container__main-checkout-content-hr"></span>
            <div class="container__main-checkout-content-checkout">
                <div class="container__main-checkout-content-checkout-title">Всього</div>
                <div class="container__main-checkout-content-checkout-price">{{ getTotal }} $</div>
            </div>
            <div class="container__main-checkout-content-pay"><button>Оформити замовлення</button></div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        getTotal: {
            type: Number,
            required: true
        }
    },
}
</script>

<style scoped lang="scss">
.container__main-checkout {
    padding: 24px 48px 32px;
    margin: 40px 0;
    width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);


    &-title {
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 24px;
        color: #333;
    }

    &-content {
        &-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;

            &-name,
            &-price {
                font-size: 14px;
                line-height: 18px;
                color: #333;
            }
        }

        &-promo {
            margin-bottom: 16px;

            &-title {
                font-size: 14px;
                line-height: 18px;
                color: #333;
            }

            &-block {
                gap: 1px;
                position: relative;

                input {
                    width: 100%;
                    border-radius: 3px;
                    user-select: none;
                    text-transform: uppercase;
                    background-color: #fbf8f8;
                    border: none;
                    height: 40px;
                    padding: 0 105px 0 10px;
                    font-size: 14px;
                    transition: all .3s ease;

                    &:focus,
                    &:active,
                    &:not(:placeholder-shown) {
                        outline: none;
                    }
                }

                button {
                    position: absolute;
                    right: 1.5px;
                    top: 1.5px;
                    background-color: #333;
                    color: #fff;
                    height: 37px;
                    border: none;
                    border-radius: 2px;
                    width: 100px;
                    font-size: 12px;
                    transition: all 1s ease;

                    &:hover {
                        cursor: pointer;
                        color: #898686;
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

        &-checkout {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 32px;

            &-title,
            &-price {
                font-size: 16px;
                line-height: 20px;
                font-weight: 700;
                color: #333;
            }
        }

        &-pay {
            button {
                background-color: #333;
                color: #fff;
                height: 50px;
                border: none;
                border-radius: 3px;
                width: 100%;
                font-size: 14px;
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
</style>