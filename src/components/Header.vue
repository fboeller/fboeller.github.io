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
      <a
        class="rounded-lg pl-1 pr-4 py-1 bg-blue shadow-md cursor-pointer inline-block hover:border-opacity-100 border-opacity-0 border border-gray-300 border-solid"
        :href="link"
      >
        <div class="h-12 w-12 inline-block align-middle">
          <img :src="require(`@/assets/icons/${icon}`)" class="h-full w-full rounded-lg" />
        </div>
        <p class="ml-3 inline-block">{{ text }}</p>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      text: "fboeller",
      icon: "github.svg",
      link: "https://github.com/fboeller"
    };
  }
};
</script>
