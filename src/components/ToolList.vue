<template>
  <div class="grid grid-cols-2 gap-4">
    <Tool v-for="tool of tools" :key="tool.text" :text="tool.text" :image="tool.image" />
  </div>
</template>

<script>
import Tool from "./Tool.vue";

export default {
  name: "ToolList",
  components: {
    Tool
  },
  props: {
    tools: Array
  }
};
</script>
