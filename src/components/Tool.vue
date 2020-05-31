<template>
  <div class="h-8 w-32">
    <div class="h-8 w-8 inline-block align-middle">
      <img :src="require(`@/assets/${image}`)" class="h-full w-full" />
    </div>
    <span class="ml-2">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "Tool",
  props: {
    text: String,
    image: String,
  },
};
</script>
