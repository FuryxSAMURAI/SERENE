<template>
    <section class="container__main-featurers">
        <div class="container__main-featurers-blocks">
            <div class="container__main-featurers-block" v-for="(featurer, index) in featurers" :key="index">
                <div class="container__main-featurers-block-img"><img :src="featurer.img" :alt="featurer.title"></div>
                <div class="container__main-featurers-block-description">
                    <div class="container__main-featurers-block-description-title">{{ featurer.title }}</div>
                    <div class="container__main-featurers-block-description-subtitle">{{ featurer.subtitle }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            featurers: [
                {
                    img: '/featurersBaner/delivery-status.png',
                    title: 'повернення товарів',
                    subtitle: 'протягом 14 днів'
                },
                {
                    img: '/featurersBaner/delivery-truck.png',
                    title: 'доставка по всій Україні',
                    subtitle: 'до 5 днів'
                },
                {
                    img: '/featurersBaner/guarantee-certificate.png',
                    title: 'гарантія',
                    subtitle: 'якості та автентичності'
                },
                {
                    img: '/featurersBaner/save-money.png',
                    title: 'клубна програма',
                    subtitle: 'отримуйте до 15% від суми покупки'
                },
            ]
        }
    }
}
</script>


<style scoped lang="scss">
.container__main-featurers {
    margin: 40px auto;
    width: 100%;
    max-width: 1200px;

    &-blocks {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
        grid-gap: 20px;
    }

    &-block {
        width: 300px;
        display: flex;
        align-items: center;
        gap: 20px;

        &-img {
            height: 40px;
            width: 40px;
            background-color: #fbf8f8;
            border-radius: 3px;
            padding: 5px;

            img {
                height: 30px;
                width: 30px;

            }
        }

        &-description {
            display: flex;
            flex-direction: column;
            gap: 5px;

            &-title {
                color: #333;
                font-size: clamp(10px, 2vw, 14px);
                font-weight: bold;
                text-transform: uppercase;
            }

            &-subtitle {
                color: #333;
                font-size: clamp(10px, 2vw, 12px);
            }
        }
    }
}

@media (max-width:768px) {
    .container__main-featurers {
        &-blocks{
            justify-items: flex-start;
            grid-gap:0;
        }
        &-block {
            padding: 16px 0 16px 20px;
        }
    }
}
</style>