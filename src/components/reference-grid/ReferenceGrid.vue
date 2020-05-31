<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div
      class="flex flex-col flex-no-wrap justify-start bg-blue h-72 rounded-lg shadow-md p-6 text-white"
    >
      <div>
        <div class="h-12 w-12 inline-block align-middle">
          <img :src="require(`@/assets/icons/medium.svg`)" class="h-full w-full" />
        </div>
        <p class="text-gray-300 ml-3 inline-block">Medium Article</p>
      </div>
      <h3 class="my-3 text-lg">Pattern Matching vs. Polymorphism</h3>
      <p class="overflow-y-scroll">Subtype polymorphism is great for adding more entity types. Pattern matching is a better choice for adding more functionality. In many use cases, it’s likelier that more functionality is requested than that more entity types are requested. In this article, we implement a program based on a set of simple requirements. First, we implement it using subtype polymorphism, then using pattern matching. Given these implementations, we add two more requirements and compare the necessary changes to implement the new requirements.</p>
      <div class="mt-auto">
        <a
          href="https://medium.com/better-programming/pattern-matching-vs-polymorphism-ce0441fbfcda"
          target="_blank"
          class="float-right text-lg tracking-wider font-bold py-1 px-3 -mb-1 rounded-lg mt-3 hover:bg-blue-lighter"
        >Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReferenceGrid"
};
</script>
