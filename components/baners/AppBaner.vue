<template>
  <div v-if="visible" class="banner-slider" :class="{ show: visible }">
    <p class="banner-content">
      {{ banners[currentIndex].text }}
      <nuxt-link :to="banners[currentIndex].link" class="banner-link" style="color: #ffffff;">
        {{ banners[currentIndex].cta }}
      </nuxt-link>
    </p>
    <button class="close-btn" @click="closeBanner"><i class="fa-solid fa-xmark fa-lg"
        style="color: #ffffff;"></i></button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      visible: false,
      currentIndex: 0,
      switchInterval: null,
      banners: [
        {
          text: '🚚 Безкоштовна доставка при замовленні від 1000 грн',
          cta: 'До покупок!',
          link: '/',
        },
        {
          text: '🔥 Знижки до -40% тільки цього тижня!',
          cta: 'Дивитися акції',
          link: '/sale',
        },
        {
          text: '✨ Новинки сезону вже в наявності — стиль починається з простого',
          cta: 'Переглянути новинки',
          link: '/new',
        },
        {
          text: '🖤 Обрані товари — тепер ще доступніші',
          cta: 'Мої улюблені',
          link: '/favorites',
        },
        {
          text: '🎁 Подаруй стиль — сертифікати вже доступні!',
          cta: 'Дізнатися більше',
          link: '/gift',
        },
      ],
    }
  },
  mounted() {
    setTimeout(() => {
      this.visible = true
      this.startSwitching()
    }, 3000)
  },
  beforeDestroy() {
    clearInterval(this.switchInterval)
  },
  methods: {
    startSwitching() {
      this.switchInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.banners.length
      }, 5000)
    },
    closeBanner() {
      this.visible = false
      clearInterval(this.switchInterval)
    },
  },
}
</script>


<style scoped, lang="scss">
.banner-slider {
  opacity: 0;
  position: relative;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  padding: 5px 0;
  text-align: center;
  background: #f94942;
  font-size: clamp(8px, 2vw, 12px);
  color: #fff;
  z-index: 999;

  &.show {
    opacity: 1;
    visibility: visible;
  }
}

.banner-link {
  margin-left: 8px;
  font-size: clamp(8px, 2vw, 12px);
  color: #000;
  font-weight: bold;
  text-decoration: underline;
}

.close-btn {
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #fff;
  }
}

@media(max-width:768px) {
  .banner-content {
    padding: 0 60px;
  }
}
</style>
