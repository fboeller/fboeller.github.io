<template>
  <div id="roleinfo" class="bg-blue h-84 w-full p-6 mb-8 rounded-lg">
    <div id="roledescription" class="box-border w-1/2 float-left">
      <div class="h-12 mb-4">
        <img v-bind:src="require(`@/assets/${image}`)" class="h-full" />
      </div>
      <p class="text-sm text-gray-300 mb-1">{{ time }}</p>
      <h4 class="text-lg mb-3">{{ position }}</h4>
      <p>{{ description }}</p>
    </div>
    <div id="rolehighlights" class="box-border w-1/2 float-left pl-6">
      <h3 class="text-2xl mb-4 mt-3">Highlights</h3>
      <div
        v-for="highlight of highlights"
        v-bind:key="highlight.text"
        class="mb-3"
      >
        <p class="mb-1">{{ highlight.text }}</p>
        <div class="flex flex-wrap">
          <span
            v-for="chip of highlight.chips"
            v-bind:key="chip"
            class="chip"
            >{{ chip }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoleInfo",
  props: {
    position: String,
    description: String,
    time: String,
    image: String,
    highlights: Array
  }
};
</script>

<style scoped>
.chip {
  @apply bg-blue-lighter flex-none py-1 px-3 mr-1 my-1 rounded-full text-sm cursor-default;
}

.chip:hover {
  @apply shadow-sm;
  transform: translateY(-1px);
}
</style>
