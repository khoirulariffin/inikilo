<script>
import { mapState, mapWritableState } from 'pinia'
import Button from './Button.vue'
import { useProductsStore } from '../stores/products'
import Swal from 'sweetalert2'

export default {
  name: 'NavBar',
  components: {
    Button
  },
  computed: {
    ...mapWritableState(useProductsStore, ['isLogin'])
  },
  methods: {
    handleLogout() {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.isLogin = false
          localStorage.clear()
          this.$router.push(`/`)
          Swal.fire('Logged out!', 'You are logged out.', 'success')
        }
      })
    }
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.isLogin = true
    }
  }
}
</script>
<template>
  <nav class="gap-5 px-8 py-4 flex flex-col md:flex-row md:justify-between items-center">
    <section class="flex flex-row gap-3">
      <router-link to="/">
        <a class="text-3xl font-bold leading-none" href="#">
          <img src="../assets/jp.png" alt="jp logo" class="h-[50px]" />
        </a>
      </router-link>
      <router-link to="/">
        <a class="text-3xl font-bold leading-none" href="#">
          <img src="../assets/id.png" alt="jp logo" class="h-[50px]" />
        </a>
      </router-link>
    </section>
    <ul class="flex mx-auto items-center w-auto space-x-3">
      <li>
        <router-link to="/">
          <a
            class="text-sm text-gray-600 opacity-80 active:opacity-100 active:text-gray-900 hover:underline"
            href="#"
            >Home</a
          >
        </router-link>
      </li>
      <li class="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>
      <li>
        <a
          class="text-sm text-gray-600 opacity-80 active:opacity-100 active:text-gray-900 hover:underline"
          href="#"
          >Category</a
        >
      </li>
      <li class="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>
      <li>
        <a
          class="text-sm text-gray-600 opacity-80 active:opacity-100 active:text-gray-900 hover:underline"
          href="#"
          >About Us</a
        >
      </li>
    </ul>
    <section v-if="!isLogin" class="flex flex-row gap-1">
      <router-link to="/login">
        <Button btn-text="Sign In" />
      </router-link>
      <router-link to="/register">
        <Button btn-text="Sign Up" theme="secondary" any-class="font-medium"
      /></router-link>
    </section>
    <section v-else class="dropdown dropdown-end flex flex-row items-center gap-5">
      <section>Hai, Bella!</section>
      <section>
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </div>
        </label>
        <ul
          tabindex="0"
          class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <router-link to="/favePage"><a>My Favorites</a></router-link>
          </li>
          <li @click.prevent="handleLogout"><a>Sign Out</a></li>
        </ul>
      </section>
    </section>
  </nav>
</template>
<style></style>
