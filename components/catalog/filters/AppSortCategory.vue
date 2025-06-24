<template>
  <section class="container__main-sort-category">
    <div class="container__main-sort-category-title" @click="toggleDropdown">
      Сортувати за категорією: <span :class="{ rotated: isOpen }">▲</span>
    </div>

    <div class="container__main-sort-category-lists" v-if="getCategories.length" v-show="isOpen">
      <input class="container__main-sort-category-lists-search" type="text" placeholder="Search ..." v-model="search" />

      <ul class="container__main-sort-category-lists-ul">
        <li class="container__main-sort-category-lists-ul-li" v-for="(category, index) in filteredCategories" :key="index">
          <label :for="category.slug">
            <input
              type="checkbox"
              :id="category.slug"
              :value="category.slug"
              v-model="selectedSlugs"
            />
            {{ category.slug }}
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
      selectedSlugs: [],
      isOpen: false,
    }
  },
  computed: {
    ...mapGetters('filter', ['getCategories']),
    filteredCategories() {
      const s = this.search.toLowerCase().trim()
      return this.getCategories.filter(c => c.slug.toLowerCase().includes(s))
    }
  },
  watch: {
    selectedSlugs: {
      handler(val) {
        this.$emit('getCategorySlug', val)
        this.$store.dispatch('catalog/fetchPage', 1)
      },
      deep: true,
    }
  },
  mounted() {
    this.$store.dispatch('filter/getCategories')
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
  }
}
</script>
