<template>
  <div
    id="app"
    class="container mx-auto px-4 sm:px-8 leading-snug overflow-hidden"
  >
    <Header :socialLinks="socialLinks" class="my-4 sm:my-8" />
    <ReferenceGrid
      :references="references"
      :tools="tools"
      class="my-4 sm:my-8"
    />
    <RoleTimeline :roles="roles" :tools="tools" class="my-4 sm:my-8" />
    <StackSection :stacks="stacks" :tools="tools" class="my-4 sm:my-8" />
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
import socialLinks from "./data/social-links.json";
import roles from "./data/roles.json";
import references from "./data/references.json";
import tools from "./data/tools.json";

export default {
  name: "App",
  data: function () {
    return {
      stacks,
      socialLinks,
      roles,
      references,
      tools,
    };
  },
  components: {
    Header,
    Footer,
    StackSection,
    RoleTimeline,
    ReferenceGrid,
  },
};
</script>
