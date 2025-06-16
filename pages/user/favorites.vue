<template>
    <section class="container__main-favorites-wrapper">
        <AppFavorites :getFavorites="getFavorites" />
    </section>
</template>

<script>
import AppFavorites from '../../components/favorites/AppFavorites.vue';
import { mapGetters } from 'vuex'
export default {
    components: {
        AppFavorites,
    },
    computed: {
        ...mapGetters('favorites', ['getFavorites'])
    }
}
</script>