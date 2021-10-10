<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
    <ReferenceElement
      v-for="reference in references"
      :key="reference.title"
      :reference="reference"
      :tools="tools"
    />
  </div>
</template>

<script>
import ReferenceElement from "./ReferenceElement.vue";

export default {
  name: "ReferenceGrid",
  components: {
    ReferenceElement,
  },
  props: {
    references: Array,
    tools: Object,
  },
};
</script>
