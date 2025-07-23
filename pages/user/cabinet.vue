<template>
  <section class="container__main-account">
    <h1 class="container__main-account-title">Мій кабінет</h1>

    <div class="container__main-account-user">
      <h2>Мої дані</h2>
      <span class="hr"></span>
      <ul>
        <li><label>Ім'я:</label><input type="text" v-model="user.name" :disabled="!isEditing" /></li>
        <li><label>Фамілія:</label><input type="text" v-model="user.surname" :disabled="!isEditing" /></li>
        <li><label>Email:</label><input type="text" v-model="user.email" :disabled="!isEditing" /></li>
        <li><label>Телефон:</label><input type="text" v-model="user.phone" :disabled="!isEditing" /></li>
      </ul>
      <button class="container__main-account-edit" @click="toggleEdit">
        {{ isEditing ? 'Зберегти дані' : 'Редагувати дані' }}
      </button>
    </div>

    <div class="container__main-account-orders">
      <h2>Мої замовлення</h2>
      <span class="hr"></span>
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

    <div class="container__main-account-reviewed">
      <AppReviewedProducts />
    </div>

    <button class="container__main-account-logout" @click="logout">Вийти з кабінету</button>
  </section>
</template>
<script>
import AppReviewedProducts from '~/components/reviewed/AppReviewedProducts.vue'

export default {
  components: {
    AppReviewedProducts
  },
  data() {
    return {
      isEditing: false,
      user: {
        name: 'Іван',
        surname: 'Петренко',
        email: 'ivan@example.com',
        phone: '+380961234567',
      },
      orders: [
        { id: 1234, date: '2025-06-25', status: 'Доставлено', total: 1250 },
        { id: 1235, date: '2025-06-27', status: 'Очікує відправки', total: 890 },
      ],
    };
  },
  methods: {
    logout() {
      console.log('User logged out');
    },
    toggleEdit() {
      if (this.isEditing) {
        // Тут можна додати логіку збереження (API запит)
        console.log('Дані збережено:', this.user);
      }
      this.isEditing = !this.isEditing;
    }
  }
};
</script>
<style lang="scss" scoped>
.container__main-account {
  max-width: 1200px;
  margin: 80px auto;
  width: 100%;
  padding: 20px;

  &-title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }

  &-user,
  &-orders {
    margin-bottom: 40px;
    padding: 20px;
    background-color: #f8f8f8;

    h2 {
      font-size: 24px;
      margin-bottom: 10px;
      padding: 0 10px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        position: relative;
        margin-bottom: 20px;

        label {
          position: absolute;
          top: 0;
          left: 12px;
          transform: translateY(-50%);
          font-size: 11px;
          line-height: 1;
          padding: 0 4px;
          background-color: #fbf8f8;
          pointer-events: none;
          z-index: 2;
        }

        input {
          width: 100%;
          max-width: 250px;
          height: 40px;
          padding: 0 10px;
          font-size: 14px;
          border-radius: 3px;
          border: 1px solid #333;
          background-color: #fff;
          text-transform: uppercase;
          user-select: none;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
          color: #000;

          &:focus,
          &:active {
            outline: none;
            border-color: #000;
          }

          &:disabled {
            background-color: #fbf8f8;
            color: #333;
          }
        }

      }
    }

    button {
      margin-top: 10px;
      padding: 10px 20px;
      background: #333;
      color: #fff;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      font-size: 14px;
      transition: all .3s ease;

      &:hover {
        background-color: #444;
      }
    }
  }

  &-order-link {
    display: inline-block;
    margin-top: 5px;
    color: #333;
    text-decoration: underline;
  }

  &-reviewed {
    margin: 40px 0;
  }

  &-logout {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    background: #444;
    color: #fff;
    border: none;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #666;
    }
  }
}
</style>