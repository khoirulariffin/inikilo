<script>
import { mapActions } from 'pinia'
import Button from '../components/Button.vue'
import NavBar from '../components/NavBar.vue'
import axios from 'axios'
import { useProductsStore } from '../stores/products'
const baseUrl = 'http://localhost:3000'

export default {
  name: 'LoginPage',
  components: {
    Button,
    NavBar
  },
  data() {
    return {
      userRegist: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions(useProductsStore, ['handleRegist']),
    register() {
      this.handleRegist(this.userRegist)
      this.userRegist.email = ''
      this.userRegist.password = ''
    }
  }
}
</script>
<template>
  <section class="login-form mx-auto h-screen flex">
    <div class="left w-3/12 h-screen">
      <img src="../assets/bg-regis.avif" alt="bg-login" class="object-cover h-screen" />
    </div>
    <div class="right w-3/4 h-screen bg-white rounded-t-3xl -ms-5 flex flex-col">
      <div class="flex justify-center pt-10">
        <h1 class="text-3xl">Sign Up</h1>
      </div>
      <div class="flex justify-center py-5">
        <hr class="w-1/4 opacity-40" />
      </div>
      <div>
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-xl shadow-xl bg-base-100">
            <div class="card-body">
              <form @submit.prevent="register">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    v-model="userRegist.email"
                    type="text"
                    placeholder="email"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    v-model="userRegist.password"
                    type="password"
                    placeholder="password"
                    class="input input-bordered"
                  />
                  <label class="label">
                    <router-link to="/login">
                      <a href="#" class="label-text-alt"
                        >Have an account?
                        <span class="link link-hover text-red-500 hover:text-red-800"
                          >Sign in here!</span
                        >
                      </a>
                    </router-link>
                  </label>
                </div>
                <div class="form-control mt-6">
                  <Button theme="secondary" any-class="py-2" btn-type="sumbit" btn-text="Sign Up" />
                </div>
              </form>
              <router-link to="/">
                <Button theme="primary" any-class="py-2 w-full" btn-text="Cancel"
              /></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
