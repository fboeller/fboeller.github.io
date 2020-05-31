<template>
  <div class="px-6 py-5 text-white">
    <h3 class="mb-3 text-lg">{{ title }}</h3>
    <p v-if="text" class="text-gray-300 mb-3">{{ text }}</p>
    <div class="grid grid-cols-2 gap-4">
      <Tool
        v-for="tool of tools"
        v-bind:key="tool.text"
        v-bind:text="tool.text"
        v-bind:image="tool.image"
      />
    </div>
  </div>
</template>

<script>
import Tool from "./Tool.vue";

export default {
  name: "SkillList",
  components: {
    Tool
  },
  props: {
    title: String,
    text: String,
    tools: Array
  }
};
</script>
