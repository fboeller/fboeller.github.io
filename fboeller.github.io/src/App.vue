<template>
  <div
    id="app"
    class="container mx-auto bg-blue-darker text-white px-6 leading-snug"
  >
    <Header />
    <div class="clear-both"></div>
    <SkillCard v-bind:title="title" v-bind:image="image" v-bind:tools="tools" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SkillCard from "./components/SkillCard.vue";

export default {
  name: "App",
  data: function() {
    return {
      image: "categories/programming-languages.jpg",
      title: "Programming Languages",
      tools: [
        { text: "Kotlin", image: "icons/kotlin.svg" },
        { text: "Java", image: "icons/java.svg" },
        { text: "Haskell", image: "icons/haskell.svg" },
        { text: "Typescript", image: "icons/typescript.svg" },
      ],
    };
  },
  components: {
    Header,
    SkillCard,
  },
};
</script>
