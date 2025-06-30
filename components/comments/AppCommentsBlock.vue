<template>
    <section class="container__main-comments">
        <div class="container__main-comments-title">Відгуки наших клієнтів</div>

        <div class="container__main-comments-carousel-wrapper">
            <!-- Ліва стрілка -->
            <button class="container__main-comments-carousel-arrow left" @click="prevSlide">
                <i class="fa-solid fa-arrow-left fa-lg" style="color: #000000;"></i>
            </button>

            <!-- Слайдер -->
            <div class="container__main-comments-carousel">
                <div class="container__main-comments-carousel-track-wrapper">
                    <div class="container__main-comments-carousel-track"
                        :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
                        <div class="container__main-comments-carousel-slide" v-for="(comment, index) in commentsLoop"
                            :key="index" ref="slides">
                            <div class="container__main-comments-carousel-slide-content">
                                <p class="container__main-comments-carousel-slide-text">"{{ comment.text }}"</p>
                                <p class="container__main-comments-carousel-slide-author">— {{ comment.author }}</p>
                                <p class="container__main-comments-carousel-slide-date">Дата: {{ comment.date }}</p>
                                <p class="container__main-comments-carousel-slide-rating">Оцінка: {{ comment.rating }} з
                                    5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Права стрілка -->
            <button class="container__main-comments-carousel-arrow right" @click="nextSlide">
                <i class="fa-solid fa-arrow-right fa-lg" style="color: #000000;"></i>
            </button>
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
            comments: [
                { author: 'Анна', text: 'Дуже якісний товар!', date: '2024-12-01', rating: 5 },
                { author: 'Олег', text: 'Швидка доставка.', date: '2025-01-14', rating: 5 },
                { author: 'Юлія', text: 'Колір трохи відрізняється.', date: '2025-02-09', rating: 4 },
                { author: 'Іван', text: 'Все сподобалось.', date: '2025-03-03', rating: 5 },
                { author: 'Наталія', text: 'Беру вже вдруге – супер!', date: '2025-03-19', rating: 5 },
            ],
        };
    },
    computed: {
        commentsLoop() {
            return [
                ...this.comments.slice(-this.visibleSlides),
                ...this.comments,
                ...this.comments.slice(0, this.visibleSlides),
            ];
        },
    },
    mounted() {
        if (typeof window !== 'undefined') {
            this.updateVisibleSlides();
            this.updateSlideWidth();
            this.setInitialPosition();
            window.addEventListener('resize', this.onResize);
            this.startAutoPlay();
        }
    },
    beforeDestroy() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.onResize);
        }
        clearInterval(this.interval);
    },
    methods: {
        onResize() {
            this.updateVisibleSlides();
            this.updateSlideWidth();
        },
        updateVisibleSlides() {
            const width = window.innerWidth;
            if (width < 320) this.visibleSlides = 1;
            else if (width < 568) this.visibleSlides = 2;
            else if (width < 768) this.visibleSlides = 3;
            else this.visibleSlides = 4;
        },
        updateSlideWidth() {
            this.$nextTick(() => {
                const slide = this.$refs.slides?.[0];
                this.slideWidth = slide ? slide.offsetWidth + 20 : 0; // +gap
            });
        },
        setInitialPosition() {
            this.currentIndex = this.visibleSlides;
        },
        nextSlide() {
            this.currentIndex++;
            if (this.currentIndex >= this.comments.length + this.visibleSlides) {
                this.resetPosition(true);
            }
        },
        prevSlide() {
            this.currentIndex--;
            if (this.currentIndex < this.visibleSlides) {
                this.resetPosition(false);
            }
        },
        resetPosition(toStart) {
            setTimeout(() => {
                this.currentIndex = toStart
                    ? this.visibleSlides
                    : this.comments.length + this.visibleSlides - 1;
            }, 500);
        },
        startAutoPlay() {
            this.interval = setInterval(this.nextSlide, 5000);
        },
    },
};
</script>

<style scoped lang="scss">
.container__main-comments {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    &-title {
        font-size: 24px;
        font-weight: 600;
        margin: 20px 0;
        text-align: center;
    }

    &-carousel-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    &-carousel {
        overflow: hidden;
        max-width: 1000px;

        &-track-wrapper {
            overflow: hidden;
            padding: 10px;
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
                font-size: clamp(12px, 2vw, 18px);
                margin-bottom: 10px;
                height: 125px;
            }

            &-author,
            &-date,
            &-rating {
                font-size: clamp(10px, 2vw, 16px);
                color: #555;
            }
        }

        &-arrow {
            background: #fff;
            border: none;
            border-radius: 50px;
            padding: 7px;
            cursor: pointer;
            z-index: 2;
        }
    }
}

@media (max-width: 568px) {
    .container__main-comments-carousel-slide {
        min-width: 60vw;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .container__main-comments-carousel-slide {
        min-width: 40vw;
    }
}
</style>
