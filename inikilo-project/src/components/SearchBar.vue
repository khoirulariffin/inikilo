<script>
import { mapActions } from 'pinia'
import Button from './Button.vue'
import { useProductsStore } from '../stores/products'

export default {
  name: 'SearchBar',
  components: {
    Button
  },
  props: ['heroText'],
  data() {
    return {
      text: this.heroText ? this.heroText : 'Default',
      orderBy: null,
      sortBy: null,
      search: '',
      orderBy: '',
      sortBy: ''
    }
  },
  methods: {
    ...mapActions(useProductsStore, ['searchProd'])
  }
}
</script>
<template>
  <div class="container mx-auto bg-gray-50 rounded-lg p-5 my-5">
    <form @submit.prevent="searchProd(search, orderBy, sortBy)">
      <h1 class="text-center font-bold text-gray-800 text-4xl pb-3">
        {{ text }}
      </h1>
      <div
        class="flex flex-col lg:flex-row items-start bg-white rounded-lg overflow-hidden px-2 py-1 justify-between"
      >
        <input
          v-model="search"
          class="text-base text-gray-400 flex-grow outline-none px-2 py-2 w-full"
          type="text"
          placeholder="Search products"
        />
        <div
          class="flex flex-col lg:flex-row lg:gap-x-2 gap-y-3 items-start lg:justify-end lg: content-center lg:items-center rounded-lg h-full"
        >
          <select
            v-model="orderBy"
            id="orderBy"
            name="orderBy"
            class="px-5 py-1 rounded text-slate-900 transition-all duration-200 bg-slate-50 bg-opacity-25 ease-out shadow-sm active:shadow-lg outline-none w-full lg:w-fit"
          >
            <option value="" selected disabled>Order By</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
          <select
            v-model="sortBy"
            id="sortBy"
            name="sortBy"
            class="px-5 py-1 rounded text-slate-900 transition-all duration-200 bg-slate-50 bg-opacity-25 ease-out shadow-sm active:shadow-lg outline-none w-full lg:w-fit"
          >
            <option value="" selected disabled>Sort By</option>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </select>
          <Button
            btn-text="Search"
            theme="secondary"
            btn-type="submit"
            any-class="w-full lg:w-fit"
          />
        </div>
      </div>
    </form>
  </div>
</template>
<style></style>
