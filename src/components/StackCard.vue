<template>
  <div class="bg-blue h-64 flex-initial elevated p-6 text-white">
    <h3 class="mb-3 text-lg">{{ stack.title }}</h3>
    <p v-if="stack.text" class="text-gray-300 mb-4">{{ stack.text }}</p>
    <ToolList :tools="stack.tools" />
  </div>
</template>

<script>
import ToolList from "./ToolList.vue";

export default {
  name: "StackCard",
  components: {
    ToolList
  },
  props: {
    stack: Object
  }
};
</script>
