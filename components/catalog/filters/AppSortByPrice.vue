<template>
    <section class="container__main-sort-dropdown" @click="toggleDropdown">
        <div class="container__main-sort-selected">
            Сортувати: {{ selected.label }}
            <span :class="{ rotated: isOpen }">▲</span>
        </div>

        <ul v-show="isOpen" class="container__main-sort-options">
            <li v-for="option in options" :key="option.value" @click.stop="selectOption(option)" class="sort-option">
                {{ option.label }}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            selected: { label: 'новинки', value: 'new' },
            options: [
                { label: 'новинки', value: 'new' },
                { label: 'за збільшенням ціни', value: 'price_asc' },
                { label: 'за зменшенням ціни', value: 'price_desc' },
            ],
        }
    },
    computed: {
        sortBy() {
            return this.$store.state.catalog.sortBy;
        }
    },
    watch: {
        sortBy(newVal) {
            const match = this.options.find(opt => opt.value === newVal);
            if (match) this.selected = match;
        }
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectOption(option) {
            this.selected = option;
            this.isOpen = false;
            this.$store.commit('catalog/SET_SORT_BY', option.value);
            this.$store.dispatch('catalog/fetchPage', 1);
        }
    }
}
</script>

<style scoped lang="scss">
.container__main-sort-dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
    user-select: none;

    .container__main-sort-selected {
        font-size: 18px;
        color: #333;
        display: flex;
        align-items: center;
        gap: 5px;

        span {
            transition: transform 0.2s ease;
        }

        .rotated {
            transform: rotate(180deg);
        }
    }

    .container__main-sort-options {
        position: absolute;
        top: 100%;
        left: 0;
        background: #fff;
        list-style: none;
        z-index: 1000;

        .sort-option {
            padding: 8px 16px;
            cursor: pointer;
            transition: background 0.2s ease;

            &:hover {
                background: #f3f3f3;
            }
        }
    }
}
</style>
