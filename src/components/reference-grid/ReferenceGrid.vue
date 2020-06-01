<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <MediumArticle :article="references[0]" />
    <MediumArticle :article="references[1]" />
    <StackOverflowAnswer :answer="references[2]" />
  </div>
</template>

<script>
import MediumArticle from "./MediumArticle.vue";
import StackOverflowAnswer from "./StackOverflowAnswer.vue";

export default {
  name: "ReferenceGrid",
  components: {
    MediumArticle,
    StackOverflowAnswer
  },
  props: {
    references: Array
  }
};
</script>
