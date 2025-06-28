<template>
    <section class="container__main-comments">
        <div class="container__main-comments-title">Відгуки наших клієнтів</div>

        <div class="container__main-comments-carousel">
            <button class="container__main-comments-carousel-arrow left" @click="prevSlide">&#10094;</button>

            <div class="container__main-comments-carousel-track-wrapper">
                <div class="container__main-comments-carousel-track"
                    :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
                    <div class="container__main-comments-carousel-slide" v-for="(comment, index) in commentsLoop"
                        :key="index" ref="slides">
                        <div class="container__main-comments-carousel-slide-content">
                            <p class="container__main-comments-carousel-slide-text">"{{ comment.text }}"</p>
                            <p class="container__main-comments-carousel-slide-author">— {{ comment.author }}</p>
                            <p class="container__main-comments-carousel-slide-date">Дата: {{ comment.date }}</p>
                            <p class="container__main-comments-carousel-slide-rating">Оцінка: {{ comment.rating }} з 5
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <button class="container__main-comments-carousel-arrow right" @click="nextSlide">&#10095;</button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            slideWidth: 0,
            interval: null,
            visibleSlides: 4,
            comments: [{ author: 'Анна', text: 'Дуже якісний товар! Матеріал щільний, пошито акуратно. Доставили швидше, ніж обіцяли. Буду замовляти ще.', date: '2024-12-01', rating: 5 }, { author: 'Олег', text: 'Швидка доставка і гарне пакування. Все прийшло цілим, товар відповідає опису. Рекомендую.', date: '2025-01-14', rating: 5 }, { author: 'Юлія', text: 'Колір трохи відрізняється від фото, але загалом все чудово. Розмір підійшов, якість хороша.', date: '2025-02-09', rating: 4 }, { author: 'Іван', text: 'Все сподобалось, дякую! Замовлення оформив за хвилину, товар приїхав вже через два дні.', date: '2025-03-03', rating: 5 }, { author: 'Наталія', text: 'Беру вже вдруге – супер! Дуже задоволена сервісом і швидкістю доставки.', date: '2025-03-19', rating: 5 }, { author: 'Марія', text: 'Тканина приємна до тіла, ніде не тисне. Розмір повністю відповідає сітці. Все на вищому рівні.', date: '2025-04-02', rating: 5 }, { author: 'Віктор', text: 'Замовлення було оброблено миттєво. Окрема подяка за приємне спілкування з менеджером.', date: '2025-04-15', rating: 4 }, { author: 'Олеся', text: 'Замовила як подарунок мамі — вона в захваті. Якість набагато краща, ніж очікувала за такі гроші.', date: '2025-04-28', rating: 5 }, { author: 'Тарас', text: 'Доставили на наступний день! Дуже здивований таким сервісом. Усе чітко.', date: '2025-05-02', rating: 5 }, { author: 'Ірина', text: 'Все підійшло. Упаковка міцна, товар без дефектів. Видно, що піклуються про клієнта.', date: '2025-05-10', rating: 5 }, { author: 'Максим', text: 'Залишився дуже задоволений покупкою. Магазин працює швидко та якісно. Так тримати!', date: '2025-05-13', rating: 5 }, { author: 'Оксана', text: 'Товар відповідає фото. Сидить чудово. Доставили вчасно, приємна упаковка.', date: '2025-05-18', rating: 5 }, { author: 'Дмитро', text: 'Брав для себе, але вже й дружина хоче такий самий. Гарна якість, зручна посадка.', date: '2025-05-21', rating: 5 }, { author: 'Катерина', text: 'Тканина не просвічується, якість на висоті. Порадувало, що можна повернути без проблем.', date: '2025-05-23', rating: 4 }, { author: 'Руслан', text: 'Сумнівався перед покупкою, але все прийшло ідеальним. Дякую за чесність!', date: '2025-05-25', rating: 5 }, { author: 'Лілія', text: 'Упаковка була настільки красива, що навіть шкода було розпаковувати. Рекомендую.', date: '2025-05-27', rating: 5 }, { author: 'Сергій', text: 'Ціни приємні, а сервіс ще кращий. Все зрозуміло, прозоро і швидко.', date: '2025-05-29', rating: 5 }, { author: 'Тетяна', text: 'Замовила одразу кілька речей — усе підійшло. Дуже зручно, що є консультація в чаті.', date: '2025-06-01', rating: 5 }, { author: 'Андрій', text: 'Товар отримав — все відповідає опису. Навіть більше — якість приємно здивувала.', date: '2025-06-03', rating: 5 }, { author: 'Світлана', text: 'Якість супер, доставка швидка, все добре упаковано. Вже порекомендувала подрузі.', date: '2025-06-04', rating: 5 },],
        };
    },
    computed: {
        commentsLoop() {
            return [...this.comments, ...this.comments];
        },
    },
    mounted() {
        this.updateVisibleSlides();
        this.updateSlideWidth();
        window.addEventListener('resize', this.updateVisibleSlides);
        window.addEventListener('resize', this.updateSlideWidth);
        this.startAutoPlay();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateVisibleSlides);
        window.removeEventListener('resize', this.updateSlideWidth);
        clearInterval(this.interval);
    },
    methods: {
        updateVisibleSlides() {
            if (window.innerWidth < 600) {
                this.visibleSlides = 1;
            } else if (window.innerWidth < 900) {
                this.visibleSlides = 2;
            } else {
                this.visibleSlides = 4;
            }
        },
        updateSlideWidth() {
            const slide = this.$refs.slides[0];
            this.slideWidth = slide ? slide.offsetWidth + 20 : 0; // +gap
        },
        nextSlide() {
            this.currentIndex++;
            if (this.currentIndex >= this.comments.length) {
                this.currentIndex = 0; // infinite loop
            }
        },
        prevSlide() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.comments.length - 1;
            } else {
                this.currentIndex--;
            }
        },
        startAutoPlay() {
            this.interval = setInterval(() => {
                this.nextSlide();
            }, 5000);
        },
    },
};
</script>

<style scoped lang="scss">
.container__main-comments {
    max-width: 1200px;
    margin: 0 auto;

    &-title {
        font-size: 24px;
        font-weight: 600;
        margin: 20px 0;
        text-align: center;
    }

    &-carousel {
        position: relative;
        overflow: hidden;

        &-track-wrapper {
            overflow: hidden;
        }

        &-track {
            display: flex;
            transition: transform 0.5s ease;
            gap: 20px;
        }

        &-slide {
            flex: 0 0 auto;
            width: 250px;

            &-content {
                background: #fff;
                border-radius: 12px;
                padding: 20px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            }

            &-text {
                font-size: 16px;
                margin-bottom: 10px;
                height: 100px;
            }

            &-author,
            &-date,
            &-rating {
                font-size: 14px;
                color: #555;
            }
        }

        &-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: #fff;
            border: none;
            font-size: 24px;
            cursor: pointer;
            z-index: 2;

            &.left {
                left: 10px;
            }

            &.right {
                right: 10px;
            }
        }
    }
}

/* Адаптивність */
@media (max-width: 600px) {
    .container__main-comments-carousel-slide {
        width: 80vw;
    }
}

@media (max-width: 900px) {
    .container__main-comments-carousel-slide {
        width: 45vw;
    }
}
</style>
