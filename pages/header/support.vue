<template>
  <section class="container__main-support">
    <h1 class="container__main-support-title">Підтримка клієнтів SERENE</h1>

    <div class="container__main-support-text">
      <p>
        Маєш питання щодо замовлення, оплати або доставки? Ми завжди раді допомогти! Зв’яжіться з нами зручним для вас
        способом:
      </p>
    </div>

    <ul class="container__main-support-contacts">
      <li>📞 Телефон: +38 (096) 123-45-67</li>
      <li>📧 Email: support@serene.com</li>
      <li>💬 Instagram: @serene.store</li>
    </ul>

    <!-- ✅ Блок FAQ для швидких відповідей -->
    <div class="container__main-support-faq">
      <h2>Поширені питання</h2>
      <ul>
        <li><strong>Як оформити замовлення?</strong> – Оберіть товар, додайте у кошик та натисніть “Оформити
          замовлення”.</li>

        <li><strong>Які способи оплати доступні?</strong> – Оплата при отриманні (наложений платіж) або передоплата на
          картку.</li>

        <li><strong>Чи можна оплатити картою онлайн?</strong> – Так, під час оформлення замовлення ви можете вибрати
          оплату карткою.</li>

        <li><strong>Який термін доставки?</strong> – 1-3 робочих дні по Україні (Нова Пошта).</li>

        <li><strong>Чи є доставка по Україні?</strong> – Так, доставка здійснюється по всій Україні Новою Поштою.</li>

        <li><strong>Скільки коштує доставка?</strong> – Згідно з тарифами Нової Пошти, в середньому 50-70 грн.</li>

        <li><strong>Чи можна повернути товар?</strong> – Так, протягом 14 днів у товарному вигляді.</li>

        <li><strong>Як повернути товар?</strong> – Звʼяжіться з нами у Direct або за телефоном для погодження
          повернення.</li>

        <li><strong>Які умови повернення?</strong> – Товар не повинен мати слідів використання та має бути у повній
          комплектації.</li>

        <li><strong>Чи можна обміняти товар?</strong> – Так, у разі якщо розмір або модель не підійшли.</li>

        <li><strong>Чи є гарантія на товар?</strong> – Так, гарантія 14 днів на обмін/повернення у разі виробничого
          браку.</li>

        <li><strong>Чи реальні фото товарів?</strong> – Так, всі фото зроблені нашою командою та відповідають дійсності.
        </li>

        <li><strong>Як дізнатися статус замовлення?</strong> – Ми повідомимо вас через SMS або Instagram Direct після
          відправки.</li>

        <li><strong>Чи можна оформити замовлення через Direct?</strong> – Так, напишіть нам у Instagram @serene.store
          для швидкого оформлення.</li>

        <li><strong>Чи можу я змінити адресу доставки після оформлення?</strong> – Так, до моменту відправки замовлення.
          Напишіть нам якнайшвидше.</li>

        <li><strong>Чи можна замовити товар як подарунок?</strong> – Так, напишіть у коментарі до замовлення або у
          Direct, ми красиво запакуємо.</li>

        <li><strong>Чи є розміри oversize?</strong> – Так, у кожному товарі вказано доступні розміри, також можна
          уточнити у Direct.</li>

        <li><strong>Чи можу я отримати знижку?</strong> – Слідкуйте за нашими акціями у Instagram, ми часто робимо
          знижки та розіграші.</li>

        <li><strong>Чи працюєте ви у вихідні?</strong> – Так, замовлення приймаємо 24/7, відправки за графіком Нової
          Пошти.</li>

        <li><strong>Де ви знаходитесь?</strong> – Ми – онлайн-магазин, доставка здійснюється з центрального складу по
          Україні.</li>

        <li><strong>Чи є самовивіз?</strong> – Наразі немає, працюємо лише через Нову Пошту для вашої зручності.</li>

        <li><strong>Чи можу я скасувати замовлення?</strong> – Так, якщо воно ще не відправлене. Напишіть нам
          якнайшвидше.</li>

        <li><strong>Як я дізнаюся, що моє замовлення відправлено?</strong> – Ви отримаєте SMS з номером ТТН після
          відправки.</li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
}
</script>

<style scoped lang="scss">
.container__main-support {
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
    margin-bottom: 20px;
    text-align: center;
  }

  &-contacts {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
    font-size: 16px;
    text-align: center;

    li {
      margin-bottom: 10px;
    }
  }

  &-faq {
    margin-bottom: 40px;

    h2 {
      font-size: 24px;
      margin-bottom: 10px;
      text-align: center;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 1.6;

        strong {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
