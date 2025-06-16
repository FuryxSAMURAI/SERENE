<template>
    <section class="container__main-cart-wrapper">
        <div class="flex-cart">
            <AppCart :getCart="getCart" />
        </div>
        <div class="flex-checkout">
            <AppChekout :getTotal="getTotal"/>
        </div>
    </section>
</template>


<script>
import AppCart from '../../components/cart/AppCart.vue';
import AppChekout from '../../components/cart/AppChekout.vue';
import { mapGetters } from 'vuex'

export default {
    components: {
        AppCart,
        AppChekout,
    },
    computed: {
        ...mapGetters('cart', ['getCart', 'cartCount', 'getTotal'])
    },
    mounted() {
        this.$store.dispatch("cart/loadCartFromLocalStorage")
        this.$store.dispatch("cart/loadCartTotal")
    }
}
</script>

<style>
.container__main-cart-wrapper {
    margin: 40px 0;
    display: flex;
    gap: 40px;

}

.flex-checkout {
    flex-shrink: 0;
}

@media (max-width: 480px) {}

@media (max-width: 768px) {}

@media (max-width: 1024px) {
    .container__main-cart-wrapper {
        margin: 40px 0;
        display: block;
    }

    .flex-cart {
        width: 100%;
    }
}
</style>