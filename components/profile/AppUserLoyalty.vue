<template>
    <section class="container__main-user-loyalty">
        <p class="container__main-user-loyalty-title">Зареєструйтеся, щоб отримати доступ до всіх переваг шопінгу з
            <b>SERÈNE</b>
        </p>
        <ul class="container__main-user-loyalty-lists">
            <li class="container__main-user-loyalty-lists-list">Зареєструйтесь — отримайте приємний бонус на перше
                замовлення!</li>
            <li class="container__main-user-loyalty-lists-list">Створи акаунт і купуй з вигодою: знижки, бонуси та
                доставка по всій Україні.</li>
            <li class="container__main-user-loyalty-lists-list">Тільки для зареєстрованих: бонус при реєстрації +
                швидкий доступ до акцій.</li>
            <li class="container__main-user-loyalty-lists-list">Реєстрація = знижка! Почни шопінг із приємного подарунка
                від SERENE.</li>
            <li class="container__main-user-loyalty-lists-list">З нами просто: зареєструйся, отримай бонус і користуйся
                легким поверненням товару.</li>
            <li class="container__main-user-loyalty-lists-list">Хочеш першочергові знижки, персональні пропозиції та
                бонуси? Реєструйся просто зараз!</li>
        </ul>
        <span class="line"></span>
        <p v-if="isLogin === false" class="ifLogin"><b>Вже зареєстровані?</b></p>
        <button class="container__main-user-loyalty-registry" @click="changeLogin(isLogin)">{{
            isLogin ? 'Зареєструватися' : 'Увійти' }}</button>
    </section>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        isLogin: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        changeLogin(isLogin) {
            this.$store.dispatch('profile/setLocalLoginVal', !isLogin);
        }
    }
}
</script>

<style scoped lang="scss">
.container__main-user-loyalty {
    width: 100%;
    height: 100%;
    max-width: 600px;
    padding: 80px 60px;
    background: #fbf8f8;

    &-title {
        font-size: 21px;
        line-height: 25px;
        color: #333;
        margin: 40px 0;
        width: 100%;
        max-width: 400px;
    }

    &-lists {
        margin-bottom: 40px;
        margin-left: 15px;
        width: 100%;
        max-width: 400px;

        &-list {
            list-style: circle;
            font-size: 14px;
            line-height: 18px;
            color: #333;
            margin-top: 10px;
        }
    }

    .line {
        width: 100%;

        &::before {
            content: " ";
            display: block;
            height: 1px;
            background-color: #efeded;
        }
    }

    .ifLogin {
        margin: 20px 0 0;
        color: #333;
        font-size: 14px;
        line-height: 18px;
    }

    &-registry {
        margin: 20px 0 0;
        height: 50px;
        width: 100%;
        max-width: 200px;
        background: transparent;
        border: 1px solid #333;
        color: #333;
        border-radius: 5px;
        transition: color 1s ease;

        &:hover {
            color: #898686;
        }
    }
}

@media (max-width:768px) {
    .container__main-user-loyalty {}
}
</style>