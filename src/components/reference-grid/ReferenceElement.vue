<template>
  <div
    class="flex flex-col flex-no-wrap justify-start bg-blue h-72 rounded-lg shadow-md p-4 sm:p-6 text-white"
  >
    <div>
      <div class="h-12 w-12 inline-block align-middle">
        <img :src="require(`@/assets/icons/${reference.icon}`)" class="h-full w-full" />
      </div>
      <p class="text-gray-300 ml-3 inline-block">{{ reference.type }}</p>
    </div>
    <h3 class="my-3 text-lg">{{ reference.title }}</h3>
    <p class="overflow-y-scroll">{{ reference.excerpt }}</p>
    <ToolList v-if="reference.tools" :tools="reference.tools" class="mt-5" />
    <div class="mt-auto">
      <div class="float-right mt-3">
        <a
          v-for="link in reference.links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          class="text-lg tracking-wider font-bold py-1 px-3 -mb-1 rounded-lg hover:bg-blue-lighter"
        >{{ link.text }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import ToolList from "../ToolList.vue";

export default {
  name: "ReferenceElement",
  components: {
    ToolList
  },
  props: {
    reference: Object
  }
};
</script>
