<template>
  <section class="container__main-guarantee">
    <h1 class="container__main-guarantee-title">Гарантії та повернення</h1>

    <div class="container__main-guarantee-text">
      <p>
        Ми в SERENE дбаємо про кожного клієнта, тому надаємо гарантію якості на всі товари. Якщо товар вам не підійшов, ви можете його повернути або обміняти.
      </p>

      <h2>Умови повернення товару:</h2>
      <ul>
        <li>🔄 Повернення можливе протягом 14 днів з моменту отримання замовлення.</li>
        <li>📦 Товар має бути в товарному вигляді, без пошкоджень та слідів використання.</li>
        <li>💳 Повернення коштів здійснюється протягом 3-5 робочих днів після отримання повернення.</li>
        <li>📝 Для повернення зв’яжіться з нашою підтримкою або напишіть нам у Direct.</li>
      </ul>

      <h2>Гарантії якості:</h2>
      <p>
        Кожен товар перевіряється перед відправкою. Ми гарантуємо відповідність опису та фото, зазначених на сайті. Якщо ви виявили дефект, негайно повідомте нас, і ми вирішимо це питання.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container__main-guarantee {
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

    p {
      margin-bottom: 10px;
    }

    h2 {
      font-size: 24px;
      margin: 20px 0 10px;
      font-weight: 600;
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
