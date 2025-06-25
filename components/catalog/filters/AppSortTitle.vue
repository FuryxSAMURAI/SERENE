<template>
    <section class="container__main-sort-title">
        <div class="container__main-sort-title-title" @click="toggleDropdown">
            Сортувати за назвою:
            <span :class="{ rotated: isOpen }">▲</span>
        </div>

        <div class="container__main-sort-title-lists" v-if="getTitles.length" v-show="isOpen">
            <input class="container__main-sort-title-lists-search" type="text" placeholder="Search ..."
                v-model="search" />

            <ul class="container__main-sort-title-lists-ul">
                <li class="container__main-sort-title-lists-ul-li" v-for="title in filteredTitles"
                    :key="title.title">
                    <label :for="title.title">
                        <input type="checkbox" :id="title.title" :value="title.title" v-model="selectedTitles" />
                        {{ title.title }}
                    </label>
                </li>
            </ul>
        </div>

        <div v-else>Нажаль сортувати за назвою не вийде :(</div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            search: '',
            selectedTitles: [],
            isOpen: false,
        }
    },
    computed: {
        ...mapGetters('filter', ['getTitles']),
        filteredTitles() {
            const s = this.search.toLowerCase().trim()
            return this.getTitles.filter(t =>
                t.title.toLowerCase().includes(s)
            )
        },
    },
    watch: {
        selectedTitles: {
            handler(val) {
                this.$emit('getTitle', val)
                this.$store.dispatch('catalog/fetchPage', 1)
            },
            deep: true,
        },
    },
    mounted() {
        this.$store.dispatch('filter/getProducts')
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen
        },
    },
}
</script>
