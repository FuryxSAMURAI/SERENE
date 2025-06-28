<template>
    <section class="container__main-loyalty">
        <div class="container__main-loyalty-block">
            <div class="container__main-loyalty-block-description">
                <div class="container__main-loyalty-block-description-title">
                    Даруємо 500 бонусів новим учасникам програми
                </div>
                <div class="container__main-loyalty-block-description-subtitle">
                    Реєструйтесь у Клубній програмі та отримайте бонус на перше замовлення товарів.
                </div>
            </div>
            <div class="container__main-loyalty-block-get">
                <a href="/user/profile">Отримати бонуси</a>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.container__main-loyalty {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    &-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding: 60px 20px;
        background-color: #111;
        transition: all .3s ease;

        &-description {
            &-title {
                color: #fff;
                font-size: clamp(18px, 2vw, 24px);
                line-height: 28px;
            }

            &-subtitle {
                margin-top: 10px;
                font-size: clamp(14px, 2vw, 18px);
                line-height: 18px;
                color: #898686;
            }
        }

        &-get {
            border-radius: 3px;
            height: 50px;
            width: 200px;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            a {
                color: #111;
                text-decoration: none;

            }
        }
    }
}

@media(max-width:768px) {
    .container__main-loyalty {
        &-block {
            display: block;
            padding: 0 20px 20px;
            &-get {
                margin-top: 20px;
                width: 100%;
            }
        }
    }
}
</style>