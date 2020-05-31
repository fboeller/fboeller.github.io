<template>
  <header class="py-5">
    <div class="h-32 w-32 float-left">
      <img
        :src="require('@/assets/formal_square_320.jpg')"
        class="rounded-full"
      />
    </div>
    <div class="ml-4 mt-6 float-left">
      <h1 class="text-2xl mb-2">Fabian Böller</h1>
      <h2 class="text-lg text-gray-300">Senior Software Engineer</h2>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
