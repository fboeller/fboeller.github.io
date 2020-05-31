<template>
  <div id="languages" class="bg-blue h-72 w-84 flex-none elevated">
    <div
      v-if="stack.image"
      class="w-full h-32 bg-cover rounded-t-lg"
      v-bind:style="{
        backgroundImage: 'url(' + require(`@/assets/${stack.image}`) + ')',
      }"
    ></div>
    <SkillList v-bind:title="stack.title" v-bind:text="stack.text" v-bind:tools="stack.tools" />
  </div>
</template>

<script>
import SkillList from "./SkillList.vue";

export default {
  name: "StackCard",
  components: {
    SkillList
  },
  props: {
    stack: Object
  }
};
</script>
