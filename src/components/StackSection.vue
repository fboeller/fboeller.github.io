<template>
  <div id="skills" class="my-8 flex flex-wrap justify-between">
    <SkillCard v-for="stack of stacks" v-bind:key="stack.title" v-bind:skill="stack" />
  </div>
</template>

<script>
import SkillCard from "./SkillCard.vue";

export default {
  name: "StackSection",
  components: {
    SkillCard
  },
  props: {
    stacks: Array
  }
};
</script>

<style scoped>
</style>
