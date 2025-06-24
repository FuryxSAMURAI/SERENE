<template>
    <section class="container__header">
        <div class="container__header-logo"><nuxt-link class="nav-link-logo" to="/">SERÈNE</nuxt-link></div>
        <nav class="container__header-nav">
            <ul class="container__header-nav-ul">
                <li class="container__header-nav-ul-li"><nuxt-link to="/header/catalog">Каталог</nuxt-link></li>
                <li class="container__header-nav-ul-li"><nuxt-link to="/header/about">Про
                        нас</nuxt-link></li>
                <li class="container__header-nav-ul-li"><nuxt-link to="/header/warranty">Гарантії</nuxt-link></li>
                <li class="container__header-nav-ul-li"><nuxt-link to="/header/reviews">Відгуки</nuxt-link></li>
                <li class="container__header-nav-ul-li"><nuxt-link to="/header/support">Підтримка</nuxt-link></li>
            </ul>
        </nav>
        <div class="container__header-user">
            <div class="container__header-user-search">
                <input type="text" name="search" placeholder="Search here">
                <i class="fa-solid fa-magnifying-glass" style="color: #000000;"></i>
            </div>
            <div class="container__header-user-favorites">
                <nuxt-link to="/user/favorites">
                    <i class="fa-regular fa-heart fa-xl" style="color: #000000;"></i>
                    <span v-if="getFavoritesCount != 0">{{ getFavoritesCount }}</span>
                </nuxt-link>
            </div>
            <div class="container__header-user-cart">
                <nuxt-link to="/user/cart">
                    <i class="fa-solid fa-bag-shopping fa-xl" style="color: #000000;"></i>
                    <span v-if="getCartCount != 0">{{ getCartCount }}</span>
                </nuxt-link>
            </div>
            <div class="container__header-user-profile">
                <nuxt-link to="/user/profile">
                    <i class="fa-regular fa-user fa-xl" style="color: #000000;"></i>
                </nuxt-link>
            </div>
            <div class="container__header-user-burger-menu" :class="{ open: isMenuOpen }" @click="toggleMenu">
                <span></span><span></span><span></span>
            </div>
        </div>

        <div class="container__header-menu" :class="{ open: isMenuOpen }">
            <div class="container__header-menu-header">
                <div class="container__header-menu-header-logo">
                    <nuxt-link to="/">SERÈNE</nuxt-link>
                </div>
                <div class="container__header-menu-header-search">
                    <input type="text" name="search" placeholder="Search here">
                    <i class="fa-solid fa-magnifying-glass" style="color: #000000;"></i>
                </div>
                <div class="container__header-menu-header-close">
                    <div class="container__header-user-burger-menu" :class="{ open: isMenuOpen }" @click="toggleMenu">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
            <div class="container__header-menu-main">
                <nav class="container__header-menu-main-nav">
                    <ul class="container__header-menu-main-nav-ul">
                        <li class="container__header-menu-main-nav-ul-li"><nuxt-link
                                to="/header/catalog">Каталог</nuxt-link>
                        </li>
                        <li class="container__header-menu-main-nav-ul-li"><nuxt-link to="/header/about">Про
                                нас</nuxt-link></li>
                        <li class="container__header-menu-main-nav-ul-li"><nuxt-link
                                to="/header/warranty">Гарантії</nuxt-link></li>
                        <li class="container__header-menu-main-nav-ul-li"><nuxt-link
                                to="/header/reviews">Відгуки</nuxt-link>
                        </li>
                        <li class="container__header-menu-main-nav-ul-li"><nuxt-link
                                to="/header/support">Підтримка</nuxt-link></li>
                    </ul>
                </nav>
            </div>
            <div class="container__header-menu-footer">
                <nav class="container__header-menu-footer-info">
                    <h3>Інформація</h3>
                    <ul>
                        <li><nuxt-link to="/info/delivery">Доставка</nuxt-link></li>
                        <li><nuxt-link to="/info/returns">Повернення</nuxt-link></li>
                        <li><nuxt-link to="/info/policy">Конфіденційність</nuxt-link></li>
                        <li><nuxt-link to="/info/faq">Питання / Відповіді</nuxt-link></li>
                    </ul>
                </nav>

                <div class="container__header-menu-footer-contacts">
                    <h3>Контакти</h3>
                    <p>📧 serene.shop@gmail.com</p>
                    <p>📞 +38 (050) 123 45 67</p>
                    <p>📍 Україна</p>
                    <div class="container__header-menu-footer-contacts-socials">
                        <a href="https://instagram.com" target="_blank" aria-label="Instagram">Instagram</a>
                        <a href="https://t.me" target="_blank" aria-label="Telegram">Telegram</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            isMenuOpen: false
        }
    },
    computed: {
        ...mapGetters('cart', ['getCartCount']),
        ...mapGetters('favorites', ['getFavoritesCount'])
    },
    mounted() {
        this.$store.dispatch('cart/loadCartCount')
        this.$store.dispatch('favorites/loadFavoritesCount')
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        },
    }
}
</script>

<style scoped lang="scss">
.container__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 80px;
    width: 100%;
    background-color: #fff;
    padding: 0 100px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

    &-logo {
        font-size: 32px;

        a {
            color: #333;
            text-decoration: none;
            font-weight: bold;
            user-select: none;
        }
    }

    &-nav {
        &-ul {
            display: flex;
            align-items: center;
            gap: 30px;
            list-style: none;

            &-li {
                a {
                    color: #333;
                    text-decoration: none;
                    font-size: 14px;
                    transition: color .3s ease;
                    font-weight: 500;

                    &:hover {
                        color: #696969;
                    }
                }
            }
        }
    }

    &-user {
        display: flex;
        align-items: center;
        gap: 20px;

        &-search {
            position: relative;

            input {
                width: 300px;
                border-radius: 3px;
                user-select: none;
                text-transform: uppercase;
                background-color: #F0F0F0;
                border: none;
                height: 35px;
                padding: 0 40px 0 20px;
                font-size: 14px;
                transition: all .3s ease;

                &:focus,
                &:active,
                &:not(:placeholder-shown) {
                    outline: none;
                    border: 1px solid #000;
                }
            }

            i {
                position: absolute;
                top: 9px;
                right: 15px;
            }
        }

        &-favorites,
        &-cart {
            position: relative;

            span {
                position: absolute;
                top: 10px;
                right: -3px;
                background-color: #f94942;
                z-index: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 8px;
                height: 15px;
                width: 15px;
                border-radius: 50%;

            }

            a {
                text-decoration: none;
                color: #fff;
            }
        }

        &-burger {
            &-menu {
                display: none;
                flex-direction: column;
                gap: 5px;
                cursor: pointer;

                span {
                    content: "";
                    display: block;
                    width: 25px;
                    height: 3px;
                    background-color: #000;
                    transition: 0.3s;
                    border-radius: 2px;
                }

                &.open {
                    span:nth-child(1) {
                        transform: rotate(45deg) translate(5px, 6px);
                    }

                    span:nth-child(2) {
                        opacity: 0;
                    }

                    span:nth-child(3) {
                        transform: rotate(-45deg) translate(5px, -6px);
                    }
                }
            }
        }
    }


    &-menu {
        position: fixed;
        top: 0;
        right: -1000%;
        width: 100vw;
        height: 100vh;
        background: #fff;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        transition: right .5s ease;
        z-index: 999;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &.open {
            height: 100vh;
            right: 0;
            overflow-y: hidden;
        }

        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 40px;

            &-logo {
                font-size: 32px;

                a {
                    color: #333;
                    text-decoration: none;
                    font-weight: bold;
                    user-select: none;
                }
            }

            &-search {
                position: relative;
                width: calc(100vw/3);

                input {
                    width: 100%;
                    border-radius: 3px;
                    user-select: none;
                    text-transform: uppercase;
                    background-color: #F0F0F0;
                    border: none;
                    height: 35px;
                    padding: 0 40px 0 20px;
                    font-size: 14px;
                    transition: all .3s ease;

                    &:focus,
                    &:active,
                    &:not(:placeholder-shown) {
                        outline: none;
                        border: 1px solid #000;
                    }
                }

                i {
                    position: absolute;
                    top: 9px;
                    right: 15px;
                }
            }
        }

        &-main {
            padding: 20px 40px;

            &-nav {
                &-ul {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;

                    &-li {
                        font-size: 18px;
                        line-height: 22px;

                        a {
                            color: #333;
                            text-decoration: none;
                        }
                    }
                }
            }
        }

        &-footer {
            padding: 40px;
            background: #333;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 30px;

            &-info {

                h3 {
                    color: #e5e5e5;
                    margin-bottom: 10px;
                }

                ul {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    li {
                        a {
                            color: #e5e5e5;
                            text-decoration: none;
                        }
                    }
                }
            }

            &-contacts {
                display: flex;
                flex-direction: column;
                gap: 10px;
                color: #e5e5e5;

                h3 {
                    color: #e5e5e5;
                    margin-bottom: 10px;
                }


                &-socials {
                    a {
                        text-decoration: none;
                        color: #fff;
                    }
                }
            }
        }
    }
}

@media (max-width: 1260px) {
    .container__header {
        &-nav {
            &-ul {
                gap: 10px;
            }
        }

        &-user {
            &-search {
                input {
                    width: 200px;
                }
            }
        }
    }
}

@media (max-width: 1260px) {
    .container__header {
        padding: 0 20px;

        &-nav {
            display: none;
        }

        &-user {
            &-search {
                display: none;
            }

            &-profile {
                display: none;
            }

            &-burger {
                &-menu {
                    display: flex;
                }
            }
        }

    }
}

@media (max-width: 768px) {
    .container__header {}

}
</style>