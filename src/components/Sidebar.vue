<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useSidebar } from '@/utils/constante/fun';
import { ref } from 'vue'

const { isOpen } = useSidebar()
const activeClass = ref(
  'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100',
)
const inactiveClass = ref(
  'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100',
)
</script>

<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
      @click="isOpen = false"
    />
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-black lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center  justify-center mt-8">
        <div class="flex items-center">
         
<img src="https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg" class="mr-2 ml-2" alt="" width="30" height="30">
          <span class="mx-2 text-2xl font-semibold text-white">QuickBook Custom</span>
        </div>
      </div>

      <nav class="mt-10">
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'home' ? activeClass : inactiveClass]"
          to="/"
        >
          <svg
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
              fill="currentColor"
            />
            <path
              d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z"
              fill="currentColor"
            />
          </svg>

          <span class="mx-4">Accueil</span>
        </router-link >
        <router-link 
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'account' ? activeClass : inactiveClass]"
          to="/account">
        <span class="mx-4">Account</span>
        </router-link>
        <router-link 
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'invoice' ? activeClass : inactiveClass]"
          to="/invoice">
          <svg
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
              fill="currentColor"
            />
            <path
              d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
              fill="currentColor"
            />
            <path
              d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
              fill="currentColor"
            />
            <path
              d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
              fill="currentColor"
            />
          </svg>
        <span class="mx-4">Invoice</span>
        </router-link>
        <router-link 
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'item' ? activeClass : inactiveClass]"
          to="/item">
        <span class="mx-4">Item</span>
        </router-link>
        <router-link 
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'customer' ? activeClass : inactiveClass]"
          to="/customer">
        <span class="mx-4">Customer</span>
        </router-link>
        <router-link 
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'vendor' ? activeClass : inactiveClass]"
          to="/vendor">
        <span class="mx-4">Vendor</span>
        </router-link>

        <router-link 
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'stock' ? activeClass : inactiveClass]"
          to="/stock">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
          </svg>
        <span class="mx-4">Stock</span>
        </router-link>
        <router-link 
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'employee' ? activeClass : inactiveClass]"
          to="/employee">
        <span class="mx-4">Employee</span>
        </router-link>
<!-- 
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'invoice' ? activeClass : inactiveClass]"
          to="/invoice"
        >
          <svg
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
              fill="currentColor"
            />
            <path
              d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
              fill="currentColor"
            />
            <path
              d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
              fill="currentColor"
            />
            <path
              d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
              fill="currentColor"
            />
          </svg>
          <span class="mx-4">Invoice</span>
        </router-link>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'worker' ? activeClass : inactiveClass]"
          to="/dette"
        >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M12 9h.01"></path>
          <path d="M11 12h1v4h1"></path>
        </svg>
          <span class="mx-4">Worker</span>
        </router-link> -->

        <!-- <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'facturation' ? activeClass : inactiveClass]"
          to="/compan"
        >
          <svg
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H7Z"
              fill="currentColor"
            />
            <path
              d="M4 7C4 6.44772 4.44772 6 5 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H5C4.44772 8 4 7.55228 4 7Z"
              fill="currentColor"
            />
            <path
              d="M2 11C2 9.89543 2.89543 9 4 9H16C17.1046 9 18 9.89543 18 11V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V11Z"
              fill="currentColor"
            />
          </svg>

          <span class="mx-4">Facturation</span>
        </router-link> -->
          <!-- <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'marketeur' ? activeClass : inactiveClass]"
          to="/marketeur"
        >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>

          <span class="mx-4">Marketeur Agent</span>
        </router-link>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'stock' ? activeClass : inactiveClass]"
          to="/stock"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
          </svg>

          <span class="mx-4">Stock</span>
        </router-link>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'taux' ? activeClass : inactiveClass]"
          to="/taux"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            />
          </svg>
          <span class="mx-4">Taux</span>
        </router-link>
        <router-link
            class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === 'versement' ? activeClass : inactiveClass]"
            to="/versement"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
                fill="currentColor"
              />
              <path
                d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
                fill="currentColor"
              />
              <path
                d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
                fill="currentColor"
              />
              <path
                d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
                fill="currentColor"
              />
            </svg>
            <span class="mx-4">Versement</span>
          </router-link> -->
      </nav>
    </div>
  </div>
</template>
