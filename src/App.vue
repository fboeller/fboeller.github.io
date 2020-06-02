<template>
  <div id="app" class="container mx-auto px-4 sm:px-8 leading-snug overflow-hidden">
    <Header class="my-4 sm:my-8" />
    <StackSection :stacks="stacks" class="my-4 sm:my-8" />
    <RoleTimeline :roles="roles" class="my-4 sm:my-8" />
    <ReferenceGrid :references="references" class="my-4 sm:my-8" />
    <Footer class="my-4 sm:my-8" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import StackSection from "./components/StackSection.vue";
import RoleTimeline from "./components/timeline/RoleTimeline.vue";
import ReferenceGrid from "./components/reference-grid/ReferenceGrid.vue";
import stacks from "./data/stacks.json";
import roles from "./data/roles.json";
import references from "./data/references.json";

export default {
  name: "App",
  data: function() {
    return {
      stacks,
      roles,
      references
    };
  },
  components: {
    Header,
    Footer,
    StackSection,
    RoleTimeline,
    ReferenceGrid
  }
};
</script>
