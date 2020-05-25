<template>
  <div id="roleinfo" class="bg-blue h-72 w-full p-6 mb-8 elevated">
    <div id="roledescription" class="box-border w-1/2 float-left">
      <div class="h-12 mb-4">
        <img v-bind:src="require('@/assets/companies/leanix.svg')" class="h-full" />
      </div>
      <p class="text-sm text-gray-300 mb-1">July 2018 - present</p>
      <h4 class="text-lg mb-3">Senior Software Engineer</h4>
      <p>
        I am working as a senior software engineer at LeanIX. LeanIX builds
        software to enable companies to get and collaboratively maintain an
        overview of their IT landscape.
      </p>
    </div>
    <div id="rolehighlights" class="box-border w-1/2 float-left pl-6">
      <h3 class="text-2xl mb-4 mt-3">Highlights</h3>
      <div class="mb-3">
        <p class="mb-1">Conception and development of the Integration API</p>
        <div class="flex flex-wrap">
          <span class="chip">Java</span>
          <span class="chip">Vavr</span>
          <span class="chip">Kubernetes</span>
        </div>
      </div>
      <div>
        <p class="mb-1">Fullstack development of a search</p>
        <div class="flex flex-wrap">
          <span class="chip">Java</span>
          <span class="chip">Elasticsearch</span>
          <span class="chip">Angular</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoleInfo",
};
</script>
