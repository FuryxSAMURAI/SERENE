<template>
    <section class="container__footer">
        <div class="container__footer-container">
            <div class="container__footer-brand">
                <h2 class="container__footer-brand-title">SERÈNE</h2>
                <p class="container__footer-brand-slogan">
                    Магазин одягу та аксесуарів, де простота поєднується зі стилем.
                    Ми віримо, що справжня краса — у деталях, а твій образ має бути не тільки модним, а й зручним щодня.
                </p>
            </div>

            <div class="container__footer-links">
                <h3>Магазин</h3>
                <ul>
                    <li><nuxt-link to="/">Головна</nuxt-link></li>
                    <li><nuxt-link to="/header/catalog">Каталог</nuxt-link></li>
                    <li><nuxt-link to="/header/reviews">Відгуки</nuxt-link></li>
                    <li><nuxt-link to="/header/support">Підтримка</nuxt-link></li>
                    <li><nuxt-link to="/header/about">Про нас</nuxt-link></li>
                </ul>
            </div>

            <div class="container__footer-info">
                <h3>Інформація</h3>
                <ul>
                    <li><nuxt-link to="/info/delivery">Доставка</nuxt-link></li>
                    <li><nuxt-link to="/info/returns">Повернення</nuxt-link></li>
                    <li><nuxt-link to="/info/policy">Конфіденційність</nuxt-link></li>
                    <li><nuxt-link to="/info/faq">Питання / Відповіді</nuxt-link></li>
                </ul>
            </div>

            <div class="container__footer-contacts">
                <h3>Контакти</h3>
                <p>📧 serene.shop@gmail.com</p>
                <p>📞 +38 (050) 123 45 67</p>
                <p>📍 Україна</p>
                <div class="container__footer-socials">
                    <a href="https://instagram.com" target="_blank" aria-label="Instagram">Instagram</a>
                    <a href="https://t.me" target="_blank" aria-label="Telegram">Telegram</a>
                </div>
            </div>
        </div>

        <div class="container__footer-bottom">
            <p>&copy; 2025 SERÈNE — Вигідні ціни, які доступні для кожного.</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AppFooter',
}
</script>

<style scoped lang="scss">
.container__footer {
    background-color: #111;
    color: #f0f0f0;
    padding: 0 20px;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;

    &-container {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin: 0 auto;
    }

    &-brand {
        user-select: none;
        width: 100%;
        max-width: 400px;
        &-title {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        &-slogan {
            font-size: clamp(12px, 2vw, 14px);
            color: #aaa;
        }
    }

    &-links,
    &-info,
    &-contacts {
        h3 {
            font-size: 16px;
            margin-bottom: 10px;
            color: #fff;
        }

        ul {
            list-style: none;
            padding: 0;

            li {
                margin-bottom: 8px;

                a {
                    color: #f0f0f0;
                    text-decoration: none;
                    font-size: 14px;

                    &:hover {
                        color: #ccc;
                    }
                }
            }
        }

        p {
            font-size: 14px;
            margin-bottom: 6px;
        }
    }

    &-socials {
        margin-top: 10px;

        a {
            margin-right: 12px;
            font-size: 14px;
            color: #f0f0f0;
            text-decoration: none;

            &:hover {
                color: #ccc;
            }
        }
    }

    &-bottom {
        margin-top: 40px;
        text-align: center;
        font-size: 14px;
        color: #888;
    }

    @media (max-width: 768px) {
        &-container {
            flex-direction: column;
        }
        &-links,
        &-info,
        &-contacts {
            margin-top: 20px;
        }

        &-socials a {
            display: inline-block;
            margin: 0 8px;
        }
    }
}
</style>
