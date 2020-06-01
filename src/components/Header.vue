<template>
  <header class="flex flex-no-wrap h-20 sm:h-32">
    <div class="w-20 sm:w-32">
      <img :src="require('@/assets/formal_square_320.jpg')" class="rounded-full" />
    </div>
    <div class="ml-4 sm:ml-8 mt-3 sm:mt-8">
      <h1 class="text-lg sm:text-2xl mb-2">Fabian Böller</h1>
      <h2 class="text-sm sm:text-lg text-gray-300">Senior Software Engineer</h2>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
