<template>
  <section class="page about container__main-about">
    <div class="container container__main-wrapper">
      <h1 class="container__main-title">Про нас</h1>
      <p class="container__main-text">
        SERÈNE — це сучасний онлайн-магазин, де поєднано естетику, мінімалізм та доступність. <br />
        Ми створили цей простір, щоб кожен міг знайти щось особливе для себе без переплат і зайвої метушні. <br /><br />

        У SERÈNE ми віримо, що стиль — це не про бренди, а про відчуття. Тому ми ретельно відбираємо колекції, які підкреслюють індивідуальність, комфорт і сучасність. <br /><br />

        Ми працюємо для тих, хто цінує простоту, гармонію та натуральність у деталях. Кожна річ — це частина настрою, частина тебе. <br /><br />

        Дякуємо, що обираєш SERÈNE. Твоя довіра — наш головний пріоритет.
      </p>
      <img src="/images/about.jpg" alt="Про SERÈNE" class="container__main-image" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.container__main-about {
    margin: 100px 0;
  display: flex;
  height: 100%;

  .container__main-wrapper {
    display: flex;
    flex-direction: column;
}

  .container__main-title {
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: 700;
  }

  .container__main-text {
    font-size: 18px;
    line-height: 1.6;
    max-width: 800px;
  }

  .container__main-image {
    max-width: 100%;
    margin-top: 30px;
    border-radius: 12px;
  }
}
</style>
