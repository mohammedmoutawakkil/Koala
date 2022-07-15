<script setup lang="ts">
import { ref } from "@vue/reactivity";
const copyrightDate = ref(new Date().getFullYear());
const projectName = ref("Vue.js & TailwindCSS Portfolio");
const author = ref("MWK");
</script>

<template>
  <div class="text-center">
    <div class="font-general-regular text-lg text-white">
      &copy; <a
        href="https://github.com/mohammedmoutawakkil"
        target="__blank"
        class="font-general-medium text-green-700 uppercase hover:underline hover:text-indigo-600 duration-500"
        >{{ author }}</a
      >
      {{ copyrightDate }}
      <p class="inline"> Open sourced on <a href="#"><fa  :icon="['fab','github']" class="mx-3"/></a> and deployed on <a href="#"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE5Ni41NzIlIiB5MT0iMjI4LjgxNSUiIHgyPSI1MCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTM1MC41IDE1MEw0MDcgMjUwSDI5NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOTQgLTE1MCkiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" class="mb-2 w-5 inline"></a></p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
