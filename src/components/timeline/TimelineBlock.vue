<template>
  <div
    class="block rounded-full h-8 float-left cursor-pointer"
    :class="{ active: active, inactive: !active }"
    @click="$emit('click')"
    @mouseover="$emit('mouseover')"
    @mouseleave="$emit('mouseleave')"
  ></div>
</template>

<script>
export default {
  name: "TimelineBlock",
  props: {
    active: Boolean
  }
};
</script>

<style scoped>
.block:hover {
  @apply shadow-xl;
  transform: translateY(-5px);
}

.active {
  @apply bg-blue shadow-lg;
  transform: translateY(-2px);
}

.inactive {
  @apply bg-blue-lighter;
}
</style>
