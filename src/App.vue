<template>
  <div id="app" class="container mx-auto px-6 leading-snug overflow-hidden">
    <Header />
    <div class="clear-both"></div>
    <StackSection :stacks="stacks" class="my-8" />
    <RoleTimeline :roles="roles" class="my-8" />
    <ReferenceGrid class="my-8" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import StackSection from "./components/StackSection.vue";
import RoleTimeline from "./components/timeline/RoleTimeline.vue";
import ReferenceGrid from "./components/reference-grid/ReferenceGrid.vue";
import stacks from "./data/stacks.json";
import roles from "./data/roles.json";

export default {
  name: "App",
  data: function() {
    return {
      stacks,
      roles
    };
  },
  components: {
    Header,
    StackSection,
    RoleTimeline,
    ReferenceGrid
  }
};
</script>
