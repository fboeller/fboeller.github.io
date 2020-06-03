<template>
  <header class="flex flex-wrap justify-between">
    <div class="flex flex-no-wrap">
      <div class="w-20 sm:w-32 h-20 sm:h-32">
        <img :src="require('@/assets/formal_square_320.jpg')" class="rounded-full" />
      </div>
      <div class="ml-4 sm:ml-8 mt-3 sm:mt-8">
        <h1 class="text-lg sm:text-2xl mb-2">Fabian Böller</h1>
        <h2 class="text-sm sm:text-lg text-gray-300">Senior Software Engineer</h2>
      </div>
    </div>
    <div class="mt-4 w-full lg:w-auto lg:my-auto w-30 grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
      <SocialLink v-for="link of socialLinks" :key="link.url" :link="link" />
    </div>
  </header>
</template>

<script>
import SocialLink from "./SocialLink.vue";

export default {
  name: "Header",
  components: {
    SocialLink
  },
  props: {
    socialLinks: Array
  }
};
</script>
