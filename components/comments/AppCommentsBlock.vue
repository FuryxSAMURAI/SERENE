<template>
    <section class="container__main-comments">

        <div class="container__main-comments-carousel">
            <div class="container__main-comments-carousel-card" v-for="(comment, index) in visibleComments"
                :key="index">
                <p class="container__main-comments-carousel-text">"{{ comment.text }}"</p>
                <p class="container__main-comments-carousel-author">— {{ comment.author }}</p>
                <p class="container__main-comments-carousel-author">Дата: {{ comment.date }}</p>
                <p class="container__main-comments-carousel-author">Оцінка: {{ comment.rating }} з 5</p>
            </div>
        </div>

        <div class="container__main-comments-slider">
            <button class="container__main-comments-slider-option" @click="scrollLeft" :disabled="currentIndex === 0">
                <i class="fa-solid fa-arrow-left fa-sm" style="color: #000000;"></i>
            </button>
            <div class="container__main-comments-slider-counter">
                {{ currentIndex + 1 }}–{{ currentIndex + visibleCount }} з {{ comments.length }}
            </div>
            <button class="container__main-comments-slider-option" @click="scrollRight"
                :disabled="currentIndex + visibleCount >= comments.length">
                <i class="fa-solid fa-arrow-right fa-sm" style="color: #000000;"></i>
            </button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            visibleCount: 4,
            comments: [
                { author: 'Анна', text: 'Дуже якісний товар! Матеріал щільний, пошито акуратно. Доставили швидше, ніж обіцяли. Буду замовляти ще.', date: '2024-12-01', rating: 5 },
                { author: 'Олег', text: 'Швидка доставка і гарне пакування. Все прийшло цілим, товар відповідає опису. Рекомендую.', date: '2025-01-14', rating: 5 },
                { author: 'Юлія', text: 'Колір трохи відрізняється від фото, але загалом все чудово. Розмір підійшов, якість хороша.', date: '2025-02-09', rating: 4 },
                { author: 'Іван', text: 'Все сподобалось, дякую! Замовлення оформив за хвилину, товар приїхав вже через два дні.', date: '2025-03-03', rating: 5 },
                { author: 'Наталія', text: 'Беру вже вдруге – супер! Дуже задоволена сервісом і швидкістю доставки.', date: '2025-03-19', rating: 5 },
                { author: 'Марія', text: 'Тканина приємна до тіла, ніде не тисне. Розмір повністю відповідає сітці. Все на вищому рівні.', date: '2025-04-02', rating: 5 },
                { author: 'Віктор', text: 'Замовлення було оброблено миттєво. Окрема подяка за приємне спілкування з менеджером.', date: '2025-04-15', rating: 4 },
                { author: 'Олеся', text: 'Замовила як подарунок мамі — вона в захваті. Якість набагато краща, ніж очікувала за такі гроші.', date: '2025-04-28', rating: 5 },
                { author: 'Тарас', text: 'Доставили на наступний день! Дуже здивований таким сервісом. Усе чітко.', date: '2025-05-02', rating: 5 },
                { author: 'Ірина', text: 'Все підійшло. Упаковка міцна, товар без дефектів. Видно, що піклуються про клієнта.', date: '2025-05-10', rating: 5 },
                { author: 'Максим', text: 'Залишився дуже задоволений покупкою. Магазин працює швидко та якісно. Так тримати!', date: '2025-05-13', rating: 5 },
                { author: 'Оксана', text: 'Товар відповідає фото. Сидить чудово. Доставили вчасно, приємна упаковка.', date: '2025-05-18', rating: 5 },
                { author: 'Дмитро', text: 'Брав для себе, але вже й дружина хоче такий самий. Гарна якість, зручна посадка.', date: '2025-05-21', rating: 5 },
                { author: 'Катерина', text: 'Тканина не просвічується, якість на висоті. Порадувало, що можна повернути без проблем.', date: '2025-05-23', rating: 4 },
                { author: 'Руслан', text: 'Сумнівався перед покупкою, але все прийшло ідеальним. Дякую за чесність!', date: '2025-05-25', rating: 5 },
                { author: 'Лілія', text: 'Упаковка була настільки красива, що навіть шкода було розпаковувати. Рекомендую.', date: '2025-05-27', rating: 5 },
                { author: 'Сергій', text: 'Ціни приємні, а сервіс ще кращий. Все зрозуміло, прозоро і швидко.', date: '2025-05-29', rating: 5 },
                { author: 'Тетяна', text: 'Замовила одразу кілька речей — усе підійшло. Дуже зручно, що є консультація в чаті.', date: '2025-06-01', rating: 5 },
                { author: 'Андрій', text: 'Товар отримав — все відповідає опису. Навіть більше — якість приємно здивувала.', date: '2025-06-03', rating: 5 },
                { author: 'Світлана', text: 'Якість супер, доставка швидка, все добре упаковано. Вже порекомендувала подрузі.', date: '2025-06-04', rating: 5 },
            ],
        };
    },
    computed: {
        visibleComments() {
            return this.comments.slice(this.currentIndex, this.currentIndex + this.visibleCount);
        },
    },
    methods: {
        scrollLeft() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        scrollRight() {
            if (this.currentIndex + this.visibleCount < this.comments.length) {
                this.currentIndex++;
            }
        },
    },
};
</script>

<style scoped lang="scss">
.container__main-comments {

    &-title {
        font-size: 28px;
        text-align: left;
        margin-bottom: 20px;
    }

    &-carousel {
        margin: 40px 0;
        display: flex;
        gap: 20px;
        flex-wrap: nowrap;
        justify-content: center;

        &-card {
            width: 280px;
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

        &-author {
            font-size: 14px;
            color: #555;
        }
    }

    &-slider {
        display: flex;
        justify-content: left;
        align-items: center;
        margin-top: 20px;
        gap: 16px;

        &-option {
            background: #fff;
            border: none;
            padding: 10px 16px;
            font-size: 18px;
            cursor: pointer;

            &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }

        &-counter {
            font-size: 16px;
        }
    }
}
</style>
