<template>
  <div
    class="
      flex flex-col flex-no-wrap
      justify-start
      bg-blue
      h-84
      rounded-lg
      shadow-md
      p-4
      sm:p-6
      text-white
    "
  >
    <div>
      <a :href="reference.links[reference.links.length - 1].url">
        <div class="h-12 w-12 inline-block align-middle">
          <img
            :src="require(`@/assets/icons/${reference.icon}`)"
            :alt="reference.alt + ' Logo'"
            class="h-full w-full rounded-lg"
          />
        </div>
      </a>
      <p class="text-gray-300 ml-3 inline-block">{{ reference.type }}</p>
    </div>
    <h3 class="my-3 text-lg">{{ reference.title }}</h3>
    <p class="overflow-y-auto">{{ reference.excerpt }}</p>
    <ToolList v-if="reference.tools" :tools="referenceTools" class="mt-auto" />
    <div class="mt-3">
      <div class="float-right mt-3">
        <a
          v-for="link in reference.links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener"
          class="
            text-lg
            tracking-wider
            font-bold
            py-1
            px-3
            -mb-1
            hover:underline
          "
          >{{ link.text }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import ToolList from "../ToolList.vue";

export default {
  name: "ReferenceElement",
  components: {
    ToolList,
  },
  props: {
    reference: Object,
    tools: Object,
  },
  computed: {
    referenceTools() {
      return this.reference.tools.map(
        (tool) => this.tools[tool] ?? { text: tool }
      );
    },
  },
};
</script>
