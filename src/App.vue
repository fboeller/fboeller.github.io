<template>
  <div id="app" class="container mx-auto px-6 leading-snug overflow-hidden">
    <Header />
    <div class="clear-both"></div>
    <SkillSection v-bind:skills="skills" />
    <RoleTimeline v-bind:roles="roles" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SkillSection from "./components/SkillSection.vue";
import RoleTimeline from "./components/RoleTimeline.vue";
import skills from "./data/skills.json";
import roles from "./data/roles.json";

export default {
  name: "App",
  data: function() {
    return {
      skills,
      roles
    };
  },
  components: {
    Header,
    SkillSection,
    RoleTimeline
  }
};
</script>
