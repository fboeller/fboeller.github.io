<template>
  <div
    class="md:grid md:grid-cols-2 md:gap-8 bg-blue h-full w-full p-4 md:p-6 rounded-lg shadow-md overflow-auto"
  >
    <div>
      <div class="h-12 mb-4">
        <a :href="role.url" target="_blank" rel="noopener">
          <img
            :src="require(`@/assets/${role.image}`)"
            :alt="role.organization + ' Logo'"
            class="h-full rounded-lg"
            :class="role.imageClasses"
          />
        </a>
      </div>
      <p class="text-sm text-gray-300 mb-1">{{ role.time }}</p>
      <h4 class="text-lg mb-3">
        {{ role.position }} @ {{ role.organization }}
      </h4>
      <p>{{ role.description }}</p>
    </div>
    <div>
      <h3 class="text-2xl mb-4 mt-3">Highlights</h3>
      <div
        v-for="highlight of role.highlights"
        :key="highlight.text"
        class="mb-3"
      >
        <p class="mb-1">{{ highlight.text }}</p>
        <div class="flex flex-wrap">
          <span v-for="chip of highlight.chips" :key="chip" class="chip">{{
            chip
          }}</span>
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
  @apply inline-block bg-blue-lighter py-1 px-3 mr-1 my-1 rounded-full text-sm cursor-default;
}

.chip:hover {
  @apply shadow-sm;
  transform: translateY(-1px);
}
</style>
