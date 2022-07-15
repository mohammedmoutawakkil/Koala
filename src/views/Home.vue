<script setup lang="ts">
import Head from "../layouts/Home/Head.vue";
</script>

<template>
  <div class="container mx-auto">
    <Head />
  </div>
  <div class="bg-Slate-200 element text-center my-10">
    <h1 class="font-bold text-3xl">Skills</h1>
    <div
      class="flex flex-col sm:flex-row justify-center sm:justify-between py-10 px-28 font-semibold text-Slate-700"
    >
      <div class="flex flex-col justify-center sm:justify-between">
        <img
          src="/src/assets/images/skills/FullStuck.svg"
          alt=""
          class="w-52 h-52 drop-shadow-lg"
        />
        <div>
          <span>Full Stuck development</span>
        </div>
      </div>
      <div class="flex flex-col justify-center sm:justify-between">
        <img
          src="/src/assets/images/skills/mobile.svg"
          alt=""
          class="w-52 h-52 drop-shadow-lg"
        />
        <div>
          <span>Mobile app development</span>
        </div>
      </div>
      <div class="flex flex-col justify-center sm:justify-between">
        <img
          src="/src/assets/images/skills/GD.svg"
          alt=""
          class="w-52 h-52 drop-shadow-lg"
        />
        <div>
          <span>Graphic Design</span>
        </div>
      </div>
    </div>
  </div>
  <!-- Projects -->
  <div class="container mx-auto">
    <div class="my-16">
      <h1 class="font-bold text-3xl text-Slate-100 text-center">
        Featured work
      </h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-9 text-white">
      <a href="https://mwk.vercel.app" class="bg-gray-800" target="_blank">
        <div class="p-6 text-center font-semibold">
          <p>Portfolio Dev</p>
        </div>
        <div >
          <img src="/src/assets/images/projects/portfolio.png" class="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:rounded  shadow-lg focus:ring-1 duration-500" alt="">
        </div>
        <div class="p-6 text-center font-semibold">
          <p>An open source portfolio for developers</p>
        </div>
      </a>
      <a href="https://mwk.vercel.app" class="bg-gray-800" target="_blank">
        <div class="p-6 text-center font-semibold">
          <p>Template</p>
        </div>
        <div >
          <img src="/src/assets/images/projects/coffeeTemplate.png" class="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:rounded  shadow-lg focus:ring-1 duration-500" alt="">
        </div>
        <div class="p-6 text-center font-semibold">
          <p>An open source Template</p>
        </div>
      </a>
      <a href="http://laureats.fsjes-umi.ac.ma/" class="bg-gray-800" target="_blank">
        <div class="p-6 text-center font-semibold">
          <p>Laureats</p>
        </div>
        <div >
          <img src="/src/assets/images/projects/laureats.png" class="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:rounded  shadow-lg focus:ring-1 duration-500" alt="">
        </div>
        <div class="p-6 text-center font-semibold">
          <p>A web site for managing graduate students and collecting certain Information on them.</p>
        </div>
      </a>
    </div>
    <div class="mt-10 sm:mt-20 flex justify-center">
			<a
				href="https://mwk.vercel.app/projects"
				class="font-general-medium shadow-b-sky sm flex items-center px-6 py-3 rounded-lg  bg-Sky-400 hover:shadow-lg focus:ring-1 focus:ring-Sky-900  text-white text-lg sm:text-xl duration-500"
				aria-label="More Projects"
        target="_blank"
			>
				<button>More Projects</button>
			</a>
		</div>
  </div>
  <!-- Projects -->
  <!-- Frameworks -->
  <div class="bg-Slate-200 element text-center my-10 p-20">
    <h1 class="font-bold text-3xl">Some frameworks that we use</h1>
    <div
      class="flex flex-col sm:flex-row justify-center sm:justify-between py-10 px-28 font-semibold text-Slate-700"
    >
      <div class="flex flex-col justify-center">
        <img
          src="/src/assets/images/frameworks/nestjs.svg"
          alt=""
          class="w-20 h-20 drop-shadow-lg"
        />
      </div>
      <div class="flex flex-col justify-center">
        <img
          src="/src/assets/images/frameworks/vuejs.png"
          alt=""
          class="w-20 h-20 drop-shadow-lg"
        />
      </div>
      <div class="flex flex-col justify-center">
        <img
          src="/src/assets/images/frameworks/react.svg"
          alt=""
          class="w-20 h-20 drop-shadow-lg"
        />
      </div>
      <div class="flex flex-col justify-center">
        <img
          src="/src/assets/images/frameworks/laravel.svg"
          alt=""
          class="w-20 h-20 drop-shadow-lg"
        />
      </div>
      <div class="flex flex-col justify-center">
        <img
          src="/src/assets/images/frameworks/flutter.svg"
          alt=""
          class="w-20 h-20 drop-shadow-lg"
        />
      </div>
      <div class="flex flex-col justify-center">
        <img
          src="/src/assets/images/frameworks/xamarin.svg"
          alt=""
          class="w-20 h-20 drop-shadow-lg"
        />
      </div>
    </div>
  </div>
  <!-- Frameworks -->
  <!-- Find US -->
  <div>
    <div>
      <h1 class="text-Slate-200 text-center text-3xl font-semibold">
        You Can Find US 📍
      </h1>
    </div>
    <div class="px-24">
      <iframe
      class="rounded my-28 w-full shadow-green-300 shadow-2xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52997.37252739048!2d-5.538020199999999!3d33.881004999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044d23bfc49d1%3A0xfbbf80a99e4cde18!2sMeknes!5e0!3m2!1sen!2sma!4v1657797536302!5m2!1sen!2sma"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  <!-- Find US -->
</template>

<style scoped>
.element {
  padding: 8rem 1rem 7rem;
  clip-path: polygon(0% 14%, 100% 0px, 100% 84%, 0px 100%);
}

</style>
