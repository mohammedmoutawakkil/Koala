<script setup lang="ts">
import { computed, ref } from "@vue/runtime-core";
import HeaderService from "../../services/headService";
const { links } = HeaderService();
</script>
<template>
  <section
    class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-3/5 text-left">
      <h1 class="font-bold text-center sm:text-left uppercase">
        <span class="text-white duration-70 text-3xl md:text-3xl xl:text-6xl">
          KOALA
        </span>
      </h1>
      <h1 class="font-bold text-center sm:text-left uppercase">
        <span
          class="text-green-600 duration-70 text-3xl md:text-3xl xl:text-6xl"
        >
          INTELLIGENCE
        </span>
      </h1>
      <h1 class="font-bold text-center sm:text-left uppercase">
        <span class="text-white duration-70 text-3xl md:text-3xl xl:text-6xl">
          AGENCY
        </span>
      </h1>
      <p
        class="font-medium mt-5 leading-9 text-lg text-center sm:text-left text-gray-400"
      >
        A Collection of 20 lazy developers with their unique skillsets Their
        mission is to make the best for you.
      </p>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/5 text-right float-right">
      <img src="/src/assets/images/background_dark.png" alt="Koala" />
    </div>

    <div class="flex-col justify-center sm:block">
      <a
        v-for="item in links"
        :key="item.id"
        download="Stoman-Resume.pdf"
        :href="item.href"
        class="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 flex justify-center items-center w-16 mt-12 mb-6 sm:mb-0 text-lg p-6 sm:p-5 shadow-lg rounded-full bg-Slate-500 focus:ring-1 text-black hover:text-Slate-300 duration-500"
        aria-label="Download Resume"
        target="_blank"
      >
        <fa :icon="['fab', item.icon]" />
      </a>
    </div>
  </section>
</template>
