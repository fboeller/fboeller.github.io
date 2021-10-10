<template>
  <div
    class="bg-blue h-64 flex-initial rounded-lg shadow-md p-4 md:p-6 text-white"
  >
    <h3 class="mb-3 text-lg">{{ stack.title }}</h3>
    <p v-if="stack.text" class="text-gray-300 mb-4">{{ stack.text }}</p>
    <ToolList :tools="stackTools" />
  </div>
</template>

<script>
import ToolList from "./ToolList.vue";

export default {
  name: "StackCard",
  components: {
    ToolList,
  },
  props: {
    stack: Object,
    tools: Object,
  },
  computed: {
    stackTools() {
      return this.stack.tools.map((tool) => this.tools[tool] ?? { text: tool });
    },
  },
};
</script>
