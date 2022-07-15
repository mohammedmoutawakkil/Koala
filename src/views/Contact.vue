<script setup lang="ts">
import { ref } from "@vue/reactivity";
import useVuelidate from "@vuelidate/core";
import { VueRecaptcha } from "vue-recaptcha";
import ContactService from "../services/contactService";
const { rules, state, recaptchaKey, globalerror } = ContactService();
const v$ = useVuelidate(rules, state);
const sendMessage = () => {
  const result = v$.value.$validate();
};
</script>

<template>
  <div class="container mx-auto mt-20">
    <div class="my-6">
      <h1 class="text-5xl font-bold text-Slate-200">Contact Us</h1>
    </div>
    <div class="p-0 md:p-7">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <form @submit.prevent>
            <div class="mb-6">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-Slate-200"
                >Full name:</label
              >
              <input
                type="text"
                id="name"
                v-model="state.fullname"
                :class="
                  v$.fullname.$errors.length
                    ? 'border-red-600'
                    : 'border-gray-300'
                "
                class="uppercase border bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <div
                class="input-errors"
                v-for="error of v$.fullname.$errors"
                :key="error.$uid"
              >
                <span class="mb-3 text-sm text-red-600">{{
                  error.$message
                }}</span>
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-Slate-200"
                >Email</label
              >
              <input
                type="text"
                id="email"
                v-model="state.email"
                :class="
                  v$.email.$errors.length ? 'border-red-600' : 'border-gray-300'
                "
                class="border bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
              />
              <div
                class="input-errors"
                v-for="error of v$.email.$errors"
                :key="error.$uid"
              >
                <span class="mb-3 text-sm text-red-600">{{
                  error.$message
                }}</span>
              </div>
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-Slate-200"
                >Message</label
              >
              <textarea
                id="message"
                rows="4"
                v-model="state.message"
                :class="
                  v$.message.$errors.length
                    ? 'border-red-600'
                    : 'border-gray-300'
                "
                class="uppercase block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              <div
                class="input-errors"
                v-for="error of v$.message.$errors"
                :key="error.$uid"
              >
                <span class="mb-3 text-sm text-red-600">{{
                  error.$message
                }}</span>
              </div>
            </div>
            <!-- use recaptcha -->
            <!-- <VueRecaptcha
            class="mt-3"
            :sitekey="recaptchaKey"
            :load-recaptcha-script="true"
            @verify="sendMessage"
            @error="globalerror = 'Are you a robot?'"
          > -->
            <button
              class="font-general-medium shadow-b-sky w-full sm:w-24 py-1 rounded-lg bg-Sky-400 hover:shadow-lg focus:ring-1 focus:ring-Sky-900 font-normal text-white text-md duration-500"
              @click="sendMessage"
            >
              Send
            </button>
            <!-- </VueRecaptcha> -->
            <!-- use recaptcha -->
          </form>
        </div>
        <!-- About profile image -->
        <div>
          <iframe
            class="rounded-xl w-full mb-7 sm:mb-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105994.76966671569!2d-5.608060329985909!3d33.88098518728597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044d23bfc49d1%3A0xfbbf80a99e4cde18!2sMeknes!5e0!3m2!1sen!2sma!4v1647539302306!5m2!1sen!2sma"
            width="600"
            height="450"
            style="border: 0"
            loading="lazy"
            :allowfullscreen="false"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
