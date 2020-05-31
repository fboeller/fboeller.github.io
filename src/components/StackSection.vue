<template>
  <div id="skills" class="my-8 flex flex-wrap justify-between">
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
