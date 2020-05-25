<template>
  <div
    id="app"
    class="container mx-auto bg-blue-darker text-white px-6 leading-snug"
  >
    <Header />
    <div class="clear-both"></div>
    <SkillSection v-bind:skills="skills" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SkillSection from "./components/SkillSection.vue";

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
    };
  },
  components: {
    Header,
    SkillSection,
  },
};
</script>
