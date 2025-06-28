<template>
  <section class="container__main-reviewed">
    <div class="container__main-reviewed-title">Рекомендовані товари</div>

    <div class="carousel">
      <button class="carousel__arrow left" @click="prevSlide">&#10094;</button>

      <div class="carousel__track-wrapper">
        <div class="carousel__track" :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
          <div class="carousel__slide" v-for="recommended in getRecommended" :key="recommended.id" ref="slides">
            <div class="carousel__slide-content">
              <nuxt-link :to="`/product/${recommended.id}`" @click.native="saveToReviewed(recommended)">
                <img :src="recommended.images[0]" :alt="recommended.slug" loading="lazy" />
              </nuxt-link>
              <div class="title">{{ recommended.title }}</div>
              <div class="price">{{ recommended.price }} $</div>
            </div>
          </div>
        </div>
      </div>

      <button class="carousel__arrow right" @click="nextSlide">&#10095;</button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      currentIndex: 0,
      slideWidth: 0,
    };
  },
  computed: {
    ...mapGetters('recommended', ['getRecommended']),
  },
  async mounted() {
    await this.$store.dispatch('recommended/getRecommendedFromLocal');
    this.$nextTick(() => {
      this.updateSlideWidth();
    });
    window.addEventListener('resize', this.updateSlideWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSlideWidth);
  },
  methods: {
    saveToReviewed(product) {
      this.$store.commit('reviewed/setReviewed', product);
    },
    updateSlideWidth() {
      const slides = this.$refs.slides;
      if (!slides || slides.length === 0) {
        this.slideWidth = 0;
        return;
      }
      const slide = slides[0];
      this.slideWidth = slide.offsetWidth + 20; // +gap
    },
    nextSlide() {
      if (this.currentIndex < this.getRecommended.length - 1) {
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
    text-align: center;
  }
}

.carousel {
  position: relative;
  overflow: hidden;

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
    width: 250px; // твоя ширина товару
  }

  &__slide-content {
    text-align: center;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .title {
      font-size: 16px;
      margin: 5px 0;
    }

    .price {
      font-weight: bold;
    }
  }

  &__arrow {
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

/* Адаптивність */
@media (max-width: 600px) {
  .carousel__slide {
    width: 80vw;
  }
}
</style>
