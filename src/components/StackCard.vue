<template>
  <div class="bg-blue h-64 flex-initial elevated">
    <SkillList :title="stack.title" :text="stack.text" :tools="stack.tools" />
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
