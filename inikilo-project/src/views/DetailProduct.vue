<script>
import Button from '../components/Button.vue'
import FooterView from '../components/FooterView.vue'
import NavBar from '../components/NavBar.vue'
import rupiah from '../helpers/helper'
import { mapActions, mapState } from 'pinia'
import { useProductsStore } from '../stores/products'

const baseUrl = 'http://localhost:3000'

export default {
  name: 'DetailProduct',
  components: {
    Button,
    NavBar,
    FooterView
  },
  methods: {
    convert(val) {
      return rupiah(val)
    },
    ...mapActions(useProductsStore, ['fetchProductById', 'addFavorite', 'fetchFavorites']),
    addFav(id) {
      this.addFavorite(id)
      this.fetchFavorites()
    }
  },
  computed: {
    ...mapState(useProductsStore, ['product'])
  },
  created() {
    this.fetchProductById(this.$route.params.id)
  }
}
</script>
<template>
  <NavBar />
  <div class="text-sm breadcrumbs w-full max-h-[600px] mx-auto px-5">
    <ul>
      <li>
        <router-link to="/"><a>Home</a></router-link>
      </li>
      <li>Detail product</li>
    </ul>
  </div>
  <section v-if="product" class="flex w-full max-h-[600px] mx-auto p-4 mb-4 -mt-2">
    <section name="left" class="w-2/5 flex flex-row">
      <section class="w-1/5">
        <div>
          <img :src="product.data.imgUrl" alt="" class="mb-2 w-[120px] h-[100px] rounded-lg" />
        </div>
      </section>
      <section class="w-4/5">
        <div>
          <img
            :src="product.data.imgUrl"
            alt=""
            class="ml-3 shadow-sm w-[400px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>
    </section>
    <section name="right" class="w-3/5 px-8 flex flex-col justify-between">
      <section name="up">
        <section class="flex flex-row justify-between">
          <section>
            <h3 class="text-3xl font-semibold">{{ product.data.name }}</h3>
            <h5 class="text-sm mb-3 opacity-70">
              {{ convert(product.data.price) }} - {{ product.data.Category.name }}
            </h5>
            <h6 class="text-xs">⭐⭐⭐⭐⭐ (5 stars) &nbsp; - &nbsp; 999 reviews</h6>
          </section>
          <section>
            <section class="h-[90px] w-[90px]">
              <div v-html="product.qr"></div>
            </section>
          </section>
        </section>
        <p class="text-base mt-4 leading-6 text-justify">
          {{ product.data.description }}
        </p>
      </section>
      <section name="down">
        <Button
          btn-text="Add to favorite"
          any-class="w-full font-semibold py-3"
          theme="secondary"
          @click="addFav(product.data.id)"
        />
        <router-link to="/">
          <Button btn-text="Cancel" any-class="w-full mt-3 font-semibold py-3" theme="primary"
        /></router-link>
      </section>
    </section>
  </section>
  <FooterView />
</template>
<style></style>
