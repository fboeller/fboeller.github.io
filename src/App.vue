<template>
  <div
    id="app"
    class="container mx-auto bg-blue-darker text-white px-6 leading-snug"
  >
    <Header />
    <div class="clear-both"></div>
    <SkillSection v-bind:skills="skills" />
    <RoleInfo
      v-bind:position="role.position"
      v-bind:description="role.description"
      v-bind:time="role.time"
      v-bind:image="role.image"
      v-bind:highlights="role.highlights"
    />
    <Timeline />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SkillSection from "./components/SkillSection.vue";
import RoleInfo from "./components/RoleInfo.vue";
import Timeline from "./components/Timeline.vue";

export default {
  name: "App",
  data: function() {
    return {
      skills: [
        {
          title: "Programming Languages",
          image: "categories/programming-languages.jpg",
          tools: [
            { text: "Kotlin", image: "icons/kotlin.svg" },
            { text: "Java", image: "icons/java.svg" },
            { text: "Haskell", image: "icons/haskell.svg" },
            { text: "Typescript", image: "icons/typescript.svg" },
          ],
        },
        {
          title: "Functional Programming",
          image: "categories/functional-programming.jpg",
          tools: [
            { text: "Vavr", image: "icons/vavr.svg" },
            { text: "ReactiveX", image: "icons/reactivex.svg" },
          ],
        },
      ],
      role: {
        position: "Senior Software Engineer",
        description: `I am working as a senior software engineer at LeanIX. LeanIX builds
        software to enable companies to get and collaboratively maintain an
        overview of their IT landscape.`,
        time: "July 2018 - present",
        image: "companies/leanix.svg",
        highlights: [
          {
            text: "Conception and development of the Integration API",
            chips: ["Java", "Vavr", "Kubernetes"],
          },
          {
            text: "Fullstack development of a search",
            chips: ["Java", "Elasticsearch", "Angular"],
          },
        ],
      },
    };
  },
  components: {
    Header,
    SkillSection,
    RoleInfo,
    Timeline,
  },
};
</script>
