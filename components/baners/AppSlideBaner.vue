<template>
  <transition name="slide-in">
    <section v-if="isVisible" class="container__main-slide-transition">
      <div class="container__main-slide-transition-close" @click="isVisible = false"><span></span><span></span></div>
      <div
        class="container__main-slide-transition-block"
        :style="{ backgroundImage: `url(${banners[currentIndex].image})` }"
      >
        <div class="container__main-slide-transition-content">
          <h3 class="container__main-slide-transition-title">{{ banners[currentIndex].title }}</h3>
          <p class="container__main-slide-transition-text">{{ banners[currentIndex].text }}</p>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      currentIndex: 0,
      banners: [
        {
          title: '🚚 Безкоштовна доставка',
          text: 'Отримай безкоштовну доставку при замовленні від 1000 грн. Швидко та зручно по всій Україні!',
          image: '/baners/delivery.jpg',
        },
        {
          title: '🔥 Гарячі знижки',
          text: 'Знижки до -40% на топові позиції. Поспішай — обмежена кількість товарів!',
          image: '/baners/sale.jpg',
        },
        {
          title: '🎁 Подарункові сертифікати',
          text: 'Сертифікати від 200 до 1000 грн — ідеальний подарунок на будь-який випадок.',
          image: '/baners/gift.jpg',
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
      this.startRotation();
    }, 10000);
  },
  beforeDestroy() {
    clearInterval(this.rotateInterval);
  },
  methods: {
    startRotation() {
      this.rotateInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.banners.length;
      }, 15000);
    },
  },
};
</script>

<style scoped lang="scss">
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.5s ease;
}
.slide-in-enter,
.slide-in-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.container__main-slide-transition {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.container__main-slide-transition-close {
  position: absolute;
  top: -40px;
  right: -5px;
  width: 30px;
  height: 30px;
  z-index: 1100;
  border-radius: 50px;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: absolute;
    width: 20px;
    height: 2px;
    background: #333;
    border-radius: 1px;
    transition: 0.3s ease;
  }

  span:first-child {
    transform: rotate(45deg);
  }

  span:last-child {
    transform: rotate(-45deg);
  }

  &:hover span {
    background: #000;
  }
}

.container__main-slide-transition-block {
  width: 350px;
  height: 350px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
}

.container__main-slide-transition-content {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container__main-slide-transition-title {
  font-size: 22px;
  margin-bottom: 10px;
}

.container__main-slide-transition-text {
  font-size: 14px;
  line-height: 1.4;
}

@media (max-width: 480px) {
  .container__main-slide-transition-block {
    width: 90vw;
    height: 280px;
  }

  .container__main-slide-transition-content {
    padding: 18px;
  }

  .container__main-slide-transition-title {
    font-size: 18px;
  }

  .container__main-slide-transition-text {
    font-size: 12px;
  }
}
</style>
