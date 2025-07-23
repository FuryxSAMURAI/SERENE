<template>
  <section class="container__main-reviewed">
    <div class="container__main-reviewed-title">Переглянуті товари</div>

    <div v-if="getReviewed.length === 0" class="container__main-reviewed-null">
      <p>Нажаль переглянуті товари відсутні.</p>
    </div>

    <div v-else class="carousel__wrapper">
      <!-- Ліва стрілка -->
      <button class="carousel__arrow left" @click="prevSlide">&#10094;</button>

      <!-- Слайдер -->
      <div class="carousel">
        <div class="carousel__track-wrapper">
          <div class="carousel__track" :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
            <div class="carousel__slide" v-for="reviewed in getReviewed" :key="reviewed.id" ref="slides">
              <div class="carousel__slide-content">
                <nuxt-link :to="`/product/${reviewed.id}`">
                  <img :src="reviewed.images[0]" :alt="reviewed.slug" loading="lazy" />
                </nuxt-link>
                <div class="title">{{ reviewed.title }}</div>
                <div class="bottom">
                  <div class="price">{{ reviewed.price }} $</div>
                  <div class="buttons">
                    <AppAddFavorite />
                    <AppAddCart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Права стрілка -->
      <button class="carousel__arrow right" @click="nextSlide">&#10095;</button>
    </div>
  </section>
</template>

<script>
import AppAddCart from '~/components/buttons/AppAddCart';
import AppAddFavorite from '../buttons/AppAddFavorite.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    AppAddCart,
    AppAddFavorite,
  },
  data() {
    return {
      currentIndex: 0,
      slideWidth: 0,
    };
  },
  computed: {
    ...mapGetters('reviewed', ['getReviewed']),
  },
  async mounted() {
    await this.$store.dispatch('reviewed/getReviewedFromLocal');
    this.$nextTick(() => {
      this.updateSlideWidth();
    });
    window.addEventListener('resize', this.updateSlideWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSlideWidth);
  },
  methods: {
    updateSlideWidth() {
      const slides = this.$refs.slides;
      if (!slides || slides.length === 0) {
        this.slideWidth = 0;
        return;
      }
      const slide = slides[0];
      this.slideWidth = slide ? slide.offsetWidth + 20 : 0; // +gap
    },
    nextSlide() {
      if (this.currentIndex < this.getReviewed.length - 1) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container__main-reviewed {
  max-width: 1200px;
  margin: 0 auto;

  &-title {
    font-size: 24px;
    font-weight: 600;
    margin: 20px 0;
  }

  &-null {
    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }
}

.carousel__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.carousel {
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  &__track-wrapper {
    overflow: hidden;
  }

  &__track {
    display: flex;
    transition: transform 0.3s ease;
    gap: 20px;
  }

  &__slide {
    flex: 0 0 auto;
    width: 250px;
  }

  &__slide-content {
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .title {
      height: 60px;
      font-size: 16px;
      margin: 5px 0;
    }

    .bottom {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .price {
      font-weight: bold;
      margin-bottom: 5px;
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  &__arrow {
    background: #fff;
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 1;
  }
}

@media (max-width: 600px) {
  .carousel__slide {
    width: 80vw;
  }
}
</style>
