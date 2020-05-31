<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <MediumArticle />
  </div>
</template>

<script>
import MediumArticle from './MediumArticle.vue';

export default {
  name: "ReferenceGrid",
  components: {
      MediumArticle
  }
};
</script>
