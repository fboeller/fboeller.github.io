<template>
  <a
    class="relative lg:w-40 w-full rounded-lg pl-1 pr-4 py-1 bg-blue shadow-md cursor-pointer inline-block hover:border-opacity-100 border-opacity-0 border border-gray-300 border-solid"
    :href="link.url"
  >
    <img :src="require(`@/assets/icons/${link.icon}`)" class="inline h-8 w-8 rounded-lg" />
    <p class="absolute w-full">{{ link.text }}</p>
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

<style scoped>
a p {
  left: 45px;
  top: 50%;
  transform: translateY(-50%);
}
</style>