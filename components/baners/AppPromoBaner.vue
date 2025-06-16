<template>
    <div class="container__main-promo-baner">
        <div class="container__main-promo-baner-blocks" v-for="(baner, index) in promoBanners" :key="index" v-show="currentIndex === index">
            <div class="container__main-promo-baner-blocks-descs">
                <div class="container__main-promo-baner-blocks-descs-header"></div>
                <div class="container__main-promo-baner-blocks-descs-main">
                    <p class="container__main-promo-baner-blocks-descs-main-title">
                        {{ baner.title }}
                    </p>
                    <p class="container__main-promo-baner-blocks-descs-main-text">
                        {{ baner.text }}
                    </p>
                    <button>{{ baner.cta }}</button>
                </div>
                <div class="container__main-promo-baner-blocks-descs-footer">
                    <button class="container__main-promo-baner-blocks-descs-footer-slide-prev" @click="prevSlide"><i class="fa-solid fa-arrow-left fa-lg" style="color: #000000;"></i></button><div class="container__main-promo-baner-blocks-descs-footer-slider"> {{ currentIndex+1 }} / {{ promoBanners.length }} </div><button class="container__main-promo-baner-blocks-descs-footer-slide-next" @click="nextSlide"><i class="fa-solid fa-arrow-right fa-lg" style="color: #000000;"></i></button>
                </div>
            </div>
            <div class="container__main-promo-baner-blocks-images">
                <img :src="baner.image" :alt="baner.title">
            </div>
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
    mounted(){
        this.startRotation()   
    },
    methods:{
        startRotation(){
            this.timer = setInterval(()=>{
                this.nextSlide()
            },10000)
        },
        prevSlide(){
            this.currentIndex = (this.currentIndex - 1 + this.promoBanners.length) % this.promoBanners.length
            this.timer = null
        },
        nextSlide(){
            this.currentIndex = (this.currentIndex + 1) % this.promoBanners.length
            this.timer = null
        }
    },
}
</script>

<style scoped lang="scss">
.container__main-promo-baner{
    &-blocks{
        display: flex;
        justify-content: center;
        gap: 50px;
        &-descs{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 550px;
            width: calc(100vw/2.5);
            &-main{
                &-title{
                    font-size: 28px;
                    font-weight: bold;
                    height: 80px;
                    width: calc(100%/1.5);
                    margin: 20px 0;
                }
                &-text{
                    font-size: 24px;
                    width: calc(100%/1.5);
                    height: 120px;
                    margin: 20px 0;
                }
                button{
                    background-color: #333;
                    border: none;
                    color: #fff;
                    height: 50px;
                    width: 200px;
                }
            }
            &-footer{
                display: flex;
                &-slider{
                    // margin: 10px 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100px;
                    font-size: 16px;  
                }
                &-slide{
                    &-prev, &-next{
                        padding: 10px;
                        border: none;
                        background-color: transparent;
                    }
                }
            }
        }
        &-images{
            height: 550px;
            width: calc(100vw/2.5);
            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>