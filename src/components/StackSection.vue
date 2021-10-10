<template>
  <div id="skills" class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
    <StackCard
      v-for="stack of stacks"
      :key="stack.title"
      :stack="stack"
      :tools="tools"
    />
  </div>
</template>

<script>
import StackCard from "./StackCard.vue";

export default {
  name: "StackSection",
  components: {
    StackCard,
  },
  props: {
    stacks: Array,
    tools: Object,
  },
};
</script>
