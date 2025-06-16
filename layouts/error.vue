<template>
    <div class="container__main-error">
        <div class="container__main-error-content">
            <h1 class="container__main-error-code">{{ error?.statusCode || 'Помилка' }}</h1>
            <p class="container__main-error-title">Щось пішло не так</p>
            <p class="container__main-error-text">
                {{ error?.message || 'Сторінку не знайдено або виникла помилка на сервері.' }}
            </p>
            <nuxt-link to="/" class="container__main-error-button">На головну</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['error'],
}
</script>


<style scoped lang="scss">
.container__main-error {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    background: #fafafa;

    &-content {
        max-width: 500px;
        padding: 40px 20px;
    }

    &-code {
        font-size: 96px;
        font-weight: bold;
        color: #e0e0e0;
        margin-bottom: 10px;
    }

    &-title {
        font-size: 26px;
        font-weight: 600;
        margin-bottom: 10px;
        color: #333;
    }

    &-text {
        font-size: 16px;
        color: #666;
        margin-bottom: 30px;
    }

    &-button {
        display: inline-block;
        padding: 12px 24px;
        background: #111;
        color: #fff;
        text-decoration: none;
        border-radius: 6px;
        transition: background 0.3s ease;

        &:hover {
            background: #333;
        }
    }
}
</style>
