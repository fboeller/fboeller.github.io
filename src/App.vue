<template>
  <div id="app" class="container mx-auto px-6 leading-snug overflow-hidden">
    <Header />
    <div class="clear-both"></div>
    <StackSection v-bind:stacks="stacks" class="my-8" />
    <RoleTimeline v-bind:roles="roles" class="my-8" />
    <SkillSection v-bind:skills="skills" class="my-8" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import StackSection from "./components/StackSection.vue";
import RoleTimeline from "./components/timeline/RoleTimeline.vue";
import SkillSection from "./components/SkillSection.vue";
import stacks from "./data/stacks.json";
import roles from "./data/roles.json";
import skills from "./data/skills.json";

export default {
  name: "App",
  data: function() {
    return {
      stacks,
      roles,
      skills
    };
  },
  components: {
    Header,
    StackSection,
    RoleTimeline,
    SkillSection
  }
};
</script>
