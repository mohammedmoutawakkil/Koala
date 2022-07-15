<script setup lang="ts">
import FooterCopyright from "./FooterCopyright.vue";
import FooterService from "../../services/footerService";
const { scrollToTop, socials } = FooterService();
</script>

<template>
  <div class="container mx-auto">
    <div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-Slate-200">
      <!-- Footer social links -->
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p
          class="font-general-semibold text-3xl sm:text-4xl font-semibold text-Slate-400 mb-5"
        >
          Follow Us
        </p>
        <ul class="flex flex-col md:flex-row justify-center">
          <a
            v-for="social in socials"
            :key="social.id"
            :href="social.url"
            target="__blank"
            :class="social.class"
            class="text-Slate-400 cursor-pointer rounded-lg shadow-sm p-4 duration-600 text-center"
          >
            <p>{{ social.name }}</p>
          </a>
        </ul>
        <button
          @click="scrollToTop"
          class="shadow-lg bg-green-900 text-white outline-none rounded-full mt-5 p-3"
        >
          <fa :icon="['fa', 'chevron-up']" />
        </button>
      </div>

      <!-- Footer copyright -->
      <FooterCopyright />
    </div>
  </div>
</template>

<style scoped></style>
