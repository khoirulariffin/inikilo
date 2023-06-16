<script>
import { mapActions, mapState } from 'pinia'
import Button from '../components/Button.vue'
import Card from '../components/Card.vue'
import FooterView from '../components/FooterView.vue'
import NavBar from '../components/NavBar.vue'
import SearchBar from '../components/SearchBar.vue'
import { useProductsStore } from '../stores/products'
import rupiah from '../helpers/helper'

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
    ...mapState(useProductsStore, ['favorites'])
  },
  methods: {
    ...mapActions(useProductsStore, ['fetchFavorites']),
    convert(val) {
      return rupiah(val)
    }
  },
  created() {
    this.fetchFavorites()
  }
}
</script>
<template>
  <header><NavBar /></header>
  <section>
    <div class="container mx-auto bg-gray-50 rounded-lg p-5 my-5">
      <h1 class="text-center font-bold text-gray-800 text-4xl">My Favorite Products</h1>
    </div>
  </section>
  <section
    class="flex flex-row flex-wrap mx-8 gap-y-8 gap-x-7 content-start items-start justify-center"
  >
    <section
      v-for="(fav, index) in favorites"
      :key="fav.id"
      class="max-w-[300px] w-[300px] max-h-[500px] h-[500px] bg-white rounded-3xl shadow-xl overflow-hidden"
    >
      <div class="max-w-xs mx-auto">
        <div
          class="h-[236px]"
          :style="{
            backgroundImage: 'url(' + fav.Product.imgUrl + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }"
        ></div>
        <div class="p-4 sm:p-6">
          <p class="font-bold text-gray-700 text-[22px] leading-7 mb-1">{{ fav.Product.name }}</p>
          <div class="flex flex-row">
            <p class="text-[17px] font-bold text-[#0FB478]">{{ convert(fav.Product.price) }}</p>
          </div>
          <p class="text-[#7C7C80] font-[15px] mt-6 truncate">
            {{ fav.Product.description }}
          </p>
          <a
            target="_blank"
            href="foodiesapp://food/1001"
            class="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            @click.prevent="$router.push(`/detailProduct/${fav.Product.id}`)"
          >
            View on details
          </a>
        </div>
      </div>
    </section>
    <img
      v-if="!favorites.length"
      src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=740&t=st=1683465520~exp=1683466120~hmac=20ead3730b707a3721f48ffb6f8dad24c00f60ccd16cb2c3c7222c137b2ff3be"
      alt="empty"
      class="h-[500px]"
    />
  </section>
  <footer>
    <FooterView />
  </footer>
</template>
<style></style>
