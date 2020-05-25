<template>
  <div class="px-6 py-4 h-40 text-white">
    <h3 class="mb-3 text-lg">{{ title }}</h3>
    <div class="flex flex-wrap justify-between">
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
    Tool,
  },
  props: {
    title: String,
    tools: Array
  },
};
</script>
