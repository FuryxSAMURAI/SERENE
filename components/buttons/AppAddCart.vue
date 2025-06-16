<template>
    <div>
        <button @click="addToCart">Add to cart</button>
        <!-- <button><i class="fa-solid fa-cart-shopping" style="color: #000000;"></i></button> -->
    </div>
</template>

<script>
export default {
    props: {
        setCart: {
            type: Array,
            required: true
        }
    },
    methods: {
        addToCart() {
            this.$store.commit('cart/setCart', this.setCart)
            this.$store.dispatch('cart/loadCartCount')
        }
    }
}
</script>

<style scoped lang="scss">
// button {
//     border: 1px solid #ccc;
//     background-color: #fff;
//     transition: all .3s ease;
//     border-radius: 3px;
//     height: 30px;
//     width: 100px;

//     &:hover {
//         cursor: pointer;
//         border: 1px solid #333;
//         background-color: #333;
//         border-radius: 0;
//         color: #898686;
//     }

button {
    color: #333;
    height: 35px;
    border: none;
    border-radius: 3px;
    width: 120px;
    border: 1px solid #333;
    background-color: #fff;
    transition: all .5s ease;

    &:hover {
        background-color: #333;
        cursor: pointer;
        border: 1px solid #333;
        border-radius: 0;
        // color: #898686;
        color: #fff;
    }
}

// }</style>