<template>
    <div class="container flex flex-col items-center mt-10">
        <h1 class="text-3xl mb-3 text-Slate-200 font-semibold">
            Sorry, this page does not exist!
        </h1>
        <router-link class="font-general-medium shadow-b-white sm flex items-center px-4 py-2 rounded-lg  bg-white hover:shadow-lg focus:ring-1 focus:ring-Sky-900 font-normal  text-Sky-400 text-lg sm:text-xl duration-500" :to="{name:'Home'}">
            Back to Base
        </router-link>
    </div>
</template>
