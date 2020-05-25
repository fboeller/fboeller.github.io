<template>
  <div
    id="languages"
    class="bg-blue h-64 w-84 mr-8 flex-none rounded-lg shadow-sm"
  >
    <div
      class="w-full h-24 bg-cover rounded-t-lg"
      v-bind:style="{
        backgroundImage: 'url(' + require(`@/assets/${image}`) + ')',
      }"
    ></div>
    <SkillList v-bind:title="title" v-bind:tools="tools" />
  </div>
</template>

<script>
import SkillList from "./SkillList.vue";

export default {
  name: "SkillCard",
  components: {
    SkillList,
  },
  props: {
    title: String,
    image: String,
    tools: Array,
  },
};
</script>
