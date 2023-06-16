<script>
import Button from '../components/Button.vue'
import NavBar from '../components/NavBar.vue'
import { useProductsStore } from '../stores/products'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'LoginPage',
  components: {
    Button,
    NavBar
  },
  data() {
    return {
      userLogin: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions(useProductsStore, ['handleLogin', 'callback']),
    login() {
      this.handleLogin(this.userLogin)
      this.userLogin.email = ''
      this.userLogin.password = ''
    }
  }
}
</script>
<template>
  <section class="login-form mx-auto h-screen flex">
    <div class="left w-3/12 h-screen">
      <img src="../assets/bg-login.avif" alt="bg-login" class="object-cover h-screen" />
    </div>
    <div class="right w-3/4 h-screen bg-white rounded-t-3xl -ms-5 flex flex-col">
      <div class="flex justify-center pt-10">
        <h1 class="text-3xl">Sign In</h1>
      </div>
      <div class="flex justify-center py-5">
        <hr class="w-1/4 opacity-40" />
      </div>
      <div>
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-xl shadow-xl bg-base-100">
            <div class="card-body">
              <form @submit.prevent="login">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    v-model="userLogin.email"
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
                    v-model="userLogin.password"
                    type="password"
                    placeholder="password"
                    class="input input-bordered"
                  />
                  <label class="label">
                    <router-link to="/register">
                      <a href="#" class="label-text-alt"
                        >I don't have an account?
                        <span class="link link-hover text-red-500 hover:text-red-800">Sign up</span>
                      </a>
                    </router-link>
                  </label>
                </div>
                <div class="form-control mt-6">
                  <Button theme="secondary" any-class="py-2" btn-type="sumbit" btn-text="Sign In" />
                </div>
              </form>
              <router-link to="/">
                <Button theme="primary" any-class="py-2 w-full" btn-text="Cancel"
              /></router-link>
              <GoogleLogin class="w-full" :callback="callback" promt auto-login />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
