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
    &-block {
        height: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        background-color: #111;
        padding: 20px 100px;

        &-description {
            &-title {
                color: #fff;
                font-size: 24px;
                line-height: 28px;
            }

            &-subtitle {
                font-size: 14px;
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
</style>