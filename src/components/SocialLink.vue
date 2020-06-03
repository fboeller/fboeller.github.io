<template>
  <a
    class="rounded-lg pl-1 pr-4 py-1 bg-blue shadow-md cursor-pointer inline-block hover:border-opacity-100 border-opacity-0 border border-gray-300 border-solid"
    :href="link.url"
  >
    <div class="h-12 w-12 inline-block align-middle">
      <img :src="require(`@/assets/icons/${link.icon}`)" class="h-full w-full rounded-lg" />
    </div>
    <p class="ml-3 inline-block">{{ link.text }}</p>
  </a>
</template>

<script>
export default {
  name: "SocialLink",
  props: {
    link: Object
  }
};
</script>
