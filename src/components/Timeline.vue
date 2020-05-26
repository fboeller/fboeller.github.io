<template>
  <div id="timeline h-64">
    <TimelineBlock
      size="w-4/12"
      v-bind:active="lastClickTarget === 0"
      v-on:click="lastClickTarget = 0"
    />
    <div class="clear-both"></div>
    <TimelineBlock
      size="w-4/12"
      v-bind:active="lastClickTarget === 1"
      v-on:click="lastClickTarget = 1"
    />
    <div class="clear-both"></div>
    <div class="indent w-4/12"></div>
    <TimelineBlock
      size="w-5/12"
      v-bind:active="lastClickTarget === 2"
      v-on:click="lastClickTarget = 2"
    />
    <div class="clear-both"></div>
    <div class="indent w-5/12"></div>
    <TimelineBlock
      size="w-1/12"
      v-bind:active="lastClickTarget === 3"
      v-on:click="lastClickTarget = 3"
    />
    <div class="clear-both"></div>
    <div class="indent w-7/12"></div>
    <TimelineBlock
      size="w-2/12"
      v-bind:active="lastClickTarget === 4"
      v-on:click="lastClickTarget = 4"
    />
    <div class="clear-both"></div>
    <div class="indent w-9/12"></div>
    <TimelineBlock
      size="w-3/12"
      v-bind:active="lastClickTarget === 5"
      v-on:click="lastClickTarget = 5"
    />
  </div>
</template>

<script>
import TimelineBlock from "./TimelineBlock.vue";

export default {
  name: "Timeline",
  components: {
    TimelineBlock,
  },
  data: function() {
    return {
      lastClickTarget: 0,
    };
  },
};
</script>

<style scoped>
.indent {
  @apply h-8 mb-3 float-left;
}
</style>
