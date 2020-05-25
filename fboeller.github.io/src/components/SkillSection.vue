<template>
  <div id="skills" class="my-8 flex flex-no-wrap scroll-x">
    <SkillCard
      v-for="skill of skills"
      v-bind:key="skill.title"
      v-bind:title="skill.title"
      v-bind:image="skill.image"
      v-bind:tools="skill.tools"
    />
  </div>
</template>

<script>
import SkillCard from "./SkillCard.vue";

export default {
  name: "SkillSection",
  components: {
    SkillCard,
  },
  props: {
    skills: Array,
  },
};
</script>
