<template>
  <div
    class="block rounded-full h-8 mb-3 float-left cursor-pointer"
    v-bind:class="{ active: active, inactive: !active, [size]: true }"
    v-on:click="$emit('click')"
  ></div>
</template>

<script>
export default {
  name: "TimelineBlock",
  props: {
    active: Boolean,
    size: String,
  },
};
</script>

<style scoped>
.block:hover,
.block:active,
.active {
  @apply bg-blue shadow-lg;
  transform: translateY(-2px);
}

.inactive {
  @apply bg-blue-lighter;
}
</style>
