<template>
  <div
    class="flex flex-col flex-no-wrap justify-start bg-blue h-72 rounded-lg shadow-md p-6 text-white"
  >
    <div>
      <div class="h-12 w-12 inline-block align-middle">
        <img :src="require(`@/assets/icons/${reference.icon}`)" class="h-full w-full" />
      </div>
      <p class="text-gray-300 ml-3 inline-block">{{ reference.type }}</p>
    </div>
    <h3 class="my-3 text-lg">{{ reference.title }}</h3>
    <p class="overflow-y-scroll">{{ reference.excerpt }}</p>
    <div class="mt-auto">
      <a
        :href="reference.url"
        target="_blank"
        class="float-right text-lg tracking-wider font-bold py-1 px-3 -mb-1 rounded-lg mt-3 hover:bg-blue-lighter"
      >Read more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReferenceElement",
  props: {
    reference: Object
  }
};
</script>
