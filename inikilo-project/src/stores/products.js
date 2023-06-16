import { defineStore } from 'pinia'
import axios from 'axios'
import { decodeCredential } from 'vue3-google-login'
import Swal from 'sweetalert2'

// const baseUrl = 'https://challenge1-inikilo.up.railway.app'
const baseUrl = 'http://localhost:3000'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    favorites: [],
    isLogin: false,
    product: null,
    count: 4,
    page: 1,
    totalPage: null,
    isFave: false,
    dataSearch: null
  }),
  getters: {},
  actions: {
    async fetchProducts() {
      try {
        const { data } = await axios.get(
          `${baseUrl}/pub/products?count=${this.count}&page=${this.page}`
        )
        this.products = data.data.products
      } catch (err) {
        console.log(err)
      }
    },
    async fetchFavorites() {
      try {
        const headers = {
          access_token: localStorage.getItem('access_token')
        }
        const { data } = await axios.get(`${baseUrl}/pub/customer/favorites`, { headers })
        this.favorites = data.favorites
        // console.log(this.favorites)
      } catch (err) {
        console.log(err)
      }
    },
    async handleLogin(val) {
      try {
        const { data } = await axios.post(`${baseUrl}/pub/login`, val)
        localStorage.setItem('access_token', data.access_token)
        this.router.push('/')
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You are logged in!'
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      }
    },
    async handleRegist(val) {
      try {
        const { data } = await axios.post(`${baseUrl}/pub/register`, val)
        this.router.push('/')
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You are logged in!'
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      }
    },
    async fetchProductById(id) {
      try {
        const { data } = await axios.get(`${baseUrl}/pub/products/${id}`)
        this.product = {
          data: data.data,
          qr: data.qrCode
        }
      } catch (err) {
        console.log(err)
      }
    },
    async addFavorite(id) {
      try {
        const headers = {
          access_token: localStorage.getItem('access_token')
        }
        const { data } = await axios.post(`${baseUrl}/pub/products/${id}/favorite`, null, {
          headers
        })
        this.router.push('/favePage')
        this.fetchFavorites()
      } catch (err) {
        console.log(err)
      }
    },
    async searchProd(search, order, sort) {
      try {
        const { data } = await axios.get(
          `${baseUrl}/pub/products?count=4&page=1&order=${order}&sort=${sort}&search=${search}`
        )
        this.products = data.data.products
      } catch (err) {
        console.log(err)
      }
    },
    async callback(response) {
      // const userData = decodeCredential(response.credential)
      // console.log('Handle the userData', userData)
      try {
        const { data } = await axios.post(`${baseUrl}/pub/loginGoogle`, {
          myToken: response.credential
        })
        localStorage.setItem('access_token', data.access_token)
        this.router.push('/')
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You are logged in!'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
})
