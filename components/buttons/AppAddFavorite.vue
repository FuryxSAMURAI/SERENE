<template>
    <div>
        <button @click="addFavorites"><i class="fa-regular fa-star fa-xl" style="color: #000000;"></i></button>
    </div>
</template>

<script>
export default {
    props: {
        setFavorites: {
            type: Array || Object,
            required: true,
            default: () => [],
        }
    },
    methods: {
        addFavorites() {
            this.$store.commit('favorites/setFavorites', this.setFavorites)
            this.$store.dispatch('favorites/loadFavoritesCountFromLocalStorage')
        }
    }
}
</script>

<style scoped lang="scss">
button {
    border: none;
    background-color: #fff;
    padding: 5px;
    cursor: pointer;
}
</style>