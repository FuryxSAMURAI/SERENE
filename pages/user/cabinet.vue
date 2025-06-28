<template>
  <section class="container__main-account">
    <h1 class="container__main-account-title">Мій кабінет</h1>

    <!-- 🔹 Блок даних користувача -->
    <div class="container__main-account-user">
      <h2>Мої дані</h2>
      <ul>
        <li><strong>Ім'я:</strong> {{ user.name }}</li>
        <li><strong>Email:</strong> {{ user.email }}</li>
        <li><strong>Телефон:</strong> {{ user.phone }}</li>
      </ul>
      <button class="container__main-account-edit">Редагувати дані</button>
    </div>

    <!-- 🔹 Блок замовлень -->
    <div class="container__main-account-orders">
      <h2>Мої замовлення</h2>
      <div v-if="orders.length === 0">
        <p>Ви ще не робили замовлень.</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="order in orders" :key="order.id">
            <p><strong>№ замовлення:</strong> {{ order.id }}</p>
            <p><strong>Дата:</strong> {{ order.date }}</p>
            <p><strong>Статус:</strong> {{ order.status }}</p>
            <p><strong>Сума:</strong> {{ order.total }} грн</p>
            <nuxt-link :to="`/order/${order.id}`" class="container__main-account-order-link">Деталі</nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- 🔹 Блок обраного -->
    <div class="container__main-account-favorite">
      <h2>Обрані товари</h2>
      <div v-if="favorites.length === 0">
        <p>У вас немає обраних товарів.</p>
      </div>
      <div v-else class="container__main-account-favorite-list">
        <div v-for="product in favorites" :key="product.id" class="container__main-account-favorite-item">
          <nuxt-link :to="`/product/${product.id}`">
            <img :src="product.images[0]" :alt="product.title" loading="lazy" />
            <p>{{ product.title }}</p>
            <p>{{ product.price }} грн</p>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- 🔹 Кнопка виходу -->
    <button class="container__main-account-logout" @click="logout">Вийти з кабінету</button>

  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Іван Петренко',
        email: 'ivan@example.com',
        phone: '+380961234567',
      },
      orders: [
        { id: 1234, date: '2025-06-25', status: 'Доставлено', total: 1250 },
        { id: 1235, date: '2025-06-27', status: 'Очікує відправки', total: 890 },
      ],
      favorites: [
        { id: 1, title: 'Футболка SERENE', price: 350, images: ['/images/tshirt.jpg'] },
        { id: 2, title: 'Светр Minimal', price: 590, images: ['/images/sweater.jpg'] },
      ],
    };
  },
  methods: {
    logout() {
      // Логіка виходу користувача
      console.log('User logged out');
    },
  },
};
</script>

<style scoped lang="scss">
.container__main-account {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  &-title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }

  &-user, &-orders, &-favorite {
    margin-bottom: 40px;

    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 1.6;
      }
    }

    button {
      margin-top: 10px;
      padding: 8px 16px;
      background: #333;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  }

  &-order-link {
    display: inline-block;
    margin-top: 5px;
    color: #333;
    text-decoration: underline;
  }

  &-favorite-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  &-favorite-item {
    width: 150px;
    text-align: center;

    img {
      width: 100%;
      border-radius: 8px;
      margin-bottom: 5px;
    }

    p {
      font-size: 14px;
    }
  }

  &-logout {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    background: #555;
    color: #fff;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
}
</style>
