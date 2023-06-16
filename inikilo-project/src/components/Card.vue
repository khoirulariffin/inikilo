<script>
import rupiah from '../helpers/helper'
import { mapState, mapActions } from 'pinia'
import { useProductsStore } from '../stores/products'

export default {
  name: 'Card',
  computed: {
    ...mapState(useProductsStore, ['products'])
  },
  methods: {
    convert(val) {
      return rupiah(val)
    },
    ...mapActions(useProductsStore, ['fetchProducts', 'fetchFavorites'])
  },
  async created() {
    this.fetchProducts()
  }
}
</script>
<template>
  <section
    v-for="(product, index) in products"
    :key="product.id"
    class="max-w-[300px] w-[300px] max-h-[500px] h-[500px] bg-white rounded-3xl shadow-xl overflow-hidden"
  >
    <div class="max-w-xs mx-auto">
      <div
        class="h-[236px]"
        :style="{
          backgroundImage: 'url(' + product.imgUrl + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }"
      ></div>
      <div class="p-4 sm:p-6">
        <p class="font-bold text-gray-700 text-[22px] leading-7 mb-1">{{ product.name }}</p>
        <div class="flex flex-row">
          <p class="text-[17px] font-bold text-[#0FB478]">{{ convert(product.price) }}</p>
        </div>
        <p class="text-[#7C7C80] font-[15px] mt-6 truncate">
          {{ product.description }}
        </p>
        <a
          target="_blank"
          href="foodiesapp://food/1001"
          class="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          @click.prevent="$router.push(`/detailProduct/${product.id}`)"
        >
          View on details
        </a>
      </div>
    </div>
  </section>
</template>
<style></style>
