<template>
  <a :href="tool.url" target="_blank" class="h-8 w-32">
    <div class="h-8 w-8 inline-block align-middle" :class="tool.imageClasses">
      <img :src="require(`@/assets/${tool.image}`)" class="h-full w-full" />
    </div>
    <span class="ml-2">{{ tool.text }}</span>
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
