<template>
  <div >
    <div>
      <nav
        class="
          py-8
          mx-auto
          lg:flex lg:justify-between lg:items-center
        "
      >
      <div class="max-w-6xl md:ml-40 ">
        <div class="flex items-center justify-between">
          
          <router-link
            :to="{name:'Home'}"
            class="
              text-xl
              font-tangerine
              text-gray-800
              md:text-2xl
              jo
            "
            ><p class="text-5xl text-white">Koala <span class=" text-green-400">.</span></p>
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex lg:hidden">
            <button
              type="button"
              class="
                text-gray-600
                hover:text-gray-400
                mr-9
              "
            >
              <fa :icon="['fa','bars']" />
            </button>
          </div>
        </div>
      </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            lg:flex
            lg:space-y-0
            lg:flex-row
            lg:items-center
            lg:space-x-10
            lg:mt-0
            lg:mr-64
            py-5 px-9
          "
        >
          <li class="text-center sm:text-lg">
            <router-link :to="{name:'Home'}"  class="text-center py-2 text-Slate-300   font-medium hover:text-Sky-400 transition duration-300 ">Home</router-link>
          </li>
          <li class="text-center sm:text-lg">
            <router-link :to="{name:'About'}"  class="text-center py-2 text-Slate-300  font-medium hover:text-Sky-400  transition duration-300 ">About</router-link>
          </li>
          <li class="text-center sm:text-lg">
            <router-link :to="{name:'ContactUS'}"  class="text-center py-2 text-Slate-300   font-medium hover:text-Sky-400  transition duration-300 ">Contact Us</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from '@vue/runtime-core';
//Mobile Vue
const showMenu=ref(false);
</script>

<style scoped>
li a {
    background-image: linear-gradient( 180deg, white 0, white) !important;
    background-position: 0  100% !important;
    background-repeat: repeat-x !important;
    background-size: 1px 2px  !important;
    transition: background-size 0.3s !important;
}

li a:hover {
    background-image: linear-gradient( 180deg, rgb(56, 189, 248) 0, rgb(40, 151, 211)) !important;
    background-size: 100% 10px  !important;
}
</style>