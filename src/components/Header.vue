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
    <div class="my-auto w-30 grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
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
        },
        {
          text: "fabianboeller",
          icon: "linkedin.png",
          url: "https://www.linkedin.com/in/fabianboeller/"
        },
        {
          text: "@fabianboeller",
          icon: "medium.svg",
          url: "https://medium.com/@fabianboeller"
        },
        {
          text: "Fabian Böller",
          icon: "meetup.png",
          url: "https://www.meetup.com/members/258109056/"
        },
        {
          text: "F. Böller",
          icon: "stack-overflow.svg",
          url: "https://stackoverflow.com/users/3699131/f-b%c3%b6ller"
        }
      ]
    };
  }
};
</script>
