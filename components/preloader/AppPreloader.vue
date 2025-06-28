<template>
  <div class="preloader">
    <div class="preloader__content">
      <p class="preloader__text">Ласкаво просимо в <span class="serene">SERENE!</span></p>
      <p class="preloader__subtext">Місце, де краса зустрічається з простотою.</p>
      <p class="preloader__logo">
        <strong>SERENE</strong>
        <span class="preloader__chatgpt">x ChatGPT</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('load', () => {
      // Прибираємо прелоадер після всіх анімацій
      setTimeout(() => {
        document.querySelector('.preloader').classList.add('hide');
      }, 2500);
    });
  },
};
</script>

<style scoped lang="scss">
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.5s ease;

  &.hide {
    opacity: 0;
    pointer-events: none;
  }

  &__content {
    text-align: center;
  }

  &__text {
    font-size: clamp(18px, 2vw, 24px);
    font-weight: 600;
    margin-bottom: 10px;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
  }

  &__subtext {
    font-size: clamp(12px, 2vw, 16px);
    margin-bottom: 30px;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
    animation-delay: 0.3s;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: clamp(18px, 2vw, 24px);
    opacity: 0;
    animation: fadeIn 0.5s forwards;
    animation-delay: 0.6s;

    strong {
      margin-right: 8px;
    }
  }

  &__chatgpt {
    display: inline-block;
    font-size: clamp(12px, 2vw, 16px);
    font-weight: 600;
    color: #555;
    opacity: 0;
    transform: translateY(30px);
    animation: slideUp 0.5s forwards;
    animation-delay: 1.2s;
    margin-left: 5px;
  }

  .serene {
    color: #333;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
