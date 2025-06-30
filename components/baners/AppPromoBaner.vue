<template>
    <div class="container__main-promo-banner">
        <div class="container__main-promo-banner-block" v-for="(banner, index) in promoBanners" :key="index"
            v-show="currentIndex === index">
            <div class="container__main-promo-banner-block-description">
                <p class="container__main-promo-banner-block-description-title">
                    {{ banner.title }}
                </p>
                <p class="container__main-promo-banner-block-description-text">
                    {{ banner.text }}
                </p>
                <button class="container__main-promo-banner-block-description-button">{{ banner.cta }}</button>
            </div>
            <div class="container__main-promo-banner-block-images">
                <img :src="banner.image" :alt="banner.title">
            </div>
        </div>
        <div class="container__main-promo-banner-slider">
            <div class="container__main-promo-banner-slider-count"> {{ currentIndex + 1 }} / {{
                promoBanners.length }} </div>
            <button class="container__main-promo-banner-slider-prev" @click="prevSlide"><i
                    class="fa-solid fa-arrow-left fa-xl" style="color: #000000;"></i></button>
            <button class="container__main-promo-banner-slider-next" @click="nextSlide"><i
                    class="fa-solid fa-arrow-right fa-xl" style="color: #000000;"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            promoBanners: [
                {
                    title: '🚚 Безкоштовна доставка',
                    text: 'Зроби замовлення на суму від 1000 грн — і ми доставимо його безкоштовно по всій Україні. Жодних прихованих платежів!',
                    cta: 'До каталогу',
                    link: '/catalog',
                    image: '/promoBaner/depositphotos_188718524-stock-photo-smiling-delivery-man-in-blue.jpg',
                },
                {
                    title: '🔥 Знижки до -40% тільки до неділі',
                    text: 'Обирай товари зі знижками до -40%, поки не розкупили. Акція діє лише до кінця тижня!',
                    cta: 'Переглянути знижки',
                    link: '/sale',
                    image: '/promoBaner/discount_lkw.jpg',
                },
                {
                    title: '🛍️ Нове надходження — не пропусти!',
                    text: 'Оновлена колекція одягу та аксесуарів уже на сайті. Додай свіжості в свій гардероб!',
                    cta: 'До новинок',
                    link: '/new',
                    image: '/promoBaner/_viber_2022-07-20_09-39-49-698.jpg',
                },
                {
                    title: '🎁 Подарунок до кожного замовлення',
                    text: 'Отримай приємний бонус до кожного замовлення від 1500 грн. Подарунки, які дарують посмішку!',
                    cta: 'Обрати товари',
                    link: '/catalog',
                    image: '/promoBaner/podarok2.jpg',
                },
                {
                    title: '⏳ Лише 48 годин — вибрані товари зі знижкою',
                    text: 'Гарячі знижки на популярні моделі тільки сьогодні і завтра. Не зволікай!',
                    cta: 'Показати пропозиції',
                    link: '/limited',
                    image: '/promoBaner/shutterstock_93437077.jpg',
                },
                {
                    title: '📦 Фінальний розпродаж — мінус до 70%',
                    text: 'Останні розміри та моделі — зі знижками до -70%. Встигни придбати перш ніж вони зникнуть!',
                    cta: 'До розпродажу',
                    link: '/clearance',
                    image: '/promoBaner/sale-concept-black-background_23-2148313046.avif',
                },
                {
                    title: '💳 Оплата частинами — без комісій',
                    text: 'Купуй зараз — плати пізніше. Доступна оплата частинами через Monobank та Privat24 без жодних переплат.',
                    cta: 'Дізнатись більше',
                    link: '/payment-info',
                    image: '/promoBaner/sddefault.jpg'
                },
                {
                    title: '🎉 Знижка 5% за підписку',
                    text: 'Підпишись на наш Instagram або Telegram і отримай промокод на знижку 5%. Все просто!',
                    cta: 'Отримати промокод',
                    link: '/subscribe',
                    image: '/promoBaner/depositphotos_67558975-stock-photo-3d-5-percent.jpg',
                },
                {
                    title: '🏷️ Знижка при покупці 2+ товарів',
                    text: 'Купуй більше — отримуй додаткову знижку автоматично в кошику при купівлі 2+ товарів.',
                    cta: 'Скомбінувати товари',
                    link: '/catalog',
                    image: '/promoBaner/discount_lkw.jpg',
                },
                {
                    title: '✨ Твій стиль — твоя впевненість',
                    text: 'Онови гардероб разом з нами. Мінімалістичний дизайн, універсальні речі та вигідні ціни — це твій вибір.',
                    cta: 'Почати шопінг',
                    link: '/',
                    image: '/promoBaner/Iak-nazvaty-mahazyn-odiahu.jpg',
                },
            ],
            currentIndex: 0,
            timer: null,
        }
    },
    mounted() {
        this.startRotation()
    },
    methods: {
        startRotation() {
            this.timer = setInterval(() => {
                this.nextSlide()
            }, 10000)
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.promoBanners.length) % this.promoBanners.length
            this.timer = null
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.promoBanners.length
            this.timer = null
        }
    },
}
</script>

<style scoped lang="scss">
.container__main-promo-banner {
    width: 100%;
    max-width: 1200px;
    margin: 60px auto 0;

    &-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;

        &-description {
            display: flex;
            flex-direction: column;
            gap: 20px;

            &-title {
                width: 80%;
                font-size: clamp(24px, 2vw, 32px);
                font-weight: 600;
                text-align: left;
            }

            &-text {
                width: 80%;
                font-size: clamp(14px, 2vw, 22px);
                font-weight: 400;
                text-align: left;
            }

            &-button {
                margin-top: 40px;
                height: 60px;
                font-size: clamp(10px, 2vw, 14px);
                width: 300px;
                border: none;
                background: #333;
                color: #fff;
                transition: all .3s ease;
            }
        }

        &-images {
            height: 500px;
            min-width: 600px;
            transition: all .3s ease;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }

    &-slider {
        display: flex;
        margin-top: 40px;

        &-count {
            max-width: 70px;
            margin-right: 20px;
            font-size: 18px;
            line-height: 22px;
            font-weight: 500;
        }

        &-prev,
        &-next {
            background: transparent;
            border: none;
            margin-right: 20px;
        }
    }
}

@media(max-width: 1260px) {
    .container__main-promo-banner {
        padding: 0 20px;

        &-block {
            &-description {
                &-button {
                    height: 60px;
                    width: 200px;
                }
            }

            &-images {
                height: 400px;
                min-width: 500px;
            }
        }
    }
}

@media(max-width: 768px) {
    .container__main-promo-banner {
        padding: 0 20px;

        &-block {
            display: flex;
            flex-direction: column-reverse;

            &-description {
                &-title, &-text {
                    width: 80%;
                }

                &-button {
                    margin-top: 0;
                    height: 60px;
                    width: 50%;
                }
            }

            &-images {
                height: 400px;
                width: 100vw;
            }
        }
    }
}
@media (max-width: 576px){
    .container__main-promo-banner {
        padding: 0 20px;

        &-block {
            display: flex;
            flex-direction: column-reverse;

            &-description {
                &-title, &-text {
                    width: 100%;
                }

                &-button {
                    margin-top: 0;
                    height: 60px;
                    width: 100%;
                }
            }

            &-images {
                height: 400px;
                min-width: 100vw;
            }
        }
    }
}
</style>