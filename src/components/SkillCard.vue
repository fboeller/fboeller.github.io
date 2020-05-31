<template>
  <div id="languages" class="bg-blue h-72 w-84 mr-8 flex-none elevated">
    <div
      v-if="skill.image"
      class="w-full h-32 bg-cover rounded-t-lg"
      v-bind:style="{
        backgroundImage: 'url(' + require(`@/assets/${skill.image}`) + ')',
      }"
    ></div>
    <SkillList v-bind:title="skill.title" v-bind:text="skill.text" v-bind:tools="skill.tools" />
  </div>
</template>

<script>
import SkillList from "./SkillList.vue";

export default {
  name: "SkillCard",
  components: {
    SkillList
  },
  props: {
    skill: Object
  }
};
</script>
