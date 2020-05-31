<template>
  <div id="skills" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <StackCard v-for="stack of stacks" v-bind:key="stack.title" v-bind:stack="stack" />
  </div>
</template>

<script>
import StackCard from "./StackCard.vue";

export default {
  name: "StackSection",
  components: {
    StackCard
  },
  props: {
    stacks: Array
  }
};
</script>
