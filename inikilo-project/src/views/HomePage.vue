<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import Button from '../components/Button.vue'
import Card from '../components/Card.vue'
import FooterView from '../components/FooterView.vue'
import NavBar from '../components/NavBar.vue'
import SearchBar from '../components/SearchBar.vue'
import { useProductsStore } from '../stores/products'

export default {
  name: 'HomePage',
  components: {
    Button,
    NavBar,
    Card,
    SearchBar,
    FooterView
  },
  computed: {
    ...mapState(useProductsStore, ['count', 'products']),
    ...mapWritableState(useProductsStore, ['page'])
  },
  methods: {
    ...mapActions(useProductsStore, ['fetchProducts']),
    movePage(page) {
      this.page = page
      this.fetchProducts()
    }
  }
}
</script>
<template>
  <header><NavBar /></header>
  <section>
    <SearchBar heroText="Find the perfect product for you" />
  </section>
  <section
    class="flex flex-row flex-wrap mx-8 gap-y-8 gap-x-7 content-start items-start justify-center"
  >
    <Card />
    <section class="flex flex-row w-full justify-end">
      <div class="btn-group">
        <button
          v-for="(product, index) in products"
          @click="movePage(index + 1)"
          :key="product.id"
          class="btn"
          :class="index + 1 === page ? 'btn-active' : 'btn'"
        >
          {{ index + 1 }}
        </button>
      </div>
    </section>
  </section>
  <footer>
    <FooterView />
  </footer>
</template>
<style></style>
