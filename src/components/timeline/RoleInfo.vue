<template>
  <div id="roleinfo" class="bg-blue h-84 h-full w-full p-6 rounded-lg overflow-auto">
    <div id="roledescription" class="box-border w-1/2 float-left">
      <div class="h-12 mb-4">
        <img v-bind:src="require(`@/assets/${role.image}`)" class="h-full" v-bind:class="role.imageClasses" />
      </div>
      <p class="text-sm text-gray-300 mb-1">{{ role.time }}</p>
      <h4 class="text-lg mb-3">{{ role.position }} @ {{ role.organization }}</h4>
      <p>{{ role.description }}</p>
    </div>
    <div id="rolehighlights" class="box-border w-1/2 float-left pl-6">
      <h3 class="text-2xl mb-4 mt-3">Highlights</h3>
      <div v-for="highlight of role.highlights" v-bind:key="highlight.text" class="mb-3">
        <p class="mb-1">{{ highlight.text }}</p>
        <div class="flex flex-wrap">
          <span v-for="chip of highlight.chips" v-bind:key="chip" class="chip">{{ chip }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoleInfo",
  props: {
    role: Object
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
