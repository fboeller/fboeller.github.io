<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <MediumArticle :article="articles[0]" />
    <MediumArticle :article="articles[1]" />
  </div>
</template>

<script>
import MediumArticle from "./MediumArticle.vue";

export default {
  name: "ReferenceGrid",
  components: {
    MediumArticle
  },
  props: {
    articles: Array
  }
};
</script>
