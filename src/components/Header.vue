<template>
  <header class="flex flex-wrap justify-between h-20 sm:h-32">
    <div class="flex flex-no-wrap">
      <div class="w-20 sm:w-32">
        <img :src="require('@/assets/formal_square_320.jpg')" class="rounded-full" />
      </div>
      <div class="ml-4 sm:ml-8 mt-3 sm:mt-8">
        <h1 class="text-lg sm:text-2xl mb-2">Fabian Böller</h1>
        <h2 class="text-sm sm:text-lg text-gray-300">Senior Software Engineer</h2>
      </div>
    </div>
    <div class="my-auto w-30">
      <SocialLink v-for="link of links" :key="link.url" :link="link" />
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
  data: function() {
    return {
      links: [
        {
          text: "fboeller",
          icon: "github.svg",
          url: "https://github.com/fboeller"
        }
      ]
    };
  }
};
</script>
