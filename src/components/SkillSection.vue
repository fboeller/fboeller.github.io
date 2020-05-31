<template>
  <div id="skills" class="my-8 flex flex-no-wrap scroll-x">
    <SkillCard v-for="skill of skills" v-bind:key="skill.title" v-bind:skill="skill" />
  </div>
</template>

<script>
import SkillCard from "./SkillCard.vue";

export default {
  name: "SkillSection",
  components: {
    SkillCard
  },
  props: {
    skills: Array
  }
};
</script>

<style scoped>
.scroll-x {
  @apply overflow-y-hidden overflow-x-scroll;
  scrollbar-width: none;
}

.scroll-x::-webkit-scrollbar {
  display: none;
}
</style>
