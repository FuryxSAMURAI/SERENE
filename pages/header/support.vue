<template>
  <section class="page support container__main-support">
    <div class="container container__main-wrapper">
      <h1 class="container__main-title">Підтримка</h1>
      <p class="container__main-text">
        Маєш питання щодо замовлення, оплати або доставки? Ми завжди готові допомогти! Звʼяжись з нами зручним способом:
      </p>
      <ul class="container__main-list">
        <li>📞 Телефон: +38 (096) 123-45-67</li>
        <li>📧 Email: support@serene.com</li>
        <li>💬 Instagram: @serene.store</li>
      </ul>
      <contact-form />
    </div>
  </section>
</template>

<style scoped lang="scss">
.container__main-support {
  margin: 100px 0;

  .container__main-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }

  .container__main-title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  .container__main-text {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .container__main-list {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;

    li {
      font-size: 17px;
      margin-bottom: 10px;
    }
  }
}
</style>
