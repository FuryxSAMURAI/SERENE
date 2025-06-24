<template>
    <transition name="slide-up">
        <div v-if="isVisible" class="container__main-slide-baner-block">
            <button class="close-btn" @click="isVisible = false">✖</button>
            <div class="container__main-slide-baner-block-description">
                <span>{{ banner.text }}</span>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false,
            banner: {
                text: "Безкоштовна доставка при замовленні від 1000 грн!",
            },
        };
    },
    mounted() {
        setTimeout(() => {
            this.isVisible = true;
        }, 3000);
    },
};
</script>

<style scoped lang="scss">
/* Анімація */
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.5s ease;
}

.slide-up-enter,
.slide-up-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.container__main-slide-baner-block {
    background-image: url('/aboutStore/david-kristianto-x9LOGu51NnI-unsplash.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 350px;
    width: 350px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 1000;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &-description {
        color: #fff;
        font-weight: 700;
        height: 100%;
        width: 100%;
        padding: 30px;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.4);

        span {
            text-align: left;
            width: 100%;
        }
    }
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255, 255, 255, 0.7);
    border: none;
    border-radius: 50%;
    font-size: 16px;
    cursor: pointer;
    padding: 5px 8px;
    transition: background 0.2s;

    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }
}
</style>
