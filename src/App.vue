<script setup lang="ts">
import NavbarVue from './layouts/Navbar/Navbar.vue';
import { computed} from '@vue/runtime-core';
import Footer from './layouts/Footer/Footer.vue';
</script>

<template>
  <div>
    <div  class="bg-gradient-to-br from-green-900 via-black to-black  transition duration-700">   
    <NavbarVue></NavbarVue>
    <router-view></router-view>
    <div class="container mx-auto px-5">
    <Footer></Footer>
    </div>
    </div>
  </div>
</template>
