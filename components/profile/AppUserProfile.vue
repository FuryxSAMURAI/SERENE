<template>
    <section class="container__main-user">
        <p class="container__main-user-title"><span v-if="isLogin == true">Увійти</span><span
                v-else>Зареєструватися</span></p>
        <div v-if="isLogin === true">
            <div class="container__main-user-types">
                <div class="container__main-user-types-socials">
                    <div class="container__main-user-types-socials-facebook">
                        <i class="fa-brands fa-facebook-f fa-xl"></i>
                        <div class="socials">
                            Facebook
                        </div>
                    </div>
                    <div class="container__main-user-types-socials-google">
                        <i class="fa-brands fa-google fa-xl"></i>
                        <div class="socials">
                            Google
                        </div>
                    </div>
                </div>
                <div class="container__main-user-types-phone">
                    <i class="fa-solid fa-phone"></i>
                    <div>Телефон</div>
                </div>
            </div>
            <div class="line">або</div>
            <form action="post" class="container__main-user-form">
                <div class="container__main-user-form-email">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email">
                </div>
                <div class="container__main-user-form-password">
                    <label for="pass">Пароль</label>
                    <input type="text" name="pass" id="pass">
                </div>
            </form>
            <button class="container__main-user-submit" type="submit">Увійти</button>
        </div>
        <div v-else class="container__main-user-register">
            <div class="container__main-user-register-title">Підтвердіть свій номер телефону, щоб зареєструватися
                на сайті SERÈNE</div>
            <form action="post" class="container__main-user-register-form">
                <div class="container__main-user-register-form-phone">
                    <label for="phone">Телефон</label>
                    <input type="text" name="phone" id="phone" placeholder="+38 (___) ___ __ __">
                </div>
            </form>
            <div class="container__main-user-register-buttons">
                <button class="container__main-user-register-buttons-submit" type="submit">Підтвердити за допомогою
                    дзвінка</button>
                <button class="container__main-user-register-buttons-get" type="submit">Отримати код за допомогою
                    SMS/Viber</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props:{
        isLogin:{
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.container__main-user {
    width: 100%;
    max-width: 400px;
    margin: 80px auto 0;
    background: #fff;

    &-title {
        font-size: 28px;
        line-height: 32px;
        font-weight: 500;
        margin: 20px 0;
    }

    &-types {
        &-socials {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;

            &-facebook,
            &-google {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: left;
                text-align: center;
                height: 50px;
                width: calc(100%/2);
                color: #fff;
                border-radius: 5px;

                .socials {
                    font-size: 12px;
                    line-height: 16px;
                    text-align: center;
                    width: 100%;
                }
            }

            &-facebook {
                background: #3b5998;
            }

            &-google {
                background: #4285f4;
            }

            .fa-brands {
                position: absolute;
                top: 2px;
                left: 2px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                background: #fff;
                color: #333;
                height: 46px;
                width: 48px;

            }

            .fa-facebook-f {
                color: #3b5998;
            }

            .fa-google {
                color: #4285f4;
            }
        }

        &-phone {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            height: 50px;
            border-radius: 5px;
            background: #efeded;
            color: #333;

            .fa-phone {
                color: #333;
            }
        }
    }

    .line {
        display: flex;
        align-items: center;
        text-align: center;
        margin: 15px 0;
        color: #898686;
        font-size: 14px;
        font-weight: 500;

        &::before,
        &::after {
            content: "";
            flex: 1;
            height: 1px;
            background: #efeded;
        }

        &::before {
            margin-right: 10px;
        }

        &::after {
            margin-left: 10px;
        }
    }

    &-form {
        display: flex;
        flex-direction: column;
        margin: 15px 0 40px 0;
        gap: 15px;

        &-email,
        &-password {
            label {
                position: relative;
                top: -5px;
                font-size: 12px;
                line-height: 16px;
                color: #898686;
            }

            input {
                width: 100%;
                border-radius: 3px;
                user-select: none;
                text-transform: uppercase;
                background-color: #fbf8f8;
                border: none;
                height: 40px;
                padding: 0 10px 0 12px;
                font-size: 12px;
                transition: all .3s ease;

                &:focus,
                &:active,
                &:not(:placeholder-shown) {
                    outline: none;
                }
            }
        }
    }

    &-submit {
        height: 50px;
        width: 100%;
        border: none;
        border-radius: 5px;
        background: #333;
        color: #fff;
    }

    &-register {
        &-title {
            margin: 15px 0;
            font-size: 14px;
            line-height: 18px;
            color: #5a5757;
        }

        &-form {
            &-phone {
                label {
                    position: relative;
                    top: -5px;
                    font-size: 12px;
                    line-height: 16px;
                    color: #333;
                }

                input {
                    width: 100%;
                    border-radius: 3px;
                    user-select: none;
                    text-transform: uppercase;
                    background: #fbf8f8;
                    border: none;
                    height: 40px;
                    padding: 0 10px 0 12px;
                    font-size: 12px;
                    transition: all .3s ease;

                    &:focus,
                    &:active,
                    &:not(:placeholder-shown) {
                        outline: none;
                    }
                }
            }
        }

        &-buttons{
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            &-submit, &-get{
                height: 50px;
                width: 100%;
                color: #fff;
                border: none;
                border-radius: 3px;
                background: #333;
            }
            &-get{
                background: #fff;
                color: #333;
                border: solid 1px #333;
            }
        }
    }
}

@media(max-width:768px) {
    .container__main-user {
        margin: 20px auto 0;
    }
}
</style>