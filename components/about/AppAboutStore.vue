<template>
    <section class="container__main-about-store">
        <div class="container__main-about-store-content">
            <div class="container__main-about-store-content-title">Про магазин</div>
            <p class="container__main-about-store-content-text">
                <strong>SERÈNE</strong> — це сучасний онлайн-магазин стильного одягу та аксесуарів для
                чоловіків і жінок. Ми обираємо лише актуальні моделі, якісні матеріали та доступні ціни.
            </p>
            <p class="container__main-about-store-content-text">
                Замовлення доставляємо по всій Україні. Працюємо з понеділка по п’ятницю, з 10:00 до 18:00. У разі
                потреби — легке повернення без зайвих питань.
            </p>
            <p class="container__main-about-store-content-text">
                Маєш запитання? Напиши нам в <strong>Instagram</strong> або в <strong>Дірект</strong> — ми завжди на
                зв’язку.
            </p>
        </div>
        <div class="container__main-about-store-image">
            <img src="/aboutStore/david-kristianto-x9LOGu51NnI-unsplash.jpg" alt="Про магазин SERENE" />
        </div>
    </section>
</template>

<style scoped lang="scss">
.container__main-about-store {
    padding: 40px 0;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 20px;
    &-content{
        width: 50%;
        height: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        &-title{
            width: 85%;
            font-weight: 700;
            font-size: clamp(24px, 2vw, 28px);
        }
        &-text{
            width: 85%;
            font-weight: 400;
            font-size: clamp(12px, 2vw, 18px);
        }
    }
    &-image{
        height: auto;
        width: 50%;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}

@media (max-width: 1260px){
    .container__main-about-store {
        padding: 0 20px;
    }
}
@media (max-width: 768px){
    .container__main-about-store {
        display: block;
        &-content{
            padding: 0 20px;
            width: 100%;
            margin: 0 0 20px;
            &-title, &-text{
                width: 100%;
            }
        }
        &-image{
            min-width: 100vw;
        }
    }
}
</style>