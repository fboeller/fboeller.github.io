<template>
  <div id="app" class="container mx-auto px-6 leading-snug">
    <Header />
    <div class="clear-both"></div>
    <SkillSection v-bind:skills="skills" />
    <RoleTimeline v-bind:roles="roles" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SkillSection from "./components/SkillSection.vue";
import RoleTimeline from "./components/RoleTimeline.vue";

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
            { text: "Vavr", image: "icons/java.svg" },
            { text: "ReactiveX", image: "icons/reactivex.svg" },
          ],
        },
      ],
      roles: [
        {
          organization: "FH Aachen",
          position: "Bachelor of Scientific Programming",
          description: "",
          time: "September 2011 – September 2014",
          image: "companies/leanix.svg",
          highlights: [],
        },
        {
          organization: "INFORM GmbH",
          position: "Mathematical and Technical Software Developer Apprentice",
          description: `While working at INFORM, I was involved in several projects for customers in the package service sector. In my team, we developed intelligent software solutions for distribution centers. Those software solutions do not just present data, they analyze the data and give solutions.`,
          time: "September 2011 – September 2014",
          image: "companies/leanix.svg",
          highlights: [
            {
              text: "Application to control hundreds of display computers ",
              chips: ["Java"],
            },
            {
              text:
                "Framework to specify protocols on top of TCP/IP for automatic building of mocking instances for different applications",
              chips: ["Java"],
            },
            {
              text: "Simulation tool for real time yard management",
              chips: ["Java"],
            },
          ],
        },
        {
          organization: "RWTH Aachen",
          position: "Master of Computer Science",
          description: "",
          time: "October 2014 – Februar 2018",
          image: "companies/leanix.svg",
          highlights: [],
        },
        {
          organization: "GUTech",
          position: "Teaching Assistant",
          description: `I did an internship at the German University of Technology in Oman for several reasons: 
          I wanted to explore an Arabian country and its culture, experience the teaching aspects of a university and improve my English skills. 
          Additionally, I took the opportunity to develop the GUtech websites.`,
          time: "September 2015 – January 2016",
          image: "companies/leanix.svg",
          highlights: [
            {
              text: "Assist in teaching of Programming fundamentals",
              chips: ["Java", "Python"],
            },
            {
              text: "Assist in teaching of Operating Systems",
              chips: ["C", "Bash", "Arch"],
            },
          ],
        },
        {
          organization: "LeiKon GmbH",
          position: "Working Student",
          description: `During my master's I joined the company LeiKon. LeiKon supports their customers in the process industry to increase added values of their production plants. As a working student, I developed multiple web interfaces, scripts for extraction and transformation of data and participated in the development of the main software products.`,
          time: "October 2016 - October 2017",
          image: "companies/leanix.svg",
          highlights: [
            {
              text: "Web-based visualization software",
              chips: ["Grafana", "Angular"],
            },
            {
              text: "Eclipse-Plugins",
              chips: ["Java"],
            },
            {
              text: "Connection to a serial bar code scanner",
              chips: ["Python", "ReactiveX"],
            },
          ],
        },
        {
          organization: "LeanIX",
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
      ],
    };
  },
  components: {
    Header,
    SkillSection,
    RoleTimeline,
  },
};
</script>
