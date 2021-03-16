<template>
  <a :href="tool.url" target="_blank" rel="noopener" class="relative inline-block h-8 w-32">
    <img
      :src="require(`@/assets/${tool.image}`)"
      :alt="tool.text + ' Logo'"
      class="inline h-8 w-8 rounded-lg"
      :class="tool.imageClasses"
    />
    <p class="absolute">{{ tool.text }}</p>
  </a>
</template>

<script>
export default {
  name: "Tool",
  props: {
    tool: Object
  }
};
</script>

<style scoped>
a p {
  left: 45px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
