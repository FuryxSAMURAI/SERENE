<template>
  <section class="container__main-about">
    <h1 class="container__main-about-title">Про SERENE</h1>

    <div class="container__main-about-text">
      <p>
        SERENE – це магазин, створений з любов’ю до простоти та краси. Ми віримо, що кожна людина заслуговує виглядати стильно без переплат. Саме тому ми обираємо лише найкращі товари для вас.
      </p>
      <p>
        Наш слоган – «Справжня краса в простоті». Ми прагнемо, щоб кожна річ, яку ви купуєте у SERENE, дарувала вам комфорт і впевненість.
      </p>
    </div>

    <div class="container__main-about-mission">
      <h2>Наша місія</h2>
      <p>
        Надавати клієнтам якісний одяг та аксесуари за доступними цінами, підтримуючи високу швидкість обслуговування та приємний сервіс.
      </p>
    </div>

    <div class="container__main-about-values">
      <h2>Наші цінності</h2>
      <ul>
        <li>🤝 Чесність та відкритість у всьому</li>
        <li>🚚 Швидка доставка по всій Україні</li>
        <li>💸 Вигідні та доступні ціни</li>
        <li>💬 Підтримка клієнтів 24/7</li>
      </ul>
    </div>


  </section>
</template>

<style scoped lang="scss">
.container__main-about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  &-title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }

  &-text {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 30px;

    p {
      margin-bottom: 10px;
    }
  }

  &-mission, &-values {
    margin-bottom: 30px;

    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p, ul {
      font-size: 16px;
      line-height: 1.6;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 8px;
      }
    }
  }
}
</style>
