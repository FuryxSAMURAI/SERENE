<template>
    <section class="container__main-about-store">
        <div class="container__main-about-store-wrapper">
            <div class="container__main-about-store-wrapper-content">
                <h2 class="container__main-about-store-wrapper-content-title">Про магазин</h2>
                <p class="container__main-about-store-wrapper-content-text">
                    <strong>SERÈNE</strong> — це сучасний онлайн-магазин стильного одягу та аксесуарів для
                    чоловіків і жінок. Ми обираємо лише актуальні моделі, якісні матеріали та доступні ціни.
                </p>
                <p class="container__main-about-store-wrapper-content-text">
                    Замовлення доставляємо по всій Україні. Працюємо з понеділка по п’ятницю, з 10:00 до 18:00. У разі
                    потреби — легке повернення без зайвих питань.
                </p>
                <p class="container__main-about-store-wrapper-content-text">
                    Маєш запитання? Напиши нам в <strong>Instagram</strong> або в <strong>Дірект</strong> — ми завжди на
                    зв’язку.
                </p>
            </div>

            <div class="container__main-about-store-block">
                <div class="container__main-about-store-block-image">
                    <img src="/aboutStore/david-kristianto-x9LOGu51NnI-unsplash.jpg" alt="Про магазин SERENE" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.container__main-about-store {
    display: flex;
    justify-content: center;
    padding: 40px 0;

    &-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
        width: 100%;
        max-width: 1200px;

        &-content {
            margin: 0 auto;

            &-title {
                font-size: clamp(20px, 3vw, 32px);
                font-weight: 600;
                margin: 20px 0;
                color: #222;
            }

            &-text {
                font-size: clamp(14px, 2vw, 18px);
                line-height: 1.6;
                color: #333;
            }
        }
    }

    &-block {
        display: flex;
        align-items: center;
        justify-content: center;

        &-image {
            height: 400px;
            width: calc(100vw / 3);
            border-radius: 3px;
            overflow: hidden;

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }
    }
}

@media (max-width: 480px) {
    .container__main-about-store {
        flex-direction: column;
        align-items: center;
        padding: 20px 0;

        &-wrapper {
            flex-direction: column;
            gap: 20px;

            &-content {
                width: 100%;
                padding: 0 16px;

                &-title, &-text{
                    text-align: center;
                }
            }
        }

        &-block {
            height: auto;

            &-image {
                width: 100%;
                height: auto;

                img {
                    object-fit: contain;
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .container__main-about-store {
        &-wrapper {
            flex-direction: column;
            gap: 30px;

            &-content {
                width: 100%;
                padding: 0 24px;

                &-title{
                    text-align: center;
                }

                &-text{
                    text-align: center;
                }
            }
        }

        &-block {
            height: auto;

            &-image {
                width: 100%;
                height: auto;
            }
        }
    }
}

@media (max-width: 1024px) {
    .container__main-about-store {
        &-wrapper {
            &-content {
                &-title {}

                &-text {
                    font-size: clamp(12px, 2vw, 16px);
                    line-height: 1.6;
                    color: #333;
                }
            }
        }
    }
}
</style>